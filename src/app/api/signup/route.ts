import { NextRequest, NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 6;
const LOOPS_BASE_URL = "https://app.loops.so/api";
const ALLOWED_ACTIVITIES = new Set(["Fly", "Surf", "Ride", "Climb", "Sail", "Shoot", "Run", "Explore"]);

const rateLimitBuckets = new Map<string, { count: number; resetAt: number }>();

type SignupPayload = {
  email?: unknown;
  activities?: unknown;
  location?: unknown;
  company?: unknown;
  turnstileToken?: unknown;
  page?: unknown;
};

type TurnstileVerification = {
  success: boolean;
};

function errorResponse(status: number, error: string) {
  return NextResponse.json({ ok: false, error }, { status });
}

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }

  return "unknown";
}

function isRateLimited(key: string, now: number): boolean {
  const bucket = rateLimitBuckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
    rateLimitBuckets.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  bucket.count += 1;
  if (bucket.count > RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  rateLimitBuckets.set(key, bucket);
  return false;
}

function normalizeActivities(raw: unknown): string[] {
  if (!Array.isArray(raw)) {
    return [];
  }

  return raw
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter((item) => ALLOWED_ACTIVITIES.has(item))
    .slice(0, 8);
}

async function verifyTurnstileToken(token: string, secret: string, ip: string): Promise<boolean> {
  const body = new URLSearchParams({
    secret,
    response: token,
  });

  if (ip !== "unknown") {
    body.set("remoteip", ip);
  }

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  if (!response.ok) {
    return false;
  }

  const result = (await response.json()) as TurnstileVerification;
  return Boolean(result.success);
}

export async function POST(request: NextRequest) {
  const loopsApiKey = process.env.LOOPS_API_KEY;
  if (!loopsApiKey) {
    return errorResponse(503, "Signups are not configured yet.");
  }

  let payload: SignupPayload;
  try {
    payload = (await request.json()) as SignupPayload;
  } catch {
    return errorResponse(400, "Invalid request body.");
  }

  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
  const location = typeof payload.location === "string" ? payload.location.trim().slice(0, 120) : "";
  const company = typeof payload.company === "string" ? payload.company.trim() : "";
  const turnstileToken = typeof payload.turnstileToken === "string" ? payload.turnstileToken.trim() : "";
  const page = typeof payload.page === "string" ? payload.page.trim().slice(0, 80) : "/";
  const activities = normalizeActivities(payload.activities);

  // Silently accept bot submissions that fill honeypot fields.
  if (company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (!EMAIL_PATTERN.test(email)) {
    return errorResponse(400, "Please enter a valid email address.");
  }

  const now = Date.now();
  const ip = getClientIp(request);
  if (isRateLimited(ip, now)) {
    return errorResponse(429, "Too many attempts. Please wait a few minutes and try again.");
  }

  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret) {
    if (!turnstileToken) {
      return errorResponse(400, "Please complete the anti-spam check.");
    }

    const verified = await verifyTurnstileToken(turnstileToken, turnstileSecret, ip);
    if (!verified) {
      return errorResponse(400, "Anti-spam check failed. Please try again.");
    }
  }

  const source = process.env.LOOPS_SIGNUP_SOURCE ?? "PrimeWindow early access form";
  const eventName = process.env.LOOPS_SIGNUP_EVENT_NAME ?? "earlyAccessSignup";

  const contactResponse = await fetch(`${LOOPS_BASE_URL}/v1/contacts/update`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${loopsApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      subscribed: true,
      source,
      userGroup: "PrimeWindow early access",
    }),
  });

  if (!contactResponse.ok) {
    const details = await contactResponse.text();
    console.error("Loops contact update failed", details);
    return errorResponse(502, "Signup service unavailable. Please try again.");
  }

  const eventProperties: Record<string, string> = {
    page,
  };
  if (activities.length > 0) {
    eventProperties.activities = activities.join(", ");
  }
  if (location) {
    eventProperties.location = location;
  }

  const eventResponse = await fetch(`${LOOPS_BASE_URL}/v1/events/send`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${loopsApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      eventName,
      eventProperties,
    }),
  });

  if (!eventResponse.ok) {
    const details = await eventResponse.text();
    console.error("Loops event send failed", details);
  }

  return NextResponse.json({ ok: true });
}
