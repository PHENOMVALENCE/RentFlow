export const APP_NAME = "RentFlow" as const;

export const APP_TAGLINE =
  "One agreement. One payment trail. One source of truth." as const;

export const APP_SUPPORTING_MESSAGE = "Rent. Pay. Maintain. Trust." as const;

export const DEFAULT_CURRENCY = "TZS" as const;

export const DEFAULT_LOCALE = "en-TZ" as const;

export const DEFAULT_TIME_ZONE = "Africa/Dar_es_Salaam" as const;

export const USER_ROLES = ["landlord", "tenant", "property_manager"] as const;

export type UserRole = (typeof USER_ROLES)[number];
