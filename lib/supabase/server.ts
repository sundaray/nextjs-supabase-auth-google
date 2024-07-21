import "server-only";

import { cookies } from "next/headers";
import { createServerClient, type CookieOptions } from "@supabase/ssr";

export function createClient() {
  const cookieStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: async () => {
          return cookieStore.getAll().map((cookie) => ({
            name: cookie.name,
            value: cookie.value,
          }));
        },
        setAll: async (
          cookiesToSet: {
            name: string;
            value: string;
            options: CookieOptions;
          }[]
        ) => {
          cookiesToSet.forEach((cookie) => {
            cookieStore.set(cookie.name, cookie.value, cookie.options);
          });
        },
      },
    }
  );
}
