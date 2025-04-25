import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate, useParams } from 'react-router-dom'
import { FaFacebookF, FaWhatsapp, FaLink } from 'react-icons/fa'
import { NewsPostData } from '../../interfaces/types'
import { getRelatedNews, getSpecificPost } from '../../services/postServices'
import toast from 'react-hot-toast'

export const NewsView: React.FC = () => {
  const { slugTitle } = useParams() as { slugTitle: string }

  const [publication, setPublication] = useState<NewsPostData | null>(null)
  const [relatedNews, setRelatedNews] = useState<NewsPostData[] | null>([])

  const navigate = useNavigate()

  useEffect(() => {
    const getPublicaiton = async () => {
      const { data, error } = await getSpecificPost(slugTitle)
      if (!data) {
        console.error('Error fetching publication:', error)
      } else {
        setPublication(data[0])

        //get related posts
        const related: NewsPostData[] | null = await getRelatedNews()
        if (!related) {
          console.error('Error fetching publications')
        } else {
          const filteredRelated = related.filter(
            (item) => item.id !== data[0].id
          )
          setRelatedNews(filteredRelated)
        }
      }
    }
    getPublicaiton()
  }, [slugTitle])

  const copyLink = () => {
    const currentUrl = window.location.href
    navigator.clipboard.writeText(currentUrl)
    toast.success('¡Enlace copiado al portapapeles!')
  }

  const goToRelatedNews = (slugTitle: string) => {
    navigate(`/publication/${slugTitle}`)
  }

  if (!publication)
    return <div className="text-center py-10">Cargando publicación...</div>

  if (!relatedNews)
    return <div className="text-center py-10">Cargando publicación...</div>

  return (
    <>
      <Helmet>
        <title>{publication.title}</title>
        <meta name="description" content={publication.description} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={publication.title} />
        <meta property="og:description" content={publication.description} />
        <meta property="og:image" content={publication.imageUrl} />
        <meta
          property="og:url"
          content={`https://tkdqllo.netlify.app/publication/${publication.slugTitle}`}
        />
        <meta property="og:site_name" content="A.M.T.K.D. Quillacollo" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={publication.title} />
        <meta name="twitter:description" content={publication.description} />
        <meta name="twitter:image" content={publication.imageUrl} />
        <meta
          name="twitter:url"
          content={`https://tkdqllo.netlify.app/publication/${publication.slugTitle}`}
        />
      </Helmet>

      <div className="max-w-7xl mx-auto p-4 flex flex-col gap-8">
        <h2 className="text-black text-3xl md:text-4xl font-bold text-center">
          {publication.title}
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3 flex flex-col gap-6">
            <img
              src={publication.imageUrl}
              alt={publication.title}
              className="rounded-lg w-full object-cover"
            />

            <p className="text-gray-500 text-sm">
              {new Date(publication.datePost).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>

            <div
              className="text-gray-700 leading-relaxed text-lg"
              dangerouslySetInnerHTML={{ __html: publication.description }}
            />

            <div className="flex items-center gap-6 mt-6">
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  window.location.href
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
                  window.location.href
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

          <div className="md:w-1/3 flex flex-col gap-6">
            <h2 className="text-2xl font-semibold mb-2">Más noticias</h2>
            <div className="space-y-6">
              {relatedNews.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-100 rounded-lg overflow-hidden hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    goToRelatedNews(item.slugTitle)
                  }}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm">
                      {new Date(item.datePost).toLocaleDateString('es-ES', {
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
