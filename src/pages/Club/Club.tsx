import { useParams } from 'react-router-dom'
import { clubs } from '../../staticData'
import ClubDescription from './Components/ClubDescription'
import Maps from './Components/Maps'
import { ClubImages } from './Components/ClubImages'
import { Helmet } from 'react-helmet-async'

export const Club = () => {
  const { name } = useParams<{ name: string }>()
  const formattedName = name?.replace(/-/g, ' ')
  console.log(formattedName)
  const club = clubs.find((c) => c.clubName.toLowerCase() === formattedName)
  console.log(clubs)
  if (!club) {
    return <div>Club not found</div>
  }

  return (
    <>
      <Helmet>
        <title>
          {club.clubName} | Asociación Municipal de Taekwondo Quillacollo
        </title>
        <meta name="description" content={club.description} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={club.clubName} />
        <meta property="og:description" content={club.description} />
        <meta property="og:image" content={club.logoUrl} />
        <meta
          property="og:url"
          content={`https://tkdqllo.netlify.app/club/${name}`}
        />
        <meta property="og:site_name" content="A.M.T.K.D. Quillacollo" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={club.clubName} />
        <meta name="twitter:description" content={club.description} />
        <meta name="twitter:image" content={club.images[0]} />
      </Helmet>
      <ClubDescription club={club} />

      <section className="description">
        <div className="  mx-auto container gap-5 p-6">
          <div className="flex justify-center  mb-8 ">
            <div className="description__content   text-center ">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {club.headInstructorName}
              </h2>
              <p className="text-gray-600 mb-4 text-justify">
                {club.instructorHistory}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Maps lat={club.googleMapsLocation[0]} lng={club.googleMapsLocation[1]} />
      <ClubImages images={club.images} />
    </>
  )
}
