import { formatTzs } from "@/lib/utils/format-currency";
import { getMessages } from "@/lib/i18n/en";

export function RentPreviewCard() {
  const copy = getMessages();

  return (
    <aside
      aria-label={copy.previewCaption}
      className="rounded-2xl border border-border bg-surface p-5 shadow-[0_18px_40px_-28px_rgba(18,32,28,0.45)]"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
          {copy.exampleLabel}
        </p>
        <span className="rounded-full bg-warning/10 px-2.5 py-1 text-xs font-medium text-warning">
          {copy.exampleStatusDue}
        </span>
      </div>
      <p className="mt-4 text-sm text-muted">{copy.exampleUnit}</p>
      <h2 className="mt-1 font-serif text-2xl tracking-tight">{copy.exampleInvoiceTitle}</h2>
      <p className="mt-4 font-serif text-4xl tabular-nums tracking-tight">{formatTzs(450_000)}</p>
      <p className="mt-2 text-sm text-muted">{copy.exampleDueDate}</p>
      <div className="mt-6 grid grid-cols-2 gap-2 text-center text-xs">
        <p className="rounded-lg bg-primary-soft px-2 py-2 font-medium text-primary">M-Pesa</p>
        <p className="rounded-lg bg-primary-soft px-2 py-2 font-medium text-primary">Mixx by Yas</p>
      </div>
      <p className="mt-4 text-xs leading-5 text-muted">{copy.previewCaption}</p>
    </aside>
  );
}
