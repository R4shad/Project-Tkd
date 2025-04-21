import ClubDescription from '../components/ClubDescription'
import Maps from '../components/Maps'

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
    <>
      <ClubDescription
        image={club.logoUrl}
        title={club.clubName}
        description={club.description}
      />
      <Maps lat={-17.38425} lng={-66.134955555556} />
    </>
  )
}
