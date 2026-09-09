import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PlannedNotice } from "@/components/shared/planned-notice";
import { getMessages } from "@/lib/i18n/en";

export default function RegisterPage() {
  const copy = getMessages();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-lg flex-1 px-4 py-12">
        <h1 className="text-2xl font-semibold tracking-tight">{copy.getStarted}</h1>
        <div className="mt-4">
          <PlannedNotice>{copy.plannedAuthNotice}</PlannedNotice>
        </div>
        <form className="mt-8 space-y-4">
          <fieldset className="space-y-2">
            <legend className="text-sm font-medium">I am a</legend>
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="role" value="landlord" disabled defaultChecked />
              Landlord
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="role" value="tenant" disabled />
              Tenant
            </label>
          </fieldset>
          <div>
            <label className="block text-sm font-medium" htmlFor="fullName">
              Full name
            </label>
            <input
              id="fullName"
              name="fullName"
              disabled
              className="mt-1 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="phone">
              Tanzanian mobile number
            </label>
            <input
              id="phone"
              name="phone"
              disabled
              placeholder="+255 7XX XXX XXX"
              className="mt-1 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm"
            />
          </div>
          <button
            type="button"
            disabled
            className="w-full rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground opacity-60"
          >
            Create account (planned)
          </button>
        </form>
        <p className="mt-6 text-sm text-muted">
          <Link className="underline" href="/">
            {copy.home}
          </Link>
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
