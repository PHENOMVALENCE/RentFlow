import type { ReactNode } from "react";

export function PlannedNotice({ children }: { children: ReactNode }) {
  return (
    <p
      role="status"
      className="rounded-md border border-border bg-background px-3 py-2 text-sm text-muted"
    >
      {children}
    </p>
  );
}
