import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css' // Importar la versión completa de Swiper CSS
import logo from './../assets/lincesIcon.png'
import { Autoplay } from 'swiper/modules'
const clubs: Club[] = [
  { id: 1, name: 'Club 1', coach: 'Entrenador 1' },
  { id: 2, name: 'Club 2', coach: 'Entrenador 2' },
  { id: 3, name: 'Club 3', coach: 'Entrenador 3' },
  { id: 4, name: 'Club 4', coach: 'Entrenador 4' },
  { id: 5, name: 'Club 5', coach: 'Entrenador 5' },
]

interface Club {
  id: number
  name: string
  coach: string
}

export const ClubSlider = () => {
  return (
    <div className="flex justify-center">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        speed={500}
        effect="slide"
      >
        {clubs.map((club) => (
          <SwiperSlide key={club.id} style={{ width: '220px' }}>
            <ItemSlider club={club} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

import { IoLogoWhatsapp, IoLogoFacebook } from 'react-icons/io'

const ItemSlider = ({ club }: { club: Club }) => {
  return (
    <div className="flex flex-col items-center w-fit center place-self-center">
      <div className="w-50 h-50 rounded-full bg-gray-200 flex items-center justify-center shadow-lg">
        <img
          src={logo}
          alt="Club Logo"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <h2 className="mt-4">{club.name}</h2>
      <p>{club.coach}</p>
      <div className="flex gap-4 text-black mt-2">
        <IoLogoFacebook />
        <IoLogoWhatsapp />
      </div>
    </div>
  )
}
