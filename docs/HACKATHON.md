# Hackathon strategy — RentFlow

## Event

**RIDC PT Innovation Hackathon 2026**

Portal: [https://hackathon.ubunifu.ega.go.tz/](https://hackathon.ubunifu.ega.go.tz/)

## Primary positioning

- Software / Web & Mobile
- Financial Inclusion & Fintech

## Pitch

RentFlow is a digital rental infrastructure platform designed for Tanzania that connects landlords and tenants through structured tenancy agreements, automated rent tracking, mobile-money payments, verified receipts, maintenance management, automated communication, and portable rental records.

## Main message

**One agreement. One payment trail. One source of truth.**

Supporting: *Rent. Pay. Maintain. Trust.*

## Problem

Informal rental administration: paper, WhatsApp, notebooks, and mobile-money screenshots. Landlords lose track of collections. Tenants cannot prove they paid.

## Solution

A shared digital lifecycle from property and unit through agreement, invoice, payment, receipt, maintenance, and history.

## Innovation

Not another generic dashboard. RentFlow is infrastructure for trust: structured agreements, provider-agnostic mobile money, receipts, SMS, a tenancy timeline, and a consent-controlled Rental Passport that is **not** a credit score.

## Tanzanian relevance

TZS, local phone numbers, M-Pesa / Mixx by Yas / Airtel Money / HaloPesa, SMS, mobile-first, low-bandwidth, English then Swahili.

## Target users

Landlords (one or many units) and tenants (house, apartment, room, or unit).

## Measurable impact

On-time collections, time-to-receipt, reduced payment disputes, maintenance cycle time, and (later) consented sharing of verified rental history.

## Technical feasibility

Next.js + Supabase + adapter pattern for payments and SMS. Sandbox payment and SMS logger are enough to demonstrate the path if live operator credentials are unavailable.

## Scalability

Single Next.js app and Postgres scale to early cities; queues and extra adapters come after demand.

## Demonstration strategy

Keep one vertical story. Do not wander into unfinished modules.

### Demo scenario

1. Landlord signs in
2. Creates property
3. Creates unit
4. Invites tenant
5. Creates agreement
6. Tenant accepts
7. Rent invoice appears
8. Tenant pays (sandbox or live)
9. Landlord sees payment
10. Receipt generated
11. SMS notification sent (or sandbox equivalent, clearly labeled)
12. Tenant submits maintenance request
13. Landlord processes request
14. Timeline updates
15. Rental Passport summary shown (consent-controlled; not a credit score)

## Differentiators

- Tanzania-first domain, not US SaaS theming
- Invoice ≠ payment
- Provider-agnostic mobile money
- Shared timeline
- Portable rental history under tenant consent
