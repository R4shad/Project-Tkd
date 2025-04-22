import React, { useState } from 'react'

interface NewsItem {
  id: number
  title: string
  content: string // Contenido HTML
  imageUrl?: string
  date: string // Ahora tiene fecha también
}

export const Dashboard: React.FC = () => {
  const [newsList, setNewsList] = useState<NewsItem[]>([
    {
      id: 1,
      title: 'Niño de Pando gana la Copa Master',
      content: `<p>Fue el único taekwondista de Pando participante en la Copa Master Internacional, que concluyó el sábado en el poligimnasio Santa Rosita y que contó con más de 400 participantes.</p><p>Llegar a Santa Cruz fue un doble esfuerzo para Fabiano Ribera Rojas, de 8 años, y su padre y entrenador, Josemar Rojas Montero.</p><p>Por todo ello, la celebración del título en la categoría pre-infantil hasta 45 kilos fue a todo pulmón entre Fabiano y Josemar.</p>`,
      imageUrl:
        'https://res.cloudinary.com/ddkjviwgt/image/upload/v1745286450/l2_no7sjw.jpg',
      date: '2025-04-20', // fecha en formato ISO
    },
    {
      id: 2,
      title: 'Otra Noticia',
      content: `<p>Esta es otra noticia con contenido formateado.</p>`,
      date: '2025-04-21',
    },
  ])

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm(
      '¿Estás seguro de que quieres eliminar esta noticia?'
    )
    if (confirmDelete) {
      setNewsList(newsList.filter((news) => news.id !== id))
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Administrar Noticias
      </h2>

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
                  <h3 className="text-lg font-semibold">{news.title}</h3>
                  <p className="text-sm text-gray-400">
                    {new Date(news.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>

                  <div
                    className="text-gray-600 text-sm mt-2 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: news.content }}
                  />
                </div>
              </div>
              <button
                onClick={() => handleDelete(news.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold w-full md:w-auto"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
