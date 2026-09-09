import { CURRENCY_CODE } from "@/lib/constants/currency";
import { DEFAULT_LOCALE } from "@/config/site";

export function formatTzs(amount: number): string {
  const formatted = new Intl.NumberFormat(DEFAULT_LOCALE, {
    maximumFractionDigits: 0,
  }).format(amount);

  return `${CURRENCY_CODE} ${formatted}`;
}
