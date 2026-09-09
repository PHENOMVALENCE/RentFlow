import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { RentPreviewCard } from "@/components/marketing/rent-preview-card";
import { getMessages } from "@/lib/i18n/en";

export default function HomePage() {
  const copy = getMessages();

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              {copy.heroEyebrow}
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              <span className="block">{copy.taglineLine1}</span>
              <span className="block">{copy.taglineLine2}</span>
              <span className="block text-primary">{copy.taglineLine3}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
              {copy.heroSummary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/register"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground"
              >
                {copy.getStarted}
              </Link>
              <Link
                href="/login?role=landlord"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-surface px-6 text-sm font-medium"
              >
                {copy.landlordLogin}
              </Link>
              <Link
                href="/login?role=tenant"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-surface px-6 text-sm font-medium"
              >
                {copy.tenantLogin}
              </Link>
            </div>
          </div>
          <RentPreviewCard />
        </section>

        <section
          className="border-y border-border bg-surface"
          aria-labelledby="problem-heading"
        >
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2">
            <div>
              <h2 id="problem-heading" className="font-serif text-2xl tracking-tight">
                {copy.problemHeading}
              </h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-muted sm:text-base">
                {copy.problemBody}
              </p>
            </div>
            <div>
              <h2 className="font-serif text-2xl tracking-tight">{copy.solutionHeading}</h2>
              <ol className="mt-4 space-y-2 text-sm leading-6 sm:text-base">
                <li>Digital agreement</li>
                <li>Rent obligation in TZS</li>
                <li>Mobile-money payment</li>
                <li>Verified receipt</li>
                <li>Maintenance and history</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6" aria-labelledby="features-heading">
          <h2 id="features-heading" className="font-serif text-2xl tracking-tight sm:text-3xl">
            {copy.featuresHeading}
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {copy.features.map((feature, index) => (
              <li
                key={feature.title}
                className={`rounded-2xl border border-border bg-surface p-5 ${index === 0 ? "lg:col-span-1" : ""}`}
              >
                <p className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-medium">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{feature.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-primary text-primary-foreground" aria-labelledby="how-heading">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <h2 id="how-heading" className="font-serif text-2xl tracking-tight sm:text-3xl">
              {copy.howHeading}
            </h2>
            <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {copy.howSteps.map((step, index) => (
                <li key={step.title}>
                  <p className="font-mono text-xs text-primary-foreground/70">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-lg font-medium">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-primary-foreground/80">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6" aria-labelledby="split-heading">
          <h2 id="split-heading" className="font-serif text-2xl tracking-tight">
            {copy.splitHeading}
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="flex flex-col rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-lg font-semibold">{copy.landlordCardTitle}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted">{copy.landlordCardBody}</p>
              <Link
                href="/login?role=landlord"
                className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground"
              >
                {copy.landlordLogin}
              </Link>
            </article>
            <article className="flex flex-col rounded-2xl border border-border bg-surface p-6">
              <h3 className="text-lg font-semibold">{copy.tenantCardTitle}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted">{copy.tenantCardBody}</p>
              <Link
                href="/login?role=tenant"
                className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-border px-4 text-sm font-medium"
              >
                {copy.tenantLogin}
              </Link>
            </article>
          </div>
          <p className="mt-10 max-w-2xl text-sm text-muted">{copy.hackathonNote}</p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
