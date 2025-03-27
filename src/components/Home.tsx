import { Hero } from './Hero'
import heroImg from '../assets/hero-img.png'
import Teams from './Teams'
import { ClubSlider } from './ClubSlider'
import { TaekwondoBenefits } from './TaekwondoBenefits'

export const Home = () => {
  return (
    <>
       <Hero 
           image={heroImg} 
           title={'Asociación Municipal de TaeKwonDo Quillacollo'} 
           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.'} 
        />
        {/* <Teams /> */}
        <Teams />
      <ClubSlider />
      <TaekwondoBenefits />
    </>
  )
}
