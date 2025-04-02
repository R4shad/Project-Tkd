import { Hero } from './Hero'
import heroImg from '../assets/hero-img.png'
import Teams from './Teams'
import { ClubSlider } from './ClubSlider'
import { TaekwondoBenefits } from './TaekwondoBenefits'
import Description from './Description'
import Maps from './Maps'

export const Home = () => {
  return (
    <>
       <Hero 
           image={heroImg} 
           title={'Asociación Municipal de TaeKwonDo Quillacollo'} 
           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.'} 
        />
        {/* <Description /> */}
        <Description />
        {/* <Teams /> */}
        <Teams />
        {/*  <Maps /> */}
        <Maps
         lat={-17.38425}
         lng={-66.134955555556}
        />
      <ClubSlider />
      <TaekwondoBenefits />
    </>
  )
}
