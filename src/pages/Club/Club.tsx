import { useParams } from 'react-router-dom'
import { clubs } from '../../staticData'
import ClubDescription from './Components/ClubDescription'
import Maps from './Components/Maps'
import { ClubImages } from './Components/ClubImages'

export const Club = () => {
  const { id } = useParams<{ id: string }>()
  console.log(id)
  const club = clubs.find((c) => c.id === Number(id))

  if (!club) {
    return <div>Club not found</div>
  }

  return (
    <>
      <ClubDescription club={club} />

      <section className="description">
        <div className="  mx-auto container gap-5 p-6">
          <div className="flex justify-center  mb-8 ">
            <div className="description__content w-1/2  text-center ">
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
