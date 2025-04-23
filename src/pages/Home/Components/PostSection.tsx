import { useEffect, useRef } from 'react'
import Card, { CardProps } from './Card'
import { useScroll } from '../../../hooks/useScroll'

const listTeams: CardProps[] = [
  {
    image:
      'https://wwgxztrtjxckhgasxbrf.supabase.co/storage/v1/object/public/tkdqllo/StaticData/f2_a2jsix.jpg',
    title: 'Reconocidos por la Alcaldía de Quillacollo',
    description:
      'Contamos con el valioso respaldo de la Alcaldía de Quillacollo, a la cual estamos oficialmente afiliados. Este apoyo reafirma nuestro compromiso con el desarrollo deportivo de nuestra comunidad. Durante la gestión 2024, la Alcaldía reconoció públicamente a nuestros dos mejores atletas de Quillacollo, así como a un entrenador destacado, demostrando no solo el nivel de excelencia de nuestros deportistas, sino también el firme reconocimiento y acompañamiento institucional que impulsa nuestro crecimiento y logros.',
    name: '',
  },
  {
    image:
      'https://wwgxztrtjxckhgasxbrf.supabase.co/storage/v1/object/public/tkdqllo/StaticData/f4_z9ykqa.jpg',
    title: 'Reconociendo el Esfuerzo y la Excelencia',
    description:
      'Nos enorgullece saber que, en la gestión 2024, se reconoció a los mejores deportistas de cada categoría, valorando su esfuerzo, talento y dedicación. Nos sentimos felices y profundamente orgullosos de sus logros, que son el reflejo del compromiso y la pasión que caracterizan a nuestra familia deportiva.',
    name: '',
  },
  {
    image:
      'https://wwgxztrtjxckhgasxbrf.supabase.co/storage/v1/object/public/tkdqllo/StaticData/f2_iy5tid.jpg',
    title: 'Formación en Valores, Disciplina y Carácter',
    description:
      'En nuestra Asociación, entendemos que el Taekwondo va más allá de la competencia deportiva: es una herramienta para la vida. Nuestros entrenadores no solo forman atletas destacados, sino también personas íntegras, cultivando disciplina, respeto, fortaleza interior y carácter. Creemos que en cada combate el verdadero rival no es el oponente, sino uno mismo: sus miedos, inseguridades y límites. Así, preparamos a nuestros estudiantes no solo para triunfar en el tatami, sino para enfrentar con valor los desafíos de la vida.',
    name: '',
  },
]

export const PostSection = () => {
  const postSectionRef = useRef<HTMLDivElement>(null)
  const { scrollTarget, setScrollTarget } = useScroll()

  useEffect(() => {
    if (scrollTarget === 'posts') {
      postSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
      setScrollTarget(null)
    }
  }, [scrollTarget, setScrollTarget])

  return (
    <section ref={postSectionRef} className="team lg:py-16 ">
      <div className="container mx-auto px-6">
        <h2 className="text-black text-3xl md:text-4xl font-bold text-center mb-14">
          Publicaciones Recientes
        </h2>
        <div className="team__cards flex flex-wrap justify-center gap-6">
          {listTeams.map((team) => (
            <Card key={team.title} {...team} />
          ))}
        </div>
      </div>
    </section>
  )
}
