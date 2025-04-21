import { Hero } from '../components/Hero'
import logo from '../assets/logo.jpg'
import Teams from '../components/Teams'
import { ClubSlider } from '../components/ClubSlider'
import { TaekwondoBenefits } from '../components/TaekwondoBenefits'
import Description from '../components/Description'

import { Affiliation } from '../components/Affiliation'
import { useRef } from 'react'

export const Home = () => {
  const clubsSectionRef = useRef<HTMLDivElement>(null)

  const scrollToClubs = () => {
    console.log('cliecked')
    clubsSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

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
