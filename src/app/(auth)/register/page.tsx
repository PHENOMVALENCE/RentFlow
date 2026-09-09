import Link from "next/link";
import { AuthShell } from "@/components/auth/auth-shell";
import { RoleTabs } from "@/components/auth/role-tabs";
import { TextField } from "@/components/auth/text-field";
import { PlannedNotice } from "@/components/shared/planned-notice";
import { getMessages } from "@/lib/i18n/en";

type RegisterPageProps = {
  searchParams: Promise<{ role?: string }>;
};

export default async function RegisterPage({ searchParams }: RegisterPageProps) {
  const copy = getMessages();
  const params = await searchParams;
  const role = params.role === "tenant" ? "tenant" : "landlord";

  return (
    <AuthShell>
      <p className="hidden text-right text-sm text-muted lg:block">
        <Link className="hover:text-foreground" href="/">
          {copy.home}
        </Link>
      </p>
      <h1 className="mt-2 font-serif text-3xl tracking-tight">{copy.registerTitle}</h1>
      <p className="mt-2 text-sm leading-6 text-muted">{copy.registerSubtitle}</p>
      <div className="mt-6">
        <RoleTabs role={role} pathname="/register" />
      </div>
      <div className="mt-5">
        <PlannedNotice>{copy.plannedAuthNotice}</PlannedNotice>
      </div>
      <form className="mt-6 space-y-4">
        <input type="hidden" name="role" value={role} />
        <TextField id="fullName" name="fullName" label={copy.fullNameLabel} autoComplete="name" />
        <TextField
          id="phone"
          name="phone"
          label={copy.phoneLabel}
          placeholder={copy.phonePlaceholder}
          autoComplete="tel"
        />
        <TextField
          id="password"
          name="password"
          label={copy.passwordLabel}
          type="password"
          autoComplete="new-password"
        />
        <button
          type="button"
          disabled
          className="flex min-h-12 w-full items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground disabled:opacity-80"
        >
          {copy.createAccountPlanned}
        </button>
      </form>
      <p className="mt-6 text-sm text-muted">
        {copy.hasAccount}{" "}
        <Link className="font-medium text-primary" href={`/login?role=${role}`}>
          {copy.signIn}
        </Link>
      </p>
    </AuthShell>
  );
}
