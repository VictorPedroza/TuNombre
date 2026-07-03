export const environment = {
  appName: import.meta.env.VITE_APP_NAME,
  enviroment: import.meta.env.VITE_ENVIRONMENT === "production",
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  supabasePublishableKey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
} as const;