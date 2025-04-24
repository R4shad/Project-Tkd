import { ClubInfo } from '../../../types'
import { FaFacebook } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
interface HeroProps {
  club: ClubInfo
}

export const ClubDescription: React.FC<HeroProps> = ({ club }) => {
  return (
    <section className="hero relative bg-[url('/src/assets/svg.png')] bg-cover bg-center">
      <div className="pt-8 container mx-auto flex  pb-68 flex-col-reverse md:flex-row items-center justify-between px-6">
        <div className="hero__container md:w-1/2 text-center md:text-left space-y-6">
          <div className="hero__info pb-4">
            <h1 className="md:text-5xl text-4xl font-light text-custom-text-title">
              {club.clubName}
            </h1>
            <p className="text-custom-text-description text-lg text-justify">
              {club.description}
            </p>
          </div>

          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href={club.whatsappContact}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-white font-bold px-3 py-2 rounded-lg border-2  border-custom-border  hover:bg-black hover:text-white hover:border-black w-50 flex items-center justify-center gap-2">
                Contáctenos <IoLogoWhatsapp />
              </button>
            </a>
            <a
              href={club.facebookLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border border-custom-border text-white px-3 py-2 rounded-lg shadow-md  hover:bg-black hover:text-white hover:border-black w-50 flex items-center justify-center gap-2">
                Conócenos Más <FaFacebook />
              </button>
            </a>
          </div>
        </div>

        <div className="md:w-sm flex justify-center  w-2xs">
          <img
            src={club.logoUrl}
            alt="Hero"
            className="w-full max-w-md  rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
export default ClubDescription
