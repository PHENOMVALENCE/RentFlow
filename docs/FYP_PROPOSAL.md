# RentFlow Final Year Project Proposal

## Project Title

**RentFlow: A Digital Rental Management, Rent Assurance, Payment and Tenant-Landlord Coordination Platform**

## Project Context

RentFlow is a 2027 Final Year Project intended to solve operational and trust problems in residential rental relationships, with Tanzania as the initial deployment context. The system is designed as a market-ready software product rather than a classroom-only CRUD application.

## Background

Rental relationships are frequently managed through disconnected channels such as paper agreements, WhatsApp chats, notebooks, spreadsheets, mobile-money confirmations, screenshots, phone calls and verbal maintenance requests. This fragmentation makes it difficult for landlords to track rent obligations, reconcile payments, manage several properties, issue receipts, monitor maintenance, and retain reliable tenancy records. Tenants also struggle to retrieve agreements, prove payment, understand balances, obtain receipts, follow maintenance requests, and maintain an auditable history of their tenancy.

## Problem Statement

There is a lack of a unified, locally appropriate digital workflow that manages the full rental lifecycle between tenants and landlords while integrating rent billing, mobile-money payments, SMS communication, agreements, maintenance, inspections, receipts and auditable records.

Existing manual and fragmented approaches can cause:

- poor visibility of paid, partially paid and overdue rent;
- lost or inconsistent payment evidence;
- missed rent and lease-expiry reminders;
- untracked maintenance complaints;
- disputes over deposits, repairs, agreement terms and payment history;
- difficulty managing multiple properties and units;
- weak operational reporting for landlords and property managers;
- poor accessibility when systems rely only on smartphones or permanent internet access.

## Aim

To design, implement and evaluate a secure digital rental-management platform that improves rental transaction visibility, communication, accountability and operational efficiency between landlords and tenants.

## Specific Objectives

1. Design a multi-role rental-management platform for landlords, tenants, property managers and administrators.
2. Develop structured management of properties, units, tenants, tenancies and rental agreements.
3. Implement a rent engine that generates obligations/invoices and tracks due, partially paid, paid, overdue, waived and cancelled states.
4. Integrate a provider-agnostic payment layer suitable for Tanzanian mobile-money payment providers.
5. Integrate SMS notifications for invitations, rent reminders, payment confirmations, maintenance updates and lease-expiry alerts.
6. Implement digital receipts and an auditable payment trail.
7. Implement maintenance request, assignment and resolution workflows.
8. Implement move-in/move-out inspections and security-deposit accounting records.
9. Provide dashboards and analytics for occupancy, expected rent, collections, arrears, lease expiries and maintenance performance.
10. Evaluate the system using functional correctness, usability, performance, security and rental-operation metrics.

## Research Questions

1. How can an integrated rental-management platform improve visibility and accountability in landlord-tenant transactions?
2. How effectively can automated billing, mobile-money payment reconciliation and SMS reminders reduce manual rental administration?
3. How can a digital audit trail improve the traceability of rent payments, agreements and maintenance requests?
4. What design choices are required to make such a platform practical in a mobile-first, low-bandwidth Tanzanian context?

## Target Users

- individual landlords managing one or more rental properties;
- tenants renting houses, apartments, rooms or other residential units;
- property managers handling property portfolios on behalf of landlords;
- platform administrators responsible for system operations and support.

## Proposed Core Modules

- Authentication and role-based access control
- Landlord and tenant profiles
- Property and unit management
- Tenancy and lease lifecycle management
- Digital rental agreements
- Rent billing and invoice engine
- Mobile-money payment integration
- Payment reconciliation and receipts
- SMS and in-app notifications
- Maintenance management
- Move-in and move-out inspections
- Security-deposit ledger
- Tenant/landlord document vault
- Property-manager assignment
- Audit trail and activity timeline
- Landlord analytics and reports
- Tenant self-service dashboard
- English/Kiswahili localization architecture
- Optional USSD access for selected low-bandwidth workflows

## Innovation and Differentiation

RentFlow is intentionally not a property-listing marketplace. Its focus begins after a landlord and tenant enter a rental relationship. Its differentiating value is the integration of the complete rental lifecycle into one auditable workflow.

Important differentiators include:

- rent obligations are modelled separately from payments;
- partial payments can be allocated against invoices;
- payment status is driven by verified provider events, not screenshots;
- SMS is treated as an operational channel, not a decorative feature;
- agreement, payment, maintenance and inspection events form one tenancy timeline;
- mobile-money integrations are abstracted behind provider adapters;
- tenant history is privacy-aware and not exposed as an automatic blacklist or credit score;
- the product is designed around TZS, Tanzanian phone-number formats and mobile-first usage.

## Proposed Technology Stack

- **Application framework:** Laravel
- **Programming language:** PHP
- **Frontend:** Blade + Livewire
- **Styling:** Tailwind CSS
- **Database:** MySQL 8+
- **ORM:** Eloquent
- **Authentication:** Laravel authentication/session stack
- **Authorization:** Laravel Policies, Gates and middleware
- **Validation:** Laravel Form Requests and validation rules
- **Background processing:** Laravel Queues and Jobs
- **Scheduled automation:** Laravel Scheduler
- **Notifications:** Laravel Notifications with SMS-provider adapter
- **File storage:** Laravel Filesystem using private local or S3-compatible storage depending on deployment
- **SMS:** Africa's Talking through a provider/service adapter
- **Payments:** provider-agnostic Laravel payment service with sandbox first and production-capable provider later
- **Testing:** Laravel testing stack using PHPUnit or Pest
- **Deployment:** Laravel-compatible hosting, VPS or container environment with MySQL, queue worker, cron/scheduler and HTTPS
- **Source control:** GitHub
- **CI/CD:** GitHub Actions or equivalent repository-integrated CI

A separate Next.js/React frontend or Supabase backend is not required for the initial FYP. The Laravel monolith is intentionally selected to reduce unnecessary architectural complexity while still supporting robust financial, notification and tenancy workflows.

## Methodology

The project will follow an iterative software-development approach.

1. Requirements gathering and problem validation.
2. System analysis and domain modelling.
3. UI/UX prototyping.
4. Database and architecture design.
5. Clean Laravel application bootstrap.
6. Iterative implementation by module.
7. Integration of external services.
8. Functional, security, usability and performance testing.
9. User evaluation with representative rental-management scenarios.
10. Analysis of results against the project objectives.
11. Final documentation, deployment and demonstration.

## Evaluation Metrics

Potential evaluation metrics include:

- percentage of correctly reconciled payments;
- average time required to determine tenant balance;
- rent reminder delivery success rate;
- payment success and failure handling accuracy;
- average maintenance request resolution time;
- percentage of critical workflows completed successfully during usability testing;
- system response time under expected load;
- authorization and tenant-data isolation test results;
- user satisfaction/usability scores;
- completeness of tenancy audit trails.

## Scope Boundaries

The FYP should prioritize residential rental operations. Property marketplace discovery, mortgage lending, automated tenant credit scoring, automatic blacklisting, tax filing, escrow/custody of customer money, and legally certified e-signature services are outside the initial scope unless separately validated and approved.

The project should also avoid unnecessary microservice or multi-framework architecture unless a measured technical requirement emerges.

## Expected Outcome

A production-style Laravel prototype demonstrating the complete lifecycle:

**property → unit → tenant → tenancy → agreement → rent invoice → mobile-money payment → verified reconciliation → receipt → SMS notification → maintenance → inspection → renewal or exit**.

The final result should be academically defensible, technically robust and capable of evolving into a commercial SaaS product after graduation.
