import Link from "next/link";
import { BrandMark } from "@/components/layout/brand-mark";
import { getMessages } from "@/lib/i18n/en";
import type { ReactNode } from "react";

export function AuthShell({ children }: { children: ReactNode }) {
  const copy = getMessages();

  return (
    <div className="flex min-h-full flex-1 flex-col lg:flex-row">
      <section className="relative hidden bg-primary px-10 py-12 text-primary-foreground lg:flex lg:w-[44%] lg:flex-col lg:justify-between">
        <BrandMark tone="onPrimary" />
        <div>
          <p className="font-serif text-3xl leading-snug tracking-tight xl:text-4xl">
            {copy.authBrandTitle}
          </p>
          <p className="mt-5 max-w-sm text-sm leading-6 text-primary-foreground/80">
            {copy.authBrandBody}
          </p>
        </div>
        <p className="text-sm text-primary-foreground/70">{copy.supportingMessage}</p>
      </section>
      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between px-4 py-4 lg:hidden">
          <BrandMark compact />
          <Link className="text-sm text-muted" href="/">
            {copy.home}
          </Link>
        </header>
        <div className="flex flex-1 items-start justify-center px-4 py-8 sm:items-center sm:py-12">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </div>
    </div>
  );
}
