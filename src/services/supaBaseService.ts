import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY as string

export const supabaseClient = createClient(supabaseUrl, supabaseKey)

export const getCurrentUser = async () => {
  const { data, error } = await supabaseClient.auth.getUser()
  if (error) console.error('Error al obtener el usuario:', error)
  return data.user
}

export const signOutUser = async () => {
  const { error } = await supabaseClient.auth.signOut()
  if (error) console.error('Error al cerrar sesión:', error)
}
