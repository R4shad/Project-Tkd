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
//Select a post from the database
export const getPosts = async () =>{
    const { data, error } = await supabaseClient
      .from('posts')
      .select('*')
    return {data, error}
}

//create a new image in the storage
export const createImage = async (file: File) => {
  const filePath = `posts/${file.name}`;

  const { data, error } = await supabaseClient.storage
    .from('tkdqllo')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (error) {
    return { error, publicUrl: null };
  }

  // Obtener la URL pública
  const { data: publicUrlData } = supabaseClient.storage
    .from('tkdqllo')
    .getPublicUrl(filePath);

  return { data,publicUrl: publicUrlData.publicUrl,error };
};
  