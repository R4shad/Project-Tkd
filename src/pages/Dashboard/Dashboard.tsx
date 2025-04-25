import React, { useEffect, useState } from 'react'
import { NewsPostData } from '../../interfaces/types'
import { getPosts } from '../../services/postServices'
import { deletePost } from '../../services/postServices'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export const Dashboard: React.FC = () => {
  const [newsList, setNewsList] = useState<NewsPostData[]>([])

  const navigate = useNavigate()
  useEffect(() => {
    const getDataPost = async () => {
      const { data, error } = await getPosts()
      if (error) {
        console.error('Error al obtener los posts:', error)
      } else {
        if (data) {
          setNewsList(data)
        } else {
          console.error('No se encontraron posts')
          toast.error('No se encontraron posts')
        }
      }
    }
    getDataPost()
  }, [])

  const handleDelete = (id: string) => {
    const confirmDelete = window.confirm(
      '¿Estás seguro de que quieres eliminar esta noticia?'
    )
    if (confirmDelete) {
      setNewsList(newsList.filter((news) => news.id !== id))
      deletePostData(id)
    }
  }
  const deletePostData = async (id: string) => {
    const { data, error } = await deletePost(id)
    if (error) {
      console.error('Error al eliminar el post:', error)
    } else {
      console.log('Post eliminado con éxito:', data)
      toast.success('Post eliminado con éxito')
    }
  }

  const handleShare = (slugTitle: string) => {
    const baseUrl =
      window.location.hostname === 'localhost'
        ? 'http://localhost:5173'
        : 'https://tkdqllo.netlify.app'
    const url = `${baseUrl}/publication/${slugTitle}`
    navigator.clipboard.writeText(url)
    toast.success('¡Enlace copiado al portapapeles!')
  }

  const handleNewNews = () => {
    navigate('/news')
  }

  const handleNewsNavegation = (slugTitle: string) => {
    navigate(`/publication/${slugTitle}`)
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Administrar Noticias
      </h2>
      <div className="flex  justify-end mb-4">
        <button
          className="  font-bold px-6 py-2 rounded-lg border-2   hover:bg-black hover:text-white hover:border-black"
          onClick={handleNewNews}
        >
          Crear Noticia
        </button>
      </div>
      {newsList.length === 0 ? (
        <p className="text-center text-gray-500">No hay noticias publicadas.</p>
      ) : (
        <div className="space-y-4">
          {newsList.map((news) => (
            <div
              key={news.id}
              className="border p-4 rounded-lg shadow flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4 w-full">
                {news.imageUrl && (
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                )}
                <div className="text-left flex-1">
                  <h3
                    className="text-lg font-semibold cursor-pointer"
                    onClick={() => {
                      handleNewsNavegation(news.slugTitle)
                    }}
                  >
                    {news.title}
                  </h3>
                  <p className="text-sm text-gray-400">{news.datePost}</p>

                  <div
                    className="text-gray-600 text-sm mt-2 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: news.description }}
                  />
                </div>
              </div>
              <button
                onClick={() => handleDelete(news.id ?? '')}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold w-full md:w-auto"
              >
                Eliminar
              </button>
              <button
                onClick={() => handleShare(news.slugTitle)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold"
              >
                Compartir
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
