import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PlannedNotice } from "@/components/shared/planned-notice";
import { getMessages } from "@/lib/i18n/en";

type LoginPageProps = {
  searchParams: Promise<{ role?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const copy = getMessages();
  const params = await searchParams;
  const role = params.role === "tenant" ? "tenant" : "landlord";

  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-lg flex-1 px-4 py-12">
        <h1 className="text-2xl font-semibold tracking-tight">
          {role === "tenant" ? copy.tenantLogin : copy.landlordLogin}
        </h1>
        <div className="mt-4">
          <PlannedNotice>{copy.plannedAuthNotice}</PlannedNotice>
        </div>
        <form className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium" htmlFor="phone">
              Phone or email
            </label>
            <input
              id="phone"
              name="phone"
              disabled
              placeholder="e.g. +255 7XX XXX XXX"
              className="mt-1 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              disabled
              className="mt-1 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm"
            />
          </div>
          <button
            type="button"
            disabled
            className="w-full rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground opacity-60"
          >
            Sign in (planned)
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
