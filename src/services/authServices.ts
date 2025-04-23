// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
// const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

// if (!supabaseUrl || !supabaseKey) {
//   throw new Error('Missing Supabase environment variables!')
// }

// const supabase = createClient(supabaseUrl, supabaseKey)

import { supabaseClient } from './supaBaseService'



export const login = async (email: string, password: string) => {
  return supabaseClient.auth.signInWithPassword({
    email,
    password,
  })
}
