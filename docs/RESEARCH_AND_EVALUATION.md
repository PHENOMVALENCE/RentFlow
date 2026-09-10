# RentFlow Research and Evaluation Plan

## Purpose

RentFlow is both a software-engineering project and an academic Final Year Project. This document defines how the problem, solution and outcomes can be evaluated rather than relying only on a working demo.

## Research Focus

The project investigates whether a unified rental-management platform can improve transaction visibility, operational efficiency and accountability between landlords and tenants in a Tanzanian residential-rental context.

## Research Questions

1. How can integrated rent billing and payment reconciliation improve visibility of tenant balances and landlord collections?
2. How can automated SMS reminders and digital receipts reduce manual communication and payment-record fragmentation?
3. How can maintenance tracking and tenancy audit trails improve accountability between tenants and landlords?
4. What usability and architectural requirements are important for a mobile-first, low-bandwidth rental platform?

## Problem Validation

Before final implementation decisions, gather evidence from representative users. Potential participants include landlords, tenants and property managers.

Recommended methods:

- semi-structured interviews;
- short questionnaires;
- observation of existing rent-tracking practices;
- review of commonly used artefacts such as notebooks, spreadsheets, receipts and message-based reminders, without collecting unnecessary personal data.

Suggested validation topics:

- how rent is currently recorded;
- how payment proof is exchanged;
- how often balances are disputed or unclear;
- how reminders are sent;
- how agreements are stored;
- how maintenance is reported and followed up;
- how security deposits are recorded;
- how many properties/units a landlord typically manages;
- preferred communication channel and language;
- smartphone/internet constraints.

## Evaluation Design

Use a mixed evaluation approach combining system tests, task-based usability evaluation and quantitative operational metrics.

### Functional Evaluation

Demonstrate that critical requirements in `docs/SRS.md` work correctly. Each critical requirement should map to at least one test or documented validation scenario.

### Usability Evaluation

Give participants realistic tasks such as:

- determine the current rent balance;
- retrieve the latest payment receipt;
- create or review a tenancy;
- report a maintenance problem;
- identify an overdue invoice;
- identify leases expiring soon.

Record:

- success/failure;
- task completion time;
- user errors;
- assistance required;
- qualitative comments;
- optional post-task or System Usability Scale-style feedback if approved by the academic methodology.

### Technical Evaluation

Measure:

- response time for common application operations;
- correctness of invoice generation;
- correctness of payment allocation;
- webhook idempotency under repeated callbacks;
- authorization boundary enforcement;
- SMS integration success/failure handling;
- build/test reliability;
- behaviour under constrained network conditions.

## Proposed Before-vs-After Metrics

Where participants can provide baseline estimates, compare the current/manual process with RentFlow for tasks such as:

| Measure | Manual baseline | RentFlow measure |
| --- | --- | --- |
| Time to determine tenant balance | Interview/task observation | Timed system task |
| Time to find payment proof | Interview/task observation | Timed receipt retrieval |
| Maintenance traceability | Qualitative/manual history | Complete ticket timeline |
| Payment status accuracy | Manual reconciliation | Invoice/allocation test result |
| Reminder effort | Manual messages/calls | Scheduled notification workflow |
| Lease expiry visibility | Manual calendar/notebook | Dashboard alert workflow |

Do not invent baseline statistics. Only report values supported by collected data.

## Product Metrics

Useful system-generated indicators include:

- expected rent for period;
- rent collected for period;
- collection rate;
- overdue amount;
- average days overdue;
- partial-payment count;
- payment success/failure rate;
- average maintenance resolution time;
- open maintenance count;
- occupancy rate;
- leases expiring within 30/60/90 days;
- SMS delivery success where provider data is available.

## Data Collection Ethics and Privacy

- Collect only data necessary for the study.
- Avoid collecting real payment credentials or private tenancy documents for demonstration data.
- Obtain informed consent for interviews/usability sessions where required by institutional policy.
- Anonymize participant results in the dissertation unless explicit permission and academic rules allow otherwise.
- Separate research datasets from production-like application data.
- Do not publish tenant payment histories or personally identifying records in the repository.

## Threats to Validity

The dissertation should acknowledge limitations such as:

- small participant samples;
- participants drawn from one geographic area;
- sandbox payment/SMS behaviour differing from production providers;
- short evaluation period compared with real multi-month tenancies;
- self-reported baseline practices;
- simulated rental data rather than full live financial operations.

## Expected Academic Contribution

The project should demonstrate how locally appropriate fintech and communication integrations can be combined with tenancy lifecycle management to address fragmented rental administration. The academic contribution is the design, implementation and evaluated effectiveness of the integrated workflow—not merely the use of Next.js, PostgreSQL or an external API.

## Final Report Evidence Checklist

Preserve:

- problem-validation instruments;
- anonymized findings;
- system requirements and traceability;
- architecture and database design;
- test cases and results;
- usability evaluation results;
- measured performance data;
- screenshots/diagrams;
- limitations;
- recommendations for future work.
