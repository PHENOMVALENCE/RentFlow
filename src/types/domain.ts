export type AgreementStatus =
  | "DRAFT"
  | "SENT"
  | "VIEWED"
  | "ACCEPTED"
  | "ACTIVE"
  | "EXPIRED"
  | "TERMINATED"
  | "RENEWED";

export type InvoiceStatus =
  | "DRAFT"
  | "UPCOMING"
  | "DUE"
  | "PARTIALLY_PAID"
  | "PAID"
  | "OVERDUE"
  | "WAIVED"
  | "CANCELLED";

export type MaintenanceCategory =
  | "PLUMBING"
  | "ELECTRICAL"
  | "STRUCTURAL"
  | "SECURITY"
  | "APPLIANCE"
  | "CLEANING"
  | "WATER"
  | "OTHER";

export type MaintenancePriority = "LOW" | "MEDIUM" | "HIGH" | "EMERGENCY";

export type MaintenanceStatus =
  | "REPORTED"
  | "ACKNOWLEDGED"
  | "ASSIGNED"
  | "IN_PROGRESS"
  | "WAITING"
  | "RESOLVED"
  | "CLOSED"
  | "REOPENED";
