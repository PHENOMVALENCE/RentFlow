export type NotificationChannel = "sms" | "in_app";

export type NotificationTemplateId =
  | "tenant_invitation"
  | "agreement_ready"
  | "agreement_accepted"
  | "rent_upcoming"
  | "rent_due_today"
  | "rent_overdue"
  | "payment_received"
  | "receipt_generated"
  | "maintenance_received"
  | "maintenance_status_changed"
  | "tenancy_nearing_expiry";

export type SmsMessage = {
  to: string;
  templateId: NotificationTemplateId;
  body: string;
};

export type SmsProvider = {
  send(message: SmsMessage): Promise<{ accepted: boolean }>;
};
