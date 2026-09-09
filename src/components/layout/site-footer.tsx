import { getMessages } from "@/lib/i18n/en";

export function SiteFooter() {
  const copy = getMessages();

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <div>
          <p className="font-semibold tracking-tight">{copy.appName}</p>
          <p className="mt-1 text-sm text-muted">{copy.supportingMessage}</p>
        </div>
        <p className="max-w-md text-xs leading-5 text-muted">{copy.footerNote}</p>
      </div>
    </footer>
  );
}
