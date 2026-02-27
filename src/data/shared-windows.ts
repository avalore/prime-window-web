export type ConditionStatus = "match" | "watch" | "miss";

export type SharedWindow = {
  id: string;
  spotName: string;
  areaName: string;
  activity: string;
  timezone: string;
  startsAtIso: string;
  endsAtIso: string;
  confidence: number;
  summary: string;
  sharedBy: string;
  shareNote: string;
  coordinates: {
    lat: number;
    lon: number;
  };
  conditionRows: Array<{
    name: string;
    target: string;
    forecast: string;
    status: ConditionStatus;
  }>;
  weatherDetails: Array<{
    label: string;
    value: string;
    detail?: string;
  }>;
  hourly: Array<{
    label: string;
    wind: string;
    gust: string;
    rain: string;
    confidence: number;
  }>;
  confidenceNotes: Array<{
    title: string;
    detail: string;
    state: "aligned" | "mixed" | "unstable";
  }>;
};

const sharedWindows: Record<string, SharedWindow> = {
  "south-bay-dawn": {
    id: "south-bay-dawn",
    spotName: "South Bay",
    areaName: "Dorset Coast",
    activity: "Kitesurf",
    timezone: "Europe/London",
    startsAtIso: "2026-03-03T06:40:00Z",
    endsAtIso: "2026-03-03T08:10:00Z",
    confidence: 82,
    summary: "Low winds and stable direction are expected for an early Prime Window.",
    sharedBy: "Louis",
    shareNote: "Looks clean for a dawn run. If this holds, meet at 06:20.",
    coordinates: {
      lat: 50.608,
      lon: -2.452,
    },
    conditionRows: [
      {
        name: "Wind speed",
        target: "8-14 kt",
        forecast: "10-13 kt",
        status: "match",
      },
      {
        name: "Direction",
        target: "205-245°",
        forecast: "222°",
        status: "match",
      },
      {
        name: "Gust risk",
        target: "<= 18 kt",
        forecast: "16 kt",
        status: "watch",
      },
      {
        name: "Precipitation",
        target: "<= 0.4 mm/h",
        forecast: "0.1 mm/h",
        status: "match",
      },
      {
        name: "Cloud cover",
        target: "<= 55%",
        forecast: "38%",
        status: "match",
      },
    ],
    weatherDetails: [
      {
        label: "Temperature",
        value: "9-11°C",
      },
      {
        label: "Feels like",
        value: "7-9°C",
      },
      {
        label: "Rain chance",
        value: "18%",
      },
      {
        label: "Cloud cover",
        value: "38%",
      },
      {
        label: "Visibility",
        value: "18 km",
      },
      {
        label: "Pressure",
        value: "1018 hPa",
      },
      {
        label: "Humidity",
        value: "72%",
      },
      {
        label: "Sunrise",
        value: "06:34",
        detail: "local",
      },
      {
        label: "Rapid change risk",
        value: "Low",
        detail: "after 08:30",
      },
    ],
    hourly: [
      { label: "06:00", wind: "10 kt", gust: "14 kt", rain: "0.1 mm", confidence: 74 },
      { label: "06:30", wind: "11 kt", gust: "15 kt", rain: "0.1 mm", confidence: 81 },
      { label: "07:00", wind: "12 kt", gust: "16 kt", rain: "0.1 mm", confidence: 84 },
      { label: "07:30", wind: "12 kt", gust: "16 kt", rain: "0.1 mm", confidence: 82 },
      { label: "08:00", wind: "13 kt", gust: "17 kt", rain: "0.2 mm", confidence: 78 },
      { label: "08:30", wind: "15 kt", gust: "19 kt", rain: "0.3 mm", confidence: 66 },
    ],
    confidenceNotes: [
      {
        title: "Model agreement",
        detail: "Most sources align through 08:00.",
        state: "aligned",
      },
      {
        title: "Gust spread",
        detail: "Short spikes near the headland are possible.",
        state: "mixed",
      },
      {
        title: "Rapid change window",
        detail: "Confidence falls after 08:30.",
        state: "unstable",
      },
    ],
  },
  "north-ridge-evening": {
    id: "north-ridge-evening",
    spotName: "North Ridge",
    areaName: "Peak District",
    activity: "Paraglide",
    timezone: "Europe/London",
    startsAtIso: "2026-03-05T16:20:00Z",
    endsAtIso: "2026-03-05T18:00:00Z",
    confidence: 76,
    summary: "Late daylight window with gentle wind and moderate cloud breaks.",
    sharedBy: "PrimeWindow Team",
    shareNote: "Good option for a relaxed evening plan.",
    coordinates: {
      lat: 53.335,
      lon: -1.843,
    },
    conditionRows: [
      {
        name: "Wind speed",
        target: "6-12 kt",
        forecast: "7-11 kt",
        status: "match",
      },
      {
        name: "Direction",
        target: "240-290°",
        forecast: "261°",
        status: "match",
      },
      {
        name: "Gust risk",
        target: "<= 15 kt",
        forecast: "14 kt",
        status: "watch",
      },
      {
        name: "Precipitation",
        target: "<= 0.2 mm/h",
        forecast: "0.0 mm/h",
        status: "match",
      },
    ],
    weatherDetails: [
      {
        label: "Temperature",
        value: "8-10°C",
      },
      {
        label: "Feels like",
        value: "6-9°C",
      },
      {
        label: "Rain chance",
        value: "9%",
      },
      {
        label: "Cloud cover",
        value: "44%",
      },
      {
        label: "Visibility",
        value: "20 km",
      },
      {
        label: "Pressure",
        value: "1022 hPa",
      },
      {
        label: "Humidity",
        value: "67%",
      },
      {
        label: "Sunset",
        value: "17:52",
        detail: "local",
      },
    ],
    hourly: [
      { label: "15:30", wind: "8 kt", gust: "12 kt", rain: "0.0 mm", confidence: 68 },
      { label: "16:00", wind: "9 kt", gust: "13 kt", rain: "0.0 mm", confidence: 75 },
      { label: "16:30", wind: "9 kt", gust: "14 kt", rain: "0.0 mm", confidence: 78 },
      { label: "17:00", wind: "10 kt", gust: "14 kt", rain: "0.0 mm", confidence: 76 },
      { label: "17:30", wind: "11 kt", gust: "15 kt", rain: "0.1 mm", confidence: 70 },
    ],
    confidenceNotes: [
      {
        title: "Model agreement",
        detail: "Direction and wind speed remain close across sources.",
        state: "aligned",
      },
      {
        title: "Cloud uncertainty",
        detail: "Cloud breaks vary by around thirty minutes.",
        state: "mixed",
      },
    ],
  },
};

export function getSharedWindowById(id: string): SharedWindow | null {
  return sharedWindows[id] ?? null;
}

export function getSharedWindowIds(): string[] {
  return Object.keys(sharedWindows);
}
