import type { ReactNode } from "react";

export function PlannedNotice({ children }: { children: ReactNode }) {
  return (
    <p
      role="status"
      className="rounded-lg border border-accent/25 bg-accent/5 px-3 py-2.5 text-sm leading-6 text-foreground"
    >
      {children}
    </p>
  );
}
