import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

import { Autoplay } from 'swiper/modules'
import { IoLogoWhatsapp, IoLogoFacebook } from 'react-icons/io'
import { ClubInfo } from '../types.d'

import { antaraKwanInfo } from '../staticData'
import { lincesKwanInfo } from '../staticData'
import { relampagosKwanInfo } from '../staticData'
import { aguilasKwanInfo } from '../staticData'

const clubs: ClubInfo[] = [
  antaraKwanInfo,
  lincesKwanInfo,
  relampagosKwanInfo,
  aguilasKwanInfo,
]

export const ClubSlider = () => {
  return (
    <div className="flex justify-center">
      <Swiper
        modules={[Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
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
const ItemSlider = ({ club }: { club: ClubInfo }) => {
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
      <div className="flex gap-4 text-black mt-2">
        <a href={club.facebookLink} target="_blank" rel="noopener noreferrer">
          <IoLogoFacebook />
        </a>

        <a
          href={club.whatsappContact}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoWhatsapp />
        </a>
      </div>
    </div>
  )
}
