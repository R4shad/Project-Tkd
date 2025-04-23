import { supabaseClient } from '../services/supaBaseService';
import { NewsPostData } from '../interfaces/types';


//Create a new post in the database
export const createPost = async (post: NewsPostData) => {
    const { data, error } = await supabaseClient
      .from('posts') 
      .insert([post])
    return {data, error}
}

//Delete a post from the database
export const deletePost = async (id: string) => {
    const { data, error } = await supabaseClient
      .from('posts')
      .delete()
      .eq('id', id)
    return {data, error}
}

//create a new image in the storage
export const createImage = async (file: File) => {
    const { data, error } = await supabaseClient.storage
      .from('images')
      .upload(`posts/${file.name}`, file, {
        cacheControl: '3600',
        upsert: false,
      })
    return {data, error}
}   