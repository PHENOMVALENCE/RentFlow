import Link from "next/link";
import { AuthShell } from "@/components/auth/auth-shell";
import { RoleTabs } from "@/components/auth/role-tabs";
import { TextField } from "@/components/auth/text-field";
import { PlannedNotice } from "@/components/shared/planned-notice";
import { getMessages } from "@/lib/i18n/en";

type LoginPageProps = {
  searchParams: Promise<{ role?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const copy = getMessages();
  const params = await searchParams;
  const role = params.role === "tenant" ? "tenant" : "landlord";
  const title = role === "tenant" ? copy.tenantLogin : copy.landlordLogin;
  const subtitle =
    role === "tenant" ? copy.loginSubtitleTenant : copy.loginSubtitleLandlord;

  return (
    <AuthShell>
      <p className="hidden text-right text-sm text-muted lg:block">
        <Link className="hover:text-foreground" href="/">
          {copy.home}
        </Link>
      </p>
      <h1 className="mt-2 font-serif text-3xl tracking-tight">{title}</h1>
      <p className="mt-2 text-sm leading-6 text-muted">{subtitle}</p>
      <div className="mt-6">
        <RoleTabs role={role} pathname="/login" />
      </div>
      <div className="mt-5">
        <PlannedNotice>{copy.plannedAuthNotice}</PlannedNotice>
      </div>
      <form className="mt-6 space-y-4">
        <TextField
          id="phone"
          name="phone"
          label={copy.phoneEmailLabel}
          placeholder={copy.phonePlaceholder}
          autoComplete="username"
        />
        <TextField
          id="password"
          name="password"
          label={copy.passwordLabel}
          type="password"
          autoComplete="current-password"
        />
        <button
          type="button"
          disabled
          className="flex min-h-12 w-full items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground disabled:opacity-80"
        >
          {copy.signInPlanned}
        </button>
      </form>
      <p className="mt-6 text-sm text-muted">
        {copy.noAccount}{" "}
        <Link className="font-medium text-primary" href={`/register?role=${role}`}>
          {copy.createAccount}
        </Link>
      </p>
    </AuthShell>
  );
}
