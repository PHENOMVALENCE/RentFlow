# RentFlow Project Specification

## 1. Executive Summary

RentFlow is a digital rental relationship and financial management platform designed for Tanzanian residential tenancies. It replaces fragmented paper agreements, WhatsApp chats, notebooks, spreadsheets, and mobile-money screenshots with one shared workflow: property → unit → tenant → tenancy → agreement → rent invoice → payment → receipt → maintenance → rental history → renewal or exit.

RentFlow is being developed for the RIDC PT Innovation Hackathon 2026 and is positioned as Software / Web & Mobile with strong Financial Inclusion and Fintech characteristics.

## 2. Vision

Become trusted digital infrastructure for rental relationships in Tanzania: one agreement, one payment trail, one source of truth.

## 3. Mission

Give landlords and tenants a shared, auditable record of occupancy, rent obligations, mobile-money payments, receipts, maintenance, and tenancy history — accessible on inexpensive Android phones and usable in low-bandwidth environments.

## 4. Problem Statement

Rental relationships are managed across disconnected systems: paper or verbal agreements, WhatsApp, handwritten notebooks, spreadsheets, mobile-money SMS, payment screenshots, phone calls, and informal maintenance requests.

Landlords struggle to know who has paid, calculate outstanding rent, track overdue invoices, keep property records, issue consistent receipts, remind tenants, and retain history.

Tenants struggle to access agreements, prove payment, understand balances, get receipts, track maintenance, and demonstrate rental reliability to future landlords.

## 5. Market Context

Tanzania’s urban rental market is largely informal or semi-formal. Mobile money (M-Pesa, Mixx by Yas, Airtel Money, HaloPesa) is the dominant payment rail. SMS remains a reliable notification channel. Many users access the internet on low-cost Android devices. English is a practical initial UI language; Swahili is required for later inclusion.

RentFlow is not a US-centric property-management SaaS clone. Billing is in TZS. Identity and contact patterns assume Tanzanian phone numbers. Payments are designed around mobile money first, banks second.

## 6. Target Users

- Landlords with one or many residential properties
- Tenants renting houses, apartments, rooms, or units
- Future: property managers (not in hackathon MVP)

## 7. User Personas

**Amina, landlord (Dar es Salaam)**  
Owns three apartment units. Collects rent via Mixx and M-Pesa. Currently tracks payments in a notebook and WhatsApp screenshots. Needs occupancy, due dates, and payment confirmation without chasing tenants.

**Joseph, tenant**  
Rents a room monthly. Pays by mobile money. Needs proof of payment, a copy of the agreement, and a way to report plumbing issues without losing the conversation in chat.

**Future — Neema, property manager**  
Would manage multiple landlords. Out of MVP scope; architecture should not block a later role.

## 8. Core Value Proposition

Instead of:

- Agreement → paper
- Payment → mobile-money screenshot
- Receipt → WhatsApp
- Reminder → phone call
- Maintenance → chat
- Records → notebook

RentFlow provides:

Digital agreement → automated rent obligation → mobile-money payment → verified digital receipt → maintenance tracking → rental history → renewal/exit records.

## 9. Product Principles

1. Shared source of truth for both parties
2. Mobile-first, low-bandwidth
3. Provider-agnostic payments
4. Consent-controlled rental history
5. Auditability over informal chat
6. Honest claims — no fake legal or credit-score status
7. Least privilege and tenant privacy
8. Complete vertical workflows over incomplete feature sprawl

## 10. User Roles

**Landlord** — owns properties and units, invites tenants, creates agreements, tracks invoices and payments, handles maintenance.

**Tenant** — accepts invitations and agreements, views obligations, pays rent, receives receipts, submits maintenance, controls Rental Passport sharing.

**Property manager** — future role; do not prioritize for the hackathon MVP.

## 11. Core Product Modules

1. Authentication & Identity  
2. Landlord Management  
3. Tenant Management  
4. Property Management  
5. Unit Management  
6. Tenancy Management  
7. Digital Agreements  
8. Rent Billing / Invoicing  
9. Payments  
10. Digital Receipts  
11. Notifications & Reminders  
12. Maintenance Management  
13. Rental History  
14. Rental Passport  
15. Analytics / Reporting  
16. Audit Trail  

## 12. MVP Scope

The hackathon MVP is one end-to-end vertical:

