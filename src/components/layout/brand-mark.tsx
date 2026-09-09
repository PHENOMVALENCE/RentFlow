import Link from "next/link";
import { getMessages } from "@/lib/i18n/en";

export function BrandMark({
  compact = false,
  tone = "default",
}: {
  compact?: boolean;
  tone?: "default" | "onPrimary";
}) {
  const copy = getMessages();
  const markClass =
    tone === "onPrimary"
      ? "flex h-8 w-8 items-center justify-center rounded-lg bg-primary-foreground font-serif text-sm font-semibold text-primary"
      : "flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-serif text-sm font-semibold text-primary-foreground";
  const labelClass =
    tone === "onPrimary"
      ? compact
        ? "text-sm font-semibold tracking-tight text-primary-foreground"
        : "text-base font-semibold tracking-tight text-primary-foreground"
      : compact
        ? "text-sm font-semibold tracking-tight"
        : "text-base font-semibold tracking-tight";

  return (
    <Link href="/" className="inline-flex items-center gap-2.5" prefetch={false}>
      <span aria-hidden="true" className={markClass}>
        R
      </span>
      <span className={labelClass}>{copy.appName}</span>
    </Link>
  );
}
