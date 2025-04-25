import { supabaseClient } from '../services/supaBaseService'
import { NewsPostData } from '../interfaces/types'

//Create a new post in the database
export const createPost = async (post: NewsPostData) => {
  const { data, error } = await supabaseClient.from('posts').insert([post])
  return { data, error }
}

//Delete a post from the database
export const deletePost = async (id: string) => {
  const { data, error } = await supabaseClient
    .from('posts')
    .delete()
    .eq('id', id)
  return { data, error }
}
//Select a post from the database
export const getPosts = async () => {
  const { data, error } = await supabaseClient.from('posts').select('*')

  return { data, error }
}

//Get a specific post from the database
export const getSpecificPost = async (slugTitle: string) => {
  const { data, error } = await supabaseClient
    .from('posts')
    .select('*')
    .eq('slugTitle', slugTitle)
  console.log(slugTitle)
  console.log(data)
  return { data, error }
}
//Get 3 posts from the database
export const getRelatedNews = async () => {
  const { data, error } = await supabaseClient
    .from('posts')
    .select('*')
    .order('datePost', { ascending: false })
    .limit(4)

  if (error) {
    console.error('Error fetching related news:', error)
    return null
  } else {
    return data
  }
}

//create a new image in the storage
export const createImage = async (file: File) => {
  const filePath = `posts/${file.name}`

  const { data, error } = await supabaseClient.storage
    .from('tkdqllo')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,
    })

  if (error) {
    return { error, publicUrl: null }
  }

  // Obtener la URL pública
  const { data: publicUrlData } = supabaseClient.storage
    .from('tkdqllo')
    .getPublicUrl(filePath)

  return { data, publicUrl: publicUrlData.publicUrl, error }
}
