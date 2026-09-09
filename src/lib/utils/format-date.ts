import { DEFAULT_LOCALE, DEFAULT_TIME_ZONE } from "@/config/site";

export function formatDisplayDate(date: Date): string {
  return new Intl.DateTimeFormat(DEFAULT_LOCALE, {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: DEFAULT_TIME_ZONE,
  }).format(date);
}
