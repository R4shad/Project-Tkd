import { Hero } from './Components/Hero'
import logo from '../../assets/logo.jpg'
import Teams from './Components/Teams'
import { ClubSlider } from './Components/ClubSlider'
import { TaekwondoBenefits } from './Components/TaekwondoBenefits'
import Description from './Components/Description'

import { Affiliation } from './Components/Affiliation'
import { useEffect, useRef } from 'react'
import { useScroll } from '../../hooks/useScroll'

export const Home = () => {
  const clubsSectionRef = useRef<HTMLDivElement>(null)

  const { scrollTarget, setScrollTarget } = useScroll()

  const scrollToClubs = () => {
    console.log('cliecked')
    clubsSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (scrollTarget === 'clubs') {
      clubsSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
      setScrollTarget(null) // Limpias después de hacer el scroll
    }
  }, [scrollTarget, setScrollTarget])

  return (
    <>
      <Hero
        image={logo}
        title={'Asociación Municipal de TaeKwonDo Quillacollo'}
        description={
          'Creemos que el deporte es una escuela de vida. Promovemos la formación de campeones no solo en el tatami, sino también en la vida, cultivando valores como el respeto, la disciplina y la perseverancia. Trabajamos día a día para fomentar una vida sana, fortalecer el espíritu y construir un futuro lleno de oportunidades para nuestros jóvenes.'
        }
        onScrollClick={scrollToClubs}
      />
      {/* <Description /> */}
      <Description />
      {/* <Teams /> */}
      <Teams />
      {/*  <Maps /> */}

      <ClubSlider ref={clubsSectionRef} />
      <TaekwondoBenefits />
      <Affiliation />
    </>
  )
}
