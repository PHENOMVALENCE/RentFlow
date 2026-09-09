import Link from "next/link";
import { getMessages } from "@/lib/i18n/en";

export function SiteHeader() {
  const copy = getMessages();

  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="text-base font-semibold tracking-tight">
          {copy.appName}
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-3 text-sm">
          <Link className="text-muted hover:text-foreground" href="/login?role=landlord">
            {copy.landlordLogin}
          </Link>
          <Link className="text-muted hover:text-foreground" href="/login?role=tenant">
            {copy.tenantLogin}
          </Link>
          <Link
            className="rounded-full bg-primary px-3 py-1.5 font-medium text-primary-foreground"
            href="/register"
          >
            {copy.getStarted}
          </Link>
        </nav>
      </div>
    </header>
  );
}
