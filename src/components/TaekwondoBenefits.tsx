import {
  MdOutlineSportsMartialArts,
  MdSecurity,
  MdPsychology,
  MdStars,
  MdFitnessCenter,
} from 'react-icons/md'
import { PiHeadCircuitFill } from 'react-icons/pi'

interface Benefit {
  nombre: string
  descripcion: string
  icon: JSX.Element // Aquí agregamos el campo `icon` para el ícono
}

const benefitsOfTaekwondo: Benefit[] = [
  {
    nombre: 'Mejora la condición física',
    descripcion:
      'El taekwondo ayuda a mejorar la fuerza, resistencia, flexibilidad y coordinación a través de ejercicios dinámicos y entrenamientos intensos.',
    icon: <MdFitnessCenter />, // Icono relacionado con el beneficio
  },
  {
    nombre: 'Disciplina y autocontrol',
    descripcion:
      'Fomenta la autodisciplina y el control emocional, enseñando a los practicantes a respetar reglas, instructores y compañeros.',
    icon: <MdOutlineSportsMartialArts />,
  },
  {
    nombre: 'Defensa personal',
    descripcion:
      'Brinda técnicas efectivas de defensa personal que pueden ser útiles en situaciones de peligro, aumentando la confianza y seguridad personal.',
    icon: <MdSecurity />,
  },
  {
    nombre: 'Fortalecimiento mental',
    descripcion:
      'Ayuda a desarrollar la concentración, la resiliencia y la capacidad de afrontar desafíos con una mentalidad positiva.',
    icon: <MdPsychology />,
  },
  {
    nombre: 'Fomenta valores',
    descripcion:
      'Promueve valores como el respeto, la perseverancia, la humildad y el trabajo en equipo, esenciales dentro y fuera del tatami.',
    icon: <MdStars />,
  },
  {
    nombre: 'Reducción del estrés',
    descripcion:
      'La práctica constante del taekwondo permite liberar tensiones y reducir el estrés mediante el ejercicio físico y la concentración en la técnica.',
    icon: <PiHeadCircuitFill />,
  },
]

export const TaekwondoBenefits = () => {
  return (
    <>
      <div className=" bg-custom-primary-color  pb-6 pt-12">
        <h2 className="text-center text-white pt-12 pb-12 text-2xl">
          Beneficios del Taekwondo
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 p-4">
          {benefitsOfTaekwondo.map((benefit) => (
            <div
              key={benefit.nombre}
              className="border border-white rounded-lg p-4 text-white w-80 flex flex-col items-center"
            >
              <div className="bg-white rounded-full p-2 mb-4">
                <div className="content-center text-4xl text-custom-primary-color">
                  {benefit.icon}
                </div>
              </div>
              <p className="mt-2 font-bold text-center">{benefit.nombre}</p>
              <p className="mt-2 text-justify px-6 font-thin">
                {benefit.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex  justify-center">
        <div className=" bg-custom-primary-color   rounded-bl-[75%]  w-[50%] h-20"></div>
        <div className=" bg-custom-primary-color   rounded-br-[75%] w-[50%] h-20"></div>
      </div>
    </>
  )
}
