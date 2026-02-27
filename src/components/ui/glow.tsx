import { cn } from "@/lib/cn";

type GlowProps = {
  className?: string;
};

export function Glow({ className }: GlowProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full bg-accent/20 blur-3xl",
        className,
      )}
    />
  );
}
