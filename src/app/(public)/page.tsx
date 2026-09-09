import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getMessages } from "@/lib/i18n/en";

export default function HomePage() {
  const copy = getMessages();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:py-16">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">
          {copy.appName}
        </p>
        <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          <span className="block">{copy.taglineLine1}</span>
          <span className="block">{copy.taglineLine2}</span>
          <span className="block">{copy.taglineLine3}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          {copy.heroSummary}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
          >
            {copy.getStarted}
          </Link>
          <Link
            href="/login?role=landlord"
            className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium"
          >
            {copy.landlordLogin}
          </Link>
          <Link
            href="/login?role=tenant"
            className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium"
          >
            {copy.tenantLogin}
          </Link>
        </div>

        <section className="mt-14" aria-labelledby="problem-heading">
          <h2 id="problem-heading" className="text-lg font-semibold">
            {copy.problemHeading}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
            {copy.problemBody}
          </p>
        </section>

        <section className="mt-12" aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-lg font-semibold">
            {copy.featuresHeading}
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {copy.features.map((feature) => (
              <li
                key={feature.title}
                className="rounded-xl border border-border bg-surface p-5"
              >
                <h3 className="font-medium">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{feature.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-12 max-w-2xl text-sm text-muted">{copy.hackathonNote}</p>
      </main>
      <SiteFooter />
    </>
  );
}
