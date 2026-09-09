import { getMessages } from "@/lib/i18n/en";

export function SiteFooter() {
  const copy = getMessages();

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-muted">
        <p>{copy.appName}. {copy.supportingMessage}</p>
        <p className="mt-2">{copy.footerNote}</p>
      </div>
    </footer>
  );
}
