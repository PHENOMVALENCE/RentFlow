import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PlannedNotice } from "@/components/shared/planned-notice";
import { getMessages } from "@/lib/i18n/en";

const plannedModules = [
  "Properties",
  "Units",
  "Tenants",
  "Agreements",
  "Payments",
  "Maintenance",
  "Settings",
];

export default function LandlordHomePage() {
  const copy = getMessages();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
      <p className="text-sm text-muted">
        <Link className="underline" href="/">
          {copy.home}
        </Link>
      </p>
      <h1 className="mt-4 text-2xl font-semibold tracking-tight">Landlord workspace</h1>
      <div className="mt-4">
        <PlannedNotice>{copy.plannedDashboardNotice}</PlannedNotice>
      </div>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {plannedModules.map((item) => (
          <li key={item} className="rounded-xl border border-border bg-surface px-4 py-5 text-sm">
            {item}
            <span className="mt-1 block text-muted">{copy.plannedLabel}</span>
          </li>
        ))}
      </ul>
    </main>
      <SiteFooter />
    </>
  );
}
