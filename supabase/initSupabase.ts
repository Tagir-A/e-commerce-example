import { createClient, SupabaseClient } from '@supabase/supabase-js'

let supabase: SupabaseClient | null = null

export function initSupabase(url, key) {
  if (!supabase) {
    supabase = createClient(url, key)
  }
  return supabase
}