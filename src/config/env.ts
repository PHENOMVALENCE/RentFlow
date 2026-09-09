/**
 * Server-safe environment accessors.
 * Browser-exposed values must use the NEXT_PUBLIC_ prefix.
 * Never import this module from client components for secret values.
 */

function readPublicEnv(name: string): string | undefined {
  const value = process.env[name];
  return value && value.length > 0 ? value : undefined;
}

export const publicEnv = {
  appUrl: readPublicEnv("NEXT_PUBLIC_APP_URL") ?? "http://localhost:3000",
  supabaseUrl: readPublicEnv("NEXT_PUBLIC_SUPABASE_URL"),
  supabaseAnonKey: readPublicEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
} as const;

export function isSupabaseConfigured(): boolean {
  return Boolean(publicEnv.supabaseUrl && publicEnv.supabaseAnonKey);
}
