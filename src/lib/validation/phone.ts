const TZ_MOBILE_PATTERN = /^(?:\+?255|0)7\d{8}$/;

export function isTanzanianMobileNumber(value: string): boolean {
  const compact = value.replace(/[\s-]/g, "");
  return TZ_MOBILE_PATTERN.test(compact);
}

export function normalizeTanzanianMobileNumber(value: string): string | null {
  const compact = value.replace(/[\s-]/g, "");

  if (!isTanzanianMobileNumber(compact)) {
    return null;
  }

  if (compact.startsWith("0")) {
    return `+255${compact.slice(1)}`;
  }

  if (compact.startsWith("255")) {
    return `+${compact}`;
  }

  return compact;
}
