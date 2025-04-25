interface HeroProps {
  image: string
  title: string
  description: string
  onScrollClick: () => void
}

export const HeroSection: React.FC<HeroProps> = ({
  image,
  title,
  description,
  onScrollClick,
}) => {
  return (
    <section className="hero py-12 relative bg-[url('/src/assets/svg.png')] bg-cover bg-center min-h-[1300px] sm:min-h-[900px] md:min-h-[700px]"    >
      <div className="container mx-auto flex pb-48 flex-col-reverse md:flex-row items-center justify-between px-6" data-aos="fade-up" data-aos-duration="2000">
        <div className="hero__container md:w-1/2 text-center md:text-left space-y-6">
          <div className="hero__info pb-4 ">
            <h1 className="md:text-5xl text-4xl font-light text-custom-text-title">
              {title}
            </h1>
            <p className="text-custom-text-description text-lg pt-4">
              {description}
            </p>
          </div>

          <div className="flex justify-center md:justify-start space-x-4  ">
            <button
              className=" text-white font-bold px-6 py-2 rounded-lg border-2  transform transition duration-300 hover:scale-105 hover:shadow-2xl border-custom-border  hover:bg-black hover:text-white hover:border-black"
              onClick={onScrollClick}
            >
              Clubes Afiliados
            </button>
            <button className="border border-custom-border text-white px-6 py-2 rounded-lg shadow-md  transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-black hover:text-white hover:border-black">
              Actividades
            </button>
          </div>
        </div>

        <div className="md:w-sm flex justify-center pb-10 w-2xs">
          <img
            src={image}
            alt="Hero"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
