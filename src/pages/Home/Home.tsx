import { HeroSection } from './Components/HeroSection'
import logo from '../../assets/logo.jpg'
import { InformationSection } from './Components/InformationSection'
import { ClubSliderSection } from './Components/ClubSliderSection'
import { BenefitsSection } from './Components/TaekwondoBenefits'
import { DescriptionSection } from './Components/DescriptionSection'

import { AffiliationSection } from './Components/AffiliationSection'
import { useEffect, useRef } from 'react'
import { useScroll } from '../../hooks/useScroll'
import { PostSection } from './Components/PostSection'

export const Home = () => {
  const clubsSectionRef = useRef<HTMLDivElement>(null)
  const postSectionRef = useRef<HTMLDivElement>(null)
  const { scrollTarget, setScrollTarget } = useScroll()

  const scrollToClubs = () => {
    clubsSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToPosts = () => {
    postSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (scrollTarget === 'clubs') {
      clubsSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
      setScrollTarget(null)
    }
    if (scrollTarget === 'posts') {
      postSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
      setScrollTarget(null)
    }
  }, [scrollTarget, setScrollTarget])

  return (
    <>
      <HeroSection
        image={logo}
        title={'Asociación Municipal de TaeKwonDo Quillacollo'}
        description={
          'Creemos que el deporte es una escuela de vida. Promovemos la formación de campeones no solo en el tatami, sino también en la vida, cultivando valores como el respeto, la disciplina y la perseverancia. Trabajamos día a día para fomentar una vida sana, fortalecer el espíritu y construir un futuro lleno de oportunidades para nuestros jóvenes.'
        }
        scrollToClubs={scrollToClubs}
        scrollToPosts={scrollToPosts}
      />

      <DescriptionSection />

      <InformationSection />

      <ClubSliderSection ref={clubsSectionRef} />
      <BenefitsSection />
      <PostSection ref={postSectionRef} />
      <AffiliationSection />
    </>
  )
}
