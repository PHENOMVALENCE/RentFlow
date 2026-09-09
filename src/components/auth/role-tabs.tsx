import Link from "next/link";
import { getMessages } from "@/lib/i18n/en";

type Role = "landlord" | "tenant";

export function RoleTabs({
  role,
  pathname,
}: {
  role: Role;
  pathname: "/login" | "/register";
}) {
  const copy = getMessages();
  const options: { id: Role; label: string }[] = [
    { id: "landlord", label: copy.landlordRole },
    { id: "tenant", label: copy.tenantRole },
  ];

  return (
    <div
      aria-label={copy.roleLegend}
      className="grid grid-cols-2 rounded-xl border border-border bg-background p-1"
    >
      {options.map((option) => {
        const selected = option.id === role;
        return (
          <Link
            key={option.id}
            href={`${pathname}?role=${option.id}`}
            aria-current={selected ? "page" : undefined}
            className={`rounded-lg px-3 py-2.5 text-center text-sm font-medium ${
              selected
                ? "bg-surface text-foreground shadow-sm"
                : "text-muted hover:text-foreground"
            }`}
          >
            {option.label}
          </Link>
        );
      })}
    </div>
  );
}
