import WTBimg from './../../../assets/FBTKD.jpg'

export const AffiliationSection = () => {
  return (
    <section className="affiliation  py-14 md:py-28"  data-aos="fade-up" data-aos-duration="2000">
      <div className="flex flex-col items-center  text-center px-4 md:px-16">
        <h2 className="text-2xl sm:text-2xl md:text-4xl font-semibold mb-6">
          Afiliados a la Federación Boliviana de Taekwondo
        </h2>

        <div className="overflow-hidden w-full my-12 max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
          <img
            src={WTBimg}
            alt="WTB icon"
            className="w-full h-auto 
"
          />
        </div>
        <div className="affiliation-text md:w-3xl">
          <p className="text-stone-950 text-lg mt-6 sm:text-sm pb-8 ">
            La Federación Boliviana de Taekwondo es la organización rectora de
            este arte marcial en Bolivia. Su misión es promover y desarrollar la
            práctica del Taekwondo en el país, así como organizar competiciones
            y eventos relacionados con este deporte. La federación trabaja en
            estrecha colaboración con clubes, entrenadores y atletas para
            fomentar el crecimiento y la excelencia en el Taekwondo a nivel
            nacional e internacional.
          </p>
        </div>
      </div>
    </section>
  )
}
