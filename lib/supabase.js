import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export async function checkAuthStatus() {
  const { data: { user } } = await supabase.auth.getUser();
  return !!user;
}

export async function loginUser(email, password) {
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  return !error;
}

export async function logoutUser() {
  await supabase.auth.signOut();
}