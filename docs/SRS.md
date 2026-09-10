# RentFlow Software Requirements Specification (SRS)

## 1. Purpose

This document defines the functional and non-functional requirements for RentFlow. It is the implementation contract for the 2027 Final Year Project and should be updated whenever product behaviour changes.

## 2. Product Scope

RentFlow manages the operational relationship between landlords and tenants from onboarding through tenancy closure. It does not primarily operate as a property-listing marketplace.

## 3. Actors

### Landlord
Creates and manages properties, units, tenancies, agreements, invoices, payments, receipts, maintenance, inspections and reports.

### Tenant
Views tenancy details, agreements, invoices, balances and receipts; initiates rent payments; submits maintenance requests; participates in inspections and receives notifications.

### Property Manager
Manages assigned properties on behalf of landlords according to delegated permissions.

### Administrator
Supports platform operations, investigates failures, manages system configuration and audits platform activity without bypassing privacy or authorization controls.

### External Systems
Payment providers, SMS providers, file-storage services and optional USSD infrastructure.

## 4. Functional Requirements

### FR-AUTH — Authentication and Access

- FR-AUTH-001: The system shall allow users to register and authenticate securely.
- FR-AUTH-002: The system shall support landlord, tenant, property-manager and administrator roles.
- FR-AUTH-003: The system shall enforce server-side authorization for all protected operations.
- FR-AUTH-004: Users shall not access properties, tenancies, documents or payments for which they lack permission.
- FR-AUTH-005: The system shall support verified phone numbers and/or email addresses as required by the chosen authentication implementation.

### FR-PROP — Property and Unit Management

- FR-PROP-001: A landlord shall create, edit and archive properties.
- FR-PROP-002: A property shall contain one or more units.
- FR-PROP-003: A unit shall support occupancy status, address/context, rent configuration and descriptive metadata.
- FR-PROP-004: The system shall prevent conflicting active tenancies for a unit unless explicitly supported by a shared-tenancy model.
- FR-PROP-005: Landlords shall see occupied and vacant units.

### FR-TEN — Tenancy Management

- FR-TEN-001: A landlord shall create a tenancy connecting a tenant to a unit.
- FR-TEN-002: A tenancy shall store start date, optional end date, rent amount, billing frequency, due-day rules, deposit information and status.
- FR-TEN-003: The system shall support tenancy states such as DRAFT, PENDING, ACTIVE, EXPIRED and TERMINATED.
- FR-TEN-004: The system shall retain tenancy history after closure.
- FR-TEN-005: The system shall notify relevant users when a tenancy approaches expiry.

### FR-AGR — Rental Agreements

- FR-AGR-001: A landlord shall create a structured rental agreement from tenancy data.
- FR-AGR-002: The system shall version agreements and retain acceptance metadata.
- FR-AGR-003: A tenant shall review an agreement before acceptance.
- FR-AGR-004: Agreement acceptance shall record user, timestamp, version and relevant audit metadata.
- FR-AGR-005: The system shall not represent basic digital acceptance as legally certified e-signature unless the implementation has been validated for that claim.

### FR-BILL — Rent Billing

- FR-BILL-001: The system shall generate rent invoices/obligations from active tenancy billing rules.
- FR-BILL-002: Invoice states shall include DRAFT, UPCOMING, DUE, PARTIALLY_PAID, PAID, OVERDUE, WAIVED and CANCELLED where applicable.
- FR-BILL-003: Invoices shall exist independently of payment records.
- FR-BILL-004: The system shall calculate outstanding balance from invoice amount and valid payment allocations.
- FR-BILL-005: The system shall support partial payments.
- FR-BILL-006: The system shall prevent over-allocation of a payment unless an explicit credit-balance feature is implemented.

### FR-PAY — Payments

- FR-PAY-001: A tenant shall be able to initiate a payment against an outstanding rent invoice.
- FR-PAY-002: The payment domain shall be provider-agnostic.
- FR-PAY-003: The system shall store internal payment ID, amount, currency, payer, provider, provider reference, status and timestamps.
- FR-PAY-004: The system shall process payment callbacks/webhooks idempotently.
- FR-PAY-005: Payment success shall be confirmed server-side using trusted provider evidence where available.
- FR-PAY-006: Failed and cancelled payments shall not settle invoices.
- FR-PAY-007: Manual payments may be supported but must be clearly distinguished from provider-verified payments.

### FR-REC — Receipts

- FR-REC-001: A successful allocated payment shall create or update an auditable receipt record.
- FR-REC-002: Receipts shall show tenant, tenancy/unit, amount, date, payment reference and invoice allocation.
- FR-REC-003: Tenants and authorized landlords shall be able to retrieve historical receipts.

### FR-NOT — Notifications and SMS

