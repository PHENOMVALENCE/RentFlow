import { isSupabaseConfigured, publicEnv } from "@/config/env";

export type SupabaseBrowserConfig = {
  url: string;
  anonKey: string;
};

export function getSupabaseBrowserConfig(): SupabaseBrowserConfig | null {
  if (!isSupabaseConfigured() || !publicEnv.supabaseUrl || !publicEnv.supabaseAnonKey) {
    return null;
  }

  return {
    url: publicEnv.supabaseUrl,
    anonKey: publicEnv.supabaseAnonKey,
  };
}
