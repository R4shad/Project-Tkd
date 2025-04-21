import { clubs } from '../staticData'

import { useParams } from 'react-router-dom'

export const Club = () => {
  const { id } = useParams<{ id: string }>()
  console.log(id)
  const club = clubs.find((c) => c.id === Number(id))

  if (!club) {
    return <div>Club not found</div>
  }

  return (
    <div className="flex flex-col items-center w-fit center place-self-center">
      <div className="w-50 h-50 rounded-full bg-gray-200 flex items-center justify-center shadow-lg">
        <img
          src={club.logoUrl}
          alt="Club Logo"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <h2 className="mt-4">{club.clubName}</h2>
      <p>{club.headInstructorName}</p>
    </div>
  )
}
