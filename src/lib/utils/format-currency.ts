import { CURRENCY_CODE } from "@/lib/constants/currency";

export function formatTzs(amount: number): string {
  const absolute = Math.abs(Math.trunc(amount));
  const grouped = String(absolute).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const sign = amount < 0 ? "-" : "";

  return `${CURRENCY_CODE} ${sign}${grouped}`;
}
