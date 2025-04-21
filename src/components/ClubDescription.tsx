interface HeroProps {
  image: string
  title: string
  description: string
}

export const ClubDescription: React.FC<HeroProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <section className="hero py-12 relative bg-[url('/src/assets/svg.png')] bg-cover bg-center">
      <div className="container mx-auto flex pb-48 flex-col-reverse md:flex-row items-center justify-between px-6">
        <div className="hero__container md:w-1/2 text-center md:text-left space-y-6">
          <div className="hero__info pb-4">
            <h1 className="md:text-5xl text-4xl font-light text-custom-text-title">
              {/* Asociación Municipal de TaeKwonDo Quillacollo */}
              {title}
            </h1>
            <p className="text-custom-text-description text-lg">
              {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. */}
              {description}
            </p>
          </div>

          <div className="flex justify-center md:justify-start space-x-4  ">
            <button className=" text-white font-bold px-6 py-2 rounded-lg border-2  border-custom-border  hover:bg-black hover:text-white hover:border-black">
              Clubes Afiliados
            </button>
            <button className="border border-custom-border text-white px-6 py-2 rounded-lg shadow-md  hover:bg-black hover:text-white hover:border-black">
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
export default ClubDescription
