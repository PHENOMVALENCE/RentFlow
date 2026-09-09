export const messages = {
  appName: "RentFlow",
  taglineLine1: "One agreement.",
  taglineLine2: "One payment trail.",
  taglineLine3: "One source of truth.",
  supportingMessage: "Rent. Pay. Maintain. Trust.",
  heroSummary:
    "Digital rental management for landlords and tenants in Tanzania. Shared agreements, rent tracking, mobile-money payments, receipts, and maintenance — in one place.",
  getStarted: "Get started",
  landlordLogin: "Landlord login",
  tenantLogin: "Tenant login",
  home: "Home",
  plannedAuthNotice:
    "Account creation and sign-in are planned. These pages describe the intended flow and are not connected to authentication yet.",
  plannedDashboardNotice:
    "This workspace is a planned shell. Property, tenancy, payment, and maintenance tools will appear here after authentication is implemented.",
  implementedLabel: "Implemented",
  plannedLabel: "Planned",
  featuresHeading: "Core areas",
  features: [
    {
      title: "Digital agreements",
      body: "Structured tenancy terms both parties can review and accept.",
    },
    {
      title: "Rent tracking",
      body: "Invoices and balances in TZS, separate from individual payments.",
    },
    {
      title: "Mobile payments",
      body: "Provider-agnostic collections for M-Pesa, Mixx by Yas, Airtel Money, and more.",
    },
    {
      title: "Maintenance",
      body: "Requests with status history instead of disappearing chat threads.",
    },
    {
      title: "Rental records",
      body: "A shared timeline and a consent-controlled Rental Passport — not a credit score.",
    },
  ],
  problemHeading: "The problem",
  problemBody:
    "Agreements on paper. Payments as screenshots. Receipts in WhatsApp. Reminders by phone. RentFlow replaces that fragmentation with one source of truth.",
  hackathonNote:
    "Built for the RIDC PT Innovation Hackathon 2026 as Software / Web & Mobile with financial inclusion at the centre.",
  footerNote: "Licensing currently undecided. No production payment credentials are bundled with this repository.",
} as const;

export type Messages = typeof messages;

export function getMessages(): Messages {
  return messages;
}
