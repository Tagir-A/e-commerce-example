import { createClient } from '@supabase/supabase-js'

let supabase = null

export function initSupabase(url, key) {
  if (!supabase) {
    supabase = createClient(url, key)
  }
  return supabase
}