export const messages = {
  appName: "RentFlow",
  taglineLine1: "One agreement.",
  taglineLine2: "One payment trail.",
  taglineLine3: "One source of truth.",
  supportingMessage: "Rent. Pay. Maintain. Trust.",
  heroEyebrow: "Digital rental infrastructure for Tanzania",
  heroSummary:
    "Landlords and tenants share one record for agreements, TZS rent, mobile-money payments, receipts, and maintenance — instead of paper, WhatsApp, and screenshots.",
  getStarted: "Get started",
  landlordLogin: "Landlord login",
  tenantLogin: "Tenant login",
  signIn: "Sign in",
  createAccount: "Create account",
  home: "Home",
  plannedAuthNotice:
    "Sign-in is not connected yet. This screen shows the intended layout. Fields are disabled until authentication is implemented.",
  plannedDashboardNotice:
    "This workspace is a planned shell. Property, tenancy, payment, and maintenance tools will appear here after authentication is implemented.",
  implementedLabel: "Implemented",
  plannedLabel: "Planned",
  exampleLabel: "Example",
  exampleInvoiceTitle: "October rent",
  exampleUnit: "Room 2 · Mikocheni, Dar es Salaam",
  exampleDueDate: "Due 5 Oct",
  exampleStatusDue: "Due",
  previewCaption: "What a tenant sees when rent is due — amount, date, and status in one place.",
  featuresHeading: "What RentFlow holds together",
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
      body: "Built for M-Pesa, Mixx by Yas, Airtel Money, and HaloPesa — not one operator.",
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
  problemHeading: "Today the trail is scattered",
  problemBody:
    "Agreements on paper. Payments as screenshots. Receipts in WhatsApp. Reminders by phone. Neither side has a reliable record.",
  solutionHeading: "One shared trail",
  howHeading: "How the relationship runs",
  howSteps: [
    { title: "Agree", body: "Landlord and tenant accept the same digital terms." },
    { title: "Bill", body: "RentFlow raises a TZS obligation with a clear due date." },
    { title: "Pay", body: "The tenant pays through mobile money. The landlord sees it." },
    { title: "Prove", body: "A receipt, reminder, and timeline close the loop." },
  ],
  splitHeading: "Start in the role that fits",
  landlordCardTitle: "For landlords",
  landlordCardBody: "Properties, units, who has paid, what is overdue, and maintenance in one workspace.",
  tenantCardTitle: "For tenants",
  tenantCardBody: "Your agreement, amount due, receipts, and a way to report issues you can follow.",
  hackathonNote:
    "Built for the RIDC PT Innovation Hackathon 2026 — Software / Web & Mobile, with financial inclusion at the centre.",
  footerNote: "Licensing currently undecided. No production payment credentials are bundled with this repository.",
  loginSubtitleLandlord: "Collect rent with a record both of you can trust.",
  loginSubtitleTenant: "See what you owe, pay, and keep your receipts.",
  registerTitle: "Create your RentFlow account",
  registerSubtitle: "Choose how you will use RentFlow. Authentication will be added in the next phase.",
  roleLegend: "I am a",
  landlordRole: "Landlord",
  tenantRole: "Tenant",
  fullNameLabel: "Full name",
  phoneEmailLabel: "Phone or email",
  phoneLabel: "Tanzanian mobile number",
  passwordLabel: "Password",
  phonePlaceholder: "+255 7XX XXX XXX",
  signInPlanned: "Sign in (coming next)",
  createAccountPlanned: "Create account (coming next)",
  noAccount: "New to RentFlow?",
  hasAccount: "Already have an account?",
  authBrandTitle: "One agreement. One payment trail. One source of truth.",
  authBrandBody: "TZS amounts, Tanzanian numbers, and mobile money — designed for phones first.",
} as const;

export type Messages = typeof messages;

export function getMessages(): Messages {
  return messages;
}
