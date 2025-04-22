import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({
      title,
      image,
      content,
    })
    // Aquí enviarías todo al servidor
  }

  return (
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

        {/* Botón de publicar */}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Publicar
        </button>
      </form>
    </div>
  )
}
