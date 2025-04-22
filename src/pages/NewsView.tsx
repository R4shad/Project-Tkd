import React from 'react'
import { Helmet } from 'react-helmet-async'
//import { useParams } from 'react-router-dom'
import { FaFacebookF, FaWhatsapp, FaLink } from 'react-icons/fa'
const news = {
  id: 1,
  title: 'Niño de Pando gana la Copa Master',
  content: `<p>Fue el único taekwondista de Pando participante en la Copa Master Internacional, que concluyó el sábado en el poligimnasio Santa Rosita y que contó con más de 400 participantes. Llegar a Santa Cruz fue un doble esfuerzo para Fabiano Ribera Rojas, de 8 años, y su padre y entrenador, Josemar Rojas Montero.</p><p>Primero estuvo la preparación para apostar a ganar su tercera medalla de oro consecutiva en la Copa Master, y luego se encaró la búsqueda de apoyo económico para el pasaje y estadía en la tierra de su progenitor, que actualmente es presidente de la Asociación Departamental Pandina de Taekwondo y propietario del club Horangi de Cobija.</p><p>Por todo ello, la celebración del título en la categoría pre-infantil hasta 45 kilos fue a todo pulmón entre Fabiano y Josemar. La felicidad de padre e hijo fue única, conscientes de que el esfuerzo valió la pena. “Estoy feliz por otro título sumado. Apunto a ser campeón mundial”, sostuvo Fabiano, que es un destacado alumno de tercero de primaria. El triunfo también lo celebra su madre Diana Ribera Peralta, que se quedó en Cobija.</p><p>“Esto se lo tiene bien merecido mi hijo. Se entrena duro y muy bien. Además, que tiene bastante garra y es muy aplicado”, lo describe al campeón Josemar, que adelantó que dentro de poco habrá novedades sobre su hijo, que competirá fuera de Bolivia.</p>`,
  imageUrl:
    'https://res.cloudinary.com/ddkjviwgt/image/upload/v1745286450/l2_no7sjw.jpg',
  date: '2025-04-20',
  description:
    'El pequeño Fabiano Ribera logró una nueva medalla en la Copa Master Internacional.',
}

const relatedNews = [
  {
    id: 2,
    title: 'Nueva competencia nacional de Taekwondo',
    date: '2025-04-20',
    imageUrl:
      'https://res.cloudinary.com/ddkjviwgt/image/upload/v1745286450/l2_no7sjw.jpg',
  },
  {
    id: 3,
    title: 'Fabiano representará a Bolivia en torneo internacional',
    date: '2025-04-20',
    imageUrl:
      'https://res.cloudinary.com/ddkjviwgt/image/upload/v1745286450/l2_no7sjw.jpg',
  },
]

export const NewsView: React.FC = () => {
  //const { id } = useParams()

  const shareUrl = window.location.href

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl)
    alert('¡Enlace copiado al portapapeles!')
  }

  return (
    <>
      <Helmet>
        <title>{news.title}</title>
        <meta name="description" content={news.description} />
        <meta property="og:title" content={news.title} />
        <meta property="og:description" content={news.description} />
        <meta property="og:image" content={news.imageUrl} />
        <meta property="og:url" content={shareUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="max-w-7xl mx-auto p-4 flex flex-col gap-8">
        {/* Título principal */}
        <h2 className="text-black text-3xl md:text-4xl font-bold text-center">
          {news.title}
        </h2>

        {/* Contenido dividido */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Izquierda: Noticia principal */}
          <div className="md:w-2/3 flex flex-col gap-6">
            {/* Imagen */}
            <img
              src={news.imageUrl}
              alt={news.title}
              className="rounded-lg w-full object-cover"
            />

            {/* Fecha */}
            <p className="text-gray-500 text-sm">
              {new Date(news.date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>

            {/* Contenido */}
            <div
              className="text-gray-700 leading-relaxed text-lg"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />

            {/* Botones para compartir */}
            <div className="flex items-center gap-6 mt-6">
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  news.title + ' ' + shareUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                <FaWhatsapp size={20} />
                WhatsApp
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  shareUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              >
                <FaFacebookF size={20} />
                Facebook
              </a>
              <button
                onClick={copyLink}
                className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg"
              >
                <FaLink size={20} />
                Copiar Link
              </button>
            </div>
          </div>

          {/* Derecha: Noticias relacionadas */}
          <div className="md:w-1/3 flex flex-col gap-6">
            <h2 className="text-2xl font-semibold mb-2">Más noticias</h2>
            <div className="space-y-6">
              {relatedNews.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-100 rounded-lg overflow-hidden hover:bg-gray-200 cursor-pointer"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm">
                      {new Date(item.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
