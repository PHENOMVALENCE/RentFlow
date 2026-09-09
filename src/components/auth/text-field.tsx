type TextFieldProps = {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
};

export function TextField({
  id,
  name,
  label,
  type = "text",
  placeholder,
  autoComplete,
}: TextFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        disabled
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="mt-1.5 min-h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted/80 disabled:opacity-70"
      />
    </div>
  );
}
