import Link from "next/link";
import { BrandMark } from "@/components/layout/brand-mark";
import { getMessages } from "@/lib/i18n/en";

export function SiteHeader() {
  const copy = getMessages();

  return (
    <header className="sticky top-0 z-20 border-b border-border/80 bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <BrandMark />
        <nav aria-label="Primary" className="flex items-center gap-2 text-sm sm:gap-3">
          <Link
            className="hidden min-h-10 items-center text-muted hover:text-foreground sm:inline-flex"
            href="/login?role=landlord"
          >
            {copy.landlordLogin}
          </Link>
          <Link
            className="hidden min-h-10 items-center text-muted hover:text-foreground sm:inline-flex"
            href="/login?role=tenant"
          >
            {copy.tenantLogin}
          </Link>
          <Link
            className="inline-flex min-h-10 items-center rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground"
            href="/register"
          >
            {copy.getStarted}
          </Link>
        </nav>
      </div>
    </header>
  );
}
