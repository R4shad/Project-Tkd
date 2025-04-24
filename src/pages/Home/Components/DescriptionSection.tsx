import React from 'react'

export const DescriptionSection: React.FC = () => {
  return (
    <section className="description">
      <div className="  mx-auto container gap-5 p-6">
        <div className="section__title text-center md:mb-24 mb-14">
          <h2 className="text-black text-3xl md:text-4xl font-bold">
            Informacion Destacada de la Asociación Municipal de Taekwondo
          </h2>
        </div>
        <div className=" flex justify-between flex-col md:flex-row items-center mb-5 md:mb-20 md:gap-5 ">
          <div className="description__image mb-5 md:mb-0  md:w-md w-64">
            <img
              src="https://wwgxztrtjxckhgasxbrf.supabase.co/storage/v1/object/public/tkdqllo/StaticData/f6_q9jsvs.jpg"
              alt=""
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className=" w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-4">
              Orgullo de Quillacollo: Talento que trasciende fronteras
            </h2>
            <p className="text-gray-600 mb-4">
              Nuestros atletas llevan su pasión y disciplina a lo más alto,
              destacándose en competencias nacionales y dejando en alto el
              nombre de nuestra tierra. Cada logro refleja su esfuerzo
              incansable, su talento extraordinario y el espíritu inquebrantable
              que los impulsa a superarse día a día. Son un orgullo que inspira
              a nuevas generaciones a soñar en grande y a demostrar que, con
              dedicación y amor por el deporte, no existen límites para alcanzar
              la excelencia.
            </p>
          </div>
        </div>
        <div className=" flex flex-col justify-between md:flex-row-reverse items-center  mb-5 md:mb-20 md:gap-5">
          <div className="description__image mb-5 md:mb-0  md:w-md w-64">
            <img
              src="https://wwgxztrtjxckhgasxbrf.supabase.co/storage/v1/object/public/tkdqllo/StaticData/f5_jmnrwy.jpg"
              alt=""
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="description__content w-full md:w-1/2 text-center md:text-left ">
            <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-4">
              Creciendo Juntos a Través del Deporte
            </h2>
            <p className="text-gray-600 mb-4">
              Los campeonatos municipales son mucho más que una competencia: son
              un espacio donde nuestros clubes miden su nivel, se fortalecen y
              crecen juntos en un ambiente de respeto y sana rivalidad. Cada
              encuentro fomenta la superación personal, el espíritu deportivo y
              refuerza los lazos de amistad que hacen de nuestra comunidad una
              verdadera familia. En cada combate, celebramos no solo la
              victoria, sino el esfuerzo, la dedicación y el compañerismo que
              nos definen.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
