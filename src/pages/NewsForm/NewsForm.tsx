import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { NewsPostData } from '../../interfaces/types'
import { createPost } from '../../services/postServices'
import { createImage } from '../../services/postServices'


export const NewsForm: React.FC = () => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const [content, setContent] = useState('')

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(file)

      // Crear una vista previa de la imagen
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const dataPost: NewsPostData = {
      title: title,
      image: '',
      content,
      date: new Date(),
    }
    
    try {
      if(image){
        const {data,error} = await createImage(image)
        if (error) {
          console.error('Error al subir la imagen:', error)
        } else {
          console.log('Imagen subida con éxito:', data)
          dataPost.image = data?.path || ''
        }
      }
      
      console.log('Imagen subida:', dataPost.image)
    } catch (error) {
      console.error('Error al subir la imagen', error)
    }

    try {
      const {data,error} = await createPost(dataPost)
      
      if (error) {
        console.error('Error al crear el post:', error)
      } else {
        console.log('Post creado con éxito:', data)
        console.log('Post creado:', data)
      }
    } catch (error) {
      console.error('Error al crear el post', error)
    }
    console.log(dataPost, 'image:'+ image?.name) 
  }

  return (
    <section className='formNews my-24'>
      <div className="max-w-2xl mx-auto p-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Crear Nueva Noticia</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Título */}
          <input
            type="text"
            placeholder="Titular de la noticia"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded p-2"
            required
          />

          {/* Imagen */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border rounded p-2"
            required
          />

          {/* Preview de imagen */}
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Vista previa"
              className="w-full h-auto rounded shadow-md"
            />
          )}

          {/* Contenido */}
          <ReactQuill
            value={content}
            onChange={setContent}
            theme="snow"
            placeholder="Escribe el contenido de la noticia aquí..."
          />
          <button
            type="submit"
            className=" text-custom-primary-color font-bold px-6 py-2 rounded-lg border-2  border-custom-primary-color hover:bg-black hover:text-white hover:border-black"
          >
            Publicar
          </button>
        </form>
      </div>
    </section>

  )
}
