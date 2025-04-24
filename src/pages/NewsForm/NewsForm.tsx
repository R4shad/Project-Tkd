import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { NewsPostData } from '../../interfaces/types'
import { createPost } from '../../services/postServices'
import { createImage } from '../../services/postServices'
import toast from 'react-hot-toast';


export const NewsForm: React.FC = () => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [fecha, setFecha] = useState('');
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    const dataPost: NewsPostData = {
      title: title,
      imageUrl: '',
      description: content,
      datePost: fecha,
    }

    try {
      if (image) {
        const { data, publicUrl, error } = await createImage(image)
        if (publicUrl) {
          console.log('Imagen subida con éxito:', data)
          dataPost.imageUrl = publicUrl;

        } else {
          console.error('Error al subir la imagen:', error)
        }
      }

      console.log('Imagen subida:', dataPost.imageUrl)
    } catch (error) {
      console.error('Error al subir la imagen', error)
    }

    try {
      const { data, error } = await createPost(dataPost)

      if (error) {
        console.error('Error al crear el post:', error)
        toast.error('Error al crear el post')
      } else {
        console.log('Post creado con éxito:', data)

        toast.success('Post creado con éxito')
      }
    } catch (error) {
      console.error('Error al crear el post', error)
      toast.error('Error al crear el post')
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className='formNews my-24'>
      <div className="max-w-2xl mx-auto p-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Crear Nueva Noticia</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Título */}
          <div className='form-tittle flex-col flex gap-2'>
            <label htmlFor="titulo" className="text-left">Título de la noticia</label>
            <input
              type="text"
              placeholder="Titular de la noticia"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border rounded p-2"
              required
            />
          </div>


          {/* Fecha */}
          <div className='form-fecha flex-col flex gap-2'>
            <label htmlFor="fecha" className="text-left">Fecha de la noticia</label>
            <input
              type="date"
              value={fecha}
              placeholder='Fecha de la noticia'
              onChange={(e) => setFecha(e.target.value)}
              className="border rounded p-2"
              required
            />
          </div>


          {/* Imagen */}
          <div className="form-file flex-col flex gap-2">
            <label htmlFor="imagen" className="text-left">Imagen de la noticia</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border rounded p-2"
              required
            />

          </div>

          {/* Preview de imagen */}
          {image && (
            <div className="w-full  bg-gray-200 rounded mb-4 flex items-center justify-center">
              <p className="text-gray-500">Vista previa de la imagen</p>
            </div>
          )}
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Vista previa"
              className="w-full h-auto rounded shadow-md"
            />
          )}

          {/* Contenido */}
          <div className="form-contenido flex-col flex gap-2">
            <label htmlFor="contenido" className="text-left">Contenido de la noticia</label>
            <ReactQuill
              value={content}
              onChange={setContent}
              theme="snow"
              placeholder="Escribe el contenido de la noticia aquí..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
             className={`text-custom-primary-color font-bold px-6 py-2 rounded-lg border-2 border-custom-primary-color 
              ${loading ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'hover:bg-black hover:text-white hover:border-black'}`}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                Publicando...
                <span className="animate-spin border-2 border-t-transparent border-black rounded-full w-4 h-4 inline-block"></span>
              </div>
            ) : (
              'Publicar'
            )}
          </button>

        </form>
      </div>
    </section>

  )
}