- FR-NOT-001: The system shall support rent reminders before and on due dates.
- FR-NOT-002: The system shall support overdue notifications.
- FR-NOT-003: The system shall notify users about relevant payment, maintenance, agreement and lease-expiry events.
- FR-NOT-004: SMS delivery attempts shall be logged with status where provider data is available.
- FR-NOT-005: Notification delivery failures shall not corrupt the originating business transaction.

### FR-MNT — Maintenance

- FR-MNT-001: A tenant shall submit a maintenance request with category, description, priority and optional attachments.
- FR-MNT-002: Maintenance states shall support REPORTED, ACKNOWLEDGED, ASSIGNED, IN_PROGRESS, RESOLVED, CLOSED and REOPENED where appropriate.
- FR-MNT-003: Authorized landlords/property managers shall update maintenance status and notes.
- FR-MNT-004: The system shall preserve the chronological maintenance history.
- FR-MNT-005: Tenants shall see status changes for their own requests.

### FR-INSP — Inspections and Deposits

- FR-INSP-001: Authorized users shall create move-in and move-out inspections.
- FR-INSP-002: Inspections shall support checklist items, condition, notes and images.
- FR-INSP-003: The system shall retain inspection evidence by tenancy.
- FR-INSP-004: The system shall maintain a deposit accounting ledger showing amount received, documented deductions and refundable balance.
- FR-INSP-005: The initial FYP shall not represent the platform as holding customer deposit funds unless a regulated custody mechanism is explicitly implemented.

### FR-DOC — Documents

- FR-DOC-001: Authorized users shall upload and retrieve tenancy documents.
- FR-DOC-002: File access shall be private by default.
- FR-DOC-003: The system shall validate allowed file types and size limits.

### FR-ANL — Analytics

- FR-ANL-001: Landlords shall see expected rent, collected rent and outstanding rent for selected periods.
- FR-ANL-002: Landlords shall see occupancy and vacancy information.
- FR-ANL-003: Landlords shall see upcoming lease expiries.
- FR-ANL-004: Landlords shall see maintenance workload and resolution indicators.
- FR-ANL-005: Reports shall be calculated from authoritative transaction records rather than manually entered dashboard totals.

### FR-AUD — Audit Trail

- FR-AUD-001: Critical events shall create audit records.
- FR-AUD-002: The tenancy timeline shall show relevant agreement, billing, payment, receipt, maintenance, inspection, renewal and closure events.
- FR-AUD-003: Audit records shall not expose secrets or unnecessary sensitive payloads.

### FR-I18N — Localization and Accessibility

- FR-I18N-001: User-facing copy shall be architected for English and Kiswahili.
- FR-I18N-002: Currency shall default to TZS for the initial market.
- FR-I18N-003: Phone-number validation shall support Tanzanian formats.
- FR-I18N-004: Core flows shall be usable on small mobile screens and constrained bandwidth.

## 5. Non-Functional Requirements

- NFR-001 Security: Protected operations require authentication and authorization.
- NFR-002 Privacy: Tenant and landlord data shall be isolated according to explicit relationships and roles.
- NFR-003 Reliability: Payment webhook handling shall be idempotent and recoverable.
- NFR-004 Performance: Common dashboard and transactional interactions should normally return within an acceptable interactive threshold under expected FYP load.
- NFR-005 Availability: External SMS/payment failures shall degrade gracefully.
- NFR-006 Maintainability: Business rules shall be separated from UI code and external-provider adapters.
- NFR-007 Testability: Critical calculations and status transitions shall be unit-testable without external providers.
- NFR-008 Observability: Errors and external-integration failures shall produce structured logs without leaking secrets.
- NFR-009 Portability: The application shall be deployable through documented environments and environment variables.
- NFR-010 Accessibility: Forms, navigation and controls shall follow practical keyboard, contrast, labeling and semantic HTML requirements.
- NFR-011 Auditability: Financial and agreement state transitions shall be traceable.
- NFR-012 Low Bandwidth: Avoid unnecessary polling, oversized assets and excessive client-side JavaScript.

## 6. Critical Acceptance Scenarios

1. Landlord creates property and unit, invites/links a tenant and activates a tenancy.
2. Tenant reviews and accepts an agreement; the version and timestamp are retained.
3. Rent invoice is generated with the correct amount and due date.
4. Tenant makes a partial payment; invoice becomes PARTIALLY_PAID with the correct balance.
5. Tenant completes the remaining payment; verified provider event changes invoice to PAID and produces a receipt exactly once.
6. Duplicate webhook delivery does not create a duplicate payment or receipt.
7. Tenant reports a maintenance issue; landlord changes its status; both parties see the same history.
8. Unauthorized Tenant A cannot access Tenant B's tenancy, documents, payments or maintenance requests.
9. Landlord sees aggregate collections and arrears derived from underlying invoices and allocations.
10. Move-out inspection and deposit ledger produce a traceable closing record.

## 7. Traceability

Each implementation issue and test should reference the applicable requirement IDs in this document. Requirements may be expanded, but identifiers should not be silently repurposed after implementation begins.
