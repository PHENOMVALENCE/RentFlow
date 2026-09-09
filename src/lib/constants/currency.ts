export const CURRENCY_CODE = "TZS" as const;

export const MOBILE_MONEY_PROVIDERS = [
  "mpesa",
  "mixx_by_yas",
  "airtel_money",
  "halopesa",
  "sandbox",
] as const;

export type MobileMoneyProvider = (typeof MOBILE_MONEY_PROVIDERS)[number];
