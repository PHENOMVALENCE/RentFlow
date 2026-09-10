# API Integrations — RentFlow

No live third-party credentials are currently configured. This document defines the planned integration boundaries for the Laravel implementation.

Never commit secrets. Once the Laravel application is initialized, `.env.example` will document variable names using safe placeholders only.

## Integration Principles

- third-party providers must sit behind internal Laravel interfaces/services;
- provider-specific SDK calls must not be scattered across controllers or Livewire components;
- credentials remain server-side;
- external callbacks are untrusted until verified;
- payment and notification failures must degrade safely;
- retryable external work should use Laravel queues/jobs;
- application/domain records remain authoritative even when providers are temporarily unavailable.

## Africa's Talking — SMS

**Purpose:** transactional SMS reminders and notifications.

Suggested Laravel boundary:

```text
app/Services/SMS/
  SmsProvider.php
  AfricasTalkingSmsProvider.php
```

Exact class names may change, but business logic should depend on an internal contract rather than the provider SDK directly.

Expected environment/config values may include:

- `AFRICASTALKING_USERNAME`
- `AFRICASTALKING_API_KEY`
- `AFRICASTALKING_SENDER_ID`

Map environment variables into a Laravel config file and access them using `config()`.

**Flow:** Domain event/action → Notification/Job → SMS service → Africa's Talking → delivery result/callback where available.

**Retries:** Use bounded queue retries for transient failures. Do not blindly resend messages where duplicate communication would be harmful.

**Failure rule:** SMS failure must not roll back a successful payment, tenancy update or other authoritative business transaction.

## Payment Provider Abstraction

**Purpose:** collect and reconcile rent without coupling RentFlow to one mobile-money gateway.

Suggested Laravel boundary:

```text
app/Services/Payments/
  PaymentProvider.php
  SandboxPaymentProvider.php
  <ProviderName>PaymentProvider.php
```

Potential internal responsibilities:

- initiate payment request;
- return normalized pending/provider references;
- normalize provider status;
- verify webhook authenticity;
- normalize callbacks;
- surface provider errors through stable application exceptions/results.

Expected environment/config values may include:

- `PAYMENT_PROVIDER`
- provider API/base URL values
- provider API keys/secrets
- payment webhook secret/signing key

Do not expose provider credentials to Blade/Livewire/browser code.

## Payment Flow

```text
Tenant requests payment
        ↓
Laravel validates invoice + payer
        ↓
Payment service creates internal payment record
        ↓
Provider adapter initiates collection
        ↓
Provider returns pending reference
        ↓
Provider webhook/callback reaches Laravel
        ↓
Verify provider authenticity
        ↓
Check idempotency / existing provider event
        ↓
Validate amount + currency + references
        ↓
Database transaction reconciles payment/allocation
        ↓
Invoice balance/status updated
        ↓
Receipt generated/recorded
        ↓
SMS/notification dispatched asynchronously
```

Never settle an invoice based solely on a browser success page.

## Webhook Requirements

Payment callbacks must:

- use HTTPS in production;
- verify signatures/authenticity where the provider supports it;
- reject malformed payloads;
- validate TZS amount/currency/reference relationships;
- process duplicate events idempotently;
- store provider transaction/event identifiers;
- avoid logging credentials or unnecessary sensitive payloads;
- use database transactions around financial state transitions;
- return provider-appropriate HTTP responses;
- tolerate provider retries.

## Candidate Payment Channels

| Channel | Role | FYP Direction |
| --- | --- | --- |
| Sandbox simulator | Development/demo | Implement first |
| M-Pesa | Mobile-money collection | Provider/gateway dependent |
| Mixx by Yas | Mobile-money collection | Provider/gateway dependent |
| Airtel Money | Mobile-money collection | Provider/gateway dependent |
| HaloPesa | Mobile-money collection | Provider/gateway dependent |
| Bank transfer | Alternative | Later |
| Manual payment record | Exception/offline flow | Optional, clearly marked unverified/manual |

A gateway that exposes several Tanzanian operators may be preferable to implementing each operator independently. Provider selection should be documented when credentials and commercial/API constraints are known.

## File Storage

Laravel Filesystem is the application boundary for documents and evidence.

Potential files:

- agreements;
- receipts;
- maintenance photos;
- inspection photos/documents.

Development may use local storage. Production may use an S3-compatible/private object-storage provider.

Rules:

- private by default;
- authorization-controlled retrieval;
- validate MIME type, extension and size;
- avoid storing sensitive files in publicly guessable paths.

## Authentication Integrations

The initial browser application should use Laravel's own authentication/session facilities rather than an external auth platform.

If SMS/phone OTP authentication is later introduced, it should be implemented through a dedicated verification flow/service and must not weaken Laravel authorization controls.

Future external/mobile API authentication may use Laravel Sanctum if a real API consumer is added.

## Optional USSD Integration

USSD is a future low-bandwidth extension, not required for the first implementation.

Potential flows:

- check outstanding rent;
- retrieve due date;
- initiate a payment request;
- check payment status;
- submit a simple maintenance request.

USSD callbacks would terminate in Laravel API/controller endpoints and invoke the same domain services used by the web application.

## Optional WhatsApp Integration

Future notifications or tenant self-service may use WhatsApp through a suitable provider. This must remain a channel adapter rather than a second source of tenancy truth.

## Optional AI Provider

Potential future use: advisory classification of maintenance images/text.

Rules:

- AI is not required for the core FYP;
- recommendations remain advisory;
- tenant/landlord users retain control over final maintenance category/priority;
- never send unnecessary personal/tenancy data to third-party AI providers;
- credentials remain server-side.

## Provider Configuration

Provider credentials should be mapped into dedicated Laravel config files, for example:

```text
config/services.php
config/payments.php
config/sms.php
```

Exact files may vary. Domain/application code should depend on configuration/services, not direct `env()` calls.

## Testing Integrations

Use fakes/mocks/sandbox providers so automated tests do not require real money or SMS delivery.

Required scenarios include:

- successful payment;
- failed payment;
- partial payment;
- duplicate webhook;
- invalid signature;
- amount mismatch;
- provider timeout;
- SMS success;
- SMS provider failure;
- retry handling.

See `TESTING.md`.