1. Landlord creates account  
2. Creates property  
3. Creates unit  
4. Adds/invites tenant  
5. Creates tenancy  
6. Creates digital rental agreement  
7. Tenant reviews agreement  
8. Tenant accepts agreement  
9. RentFlow generates a rent obligation/invoice  
10. Tenant sees amount due and due date  
11. Tenant initiates or simulates payment  
12. Payment is recorded  
13. Landlord sees payment immediately  
14. Tenant receives a digital receipt  
15. Payment/reminder notification is sent  
16. Tenant creates a maintenance request  
17. Landlord receives it  
18. Landlord updates status  
19. Tenant sees progress  
20. Timeline records major events  

## 13. Out-of-Scope Features

Not in hackathon MVP unless leftover capacity remains:

- Property-manager consoles
- Marketplace listings
- Automatic tenant blacklists or credit scores
- Full legally certified e-signature under Tanzanian law
- Live production connections to every mobile-money operator
- Native mobile apps (responsive web first)
- Complex accounting, tax filing, or payroll
- AI as a primary product
- Multi-country expansion

## 14. Core Workflows

**Onboarding:** landlord account → property → unit → tenant invite → tenancy.

**Agreement:** structured draft from tenancy data → sent → viewed → accepted with version, user, and timestamp.

**Billing:** invoices independent of payments; statuses include DRAFT, UPCOMING, DUE, PARTIALLY_PAID, PAID, OVERDUE, WAIVED, CANCELLED.

**Payment:** provider-agnostic initiation; sandbox simulator for demo; later M-Pesa, Mixx, Airtel Money, HaloPesa, bank, manual.

**Maintenance:** tenant reports → landlord workflow (REPORTED through CLOSED/REOPENED) with history.

**Exit/renewal:** agreement expiry monitoring; archive or renew; history retained.

## 15. Rental Passport

Tenants may eventually obtain a portable, consent-controlled Rental Passport showing verified tenancies, on-time vs late payments, and completed/active agreements.

This is **not** a credit score. The platform must not auto-blacklist tenants or publish history. Sharing is tenant-controlled and subject to legal, privacy, and consent requirements.

## 16. Trust & Audit Trail

Each tenancy should have an immutable-style chronological timeline (agreement created/accepted, payments, maintenance, renewals). Agreement acceptance stores version, accepting user, timestamp, and audit metadata. Status changes on invoices, payments, and maintenance must be historically traceable.

## 17. Mobile-Money Strategy

Do not hard-code the domain around one operator. Implement a payment-provider abstraction with a sandbox simulator first. Store internal payment IDs, invoice IDs, amount, TZS, payer, provider, provider references, timestamps, status, and raw metadata where safe. Credentials never reach the browser.

## 18. Notification Strategy

Plan Africa's Talking for SMS. Cover invitations, agreement events, rent reminders, payment receipts, maintenance updates, and expiry notices. Use adapter boundaries. In-app notifications may complement SMS.

## 19. Low-Bandwidth Strategy

Prefer server rendering, compressed assets, responsive images, minimal client JavaScript, lazy loading, pagination, efficient queries, and no unnecessary polling. Optimistic UI only where safe.

## 20. Localization Strategy

Architect copy so Swahili can be introduced without rewriting business logic. English is the initial UI language. Dates and numbers should be understandable in Tanzanian locales (`en-TZ`, later `sw-TZ`).

## 21. Privacy Principles

Least privilege, tenant data privacy, landlord isolation, explicit consent for history sharing, no public rental-history exposure, secure file storage, and data-retention discipline.

## 22. Security Principles

Server-side authorization, RLS before production, validated webhooks, input and upload validation, secrets in environment variables only, HTTPS in production, rate limiting and abuse controls as the product is exposed.

## 23. Success Metrics

Hackathon: complete demo path without dead ends.

Product (later): time-to-first-agreement, invoice-to-payment conversion, on-time payment rate, receipt issuance rate, maintenance resolution time, tenant passport consent rate, SMS delivery success.

## 24. Hackathon Demonstration Flow

See `docs/HACKATHON.md`. The live demo should walk from landlord sign-in through payment, receipt, SMS (or sandbox equivalent), maintenance, timeline, and a Rental Passport summary.

## 25. Future Product Direction

After MVP: production mobile-money rails, SMS at scale, Swahili, PDF agreements with verification IDs, property-manager role, advisory maintenance intelligence, analytics, and carefully designed sharing of verified rental history with housing providers or financial institutions under consent.
