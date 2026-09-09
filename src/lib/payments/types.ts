export const PAYMENT_STATUSES = [
  "CREATED",
  "PENDING",
  "PROCESSING",
  "SUCCESSFUL",
  "FAILED",
  "CANCELLED",
  "REVERSED",
] as const;

export type PaymentStatus = (typeof PAYMENT_STATUSES)[number];

export type PaymentProviderId =
  | "sandbox"
  | "mpesa"
  | "mixx_by_yas"
  | "airtel_money"
  | "halopesa"
  | "bank"
  | "manual";

export type PaymentInitiationInput = {
  invoiceId: string;
  amount: number;
  currency: "TZS";
  payerId: string;
  provider: PaymentProviderId;
};

export type PaymentInitiationResult = {
  paymentId: string;
  status: PaymentStatus;
  providerReference: string | null;
};

/**
 * Provider-agnostic payment adapter.
 * Concrete providers must be implemented server-side only.
 */
export type PaymentProvider = {
  readonly id: PaymentProviderId;
  initiate(input: PaymentInitiationInput): Promise<PaymentInitiationResult>;
};
