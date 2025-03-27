import React from 'react';
import Card from './CardTeam';

const Teams: React.FC = () => {
    return (
        <section className="team lg:py-16 ">
          <div className="container mx-auto px-6">
       
            <div className="section__title text-center md:mb-36 mb-10">
              <h2 className="text-black text-2xl md:text-4xl font-bold">
                Autoridades de la Asociación Municipal de Taekwondo
              </h2>
            </div>

          
            <div className="team__cards flex flex-wrap justify-center gap-6">
              <Card
                image="./src/assets/default.png"
                title="Director Departamental"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
                name="Juan Pérez"
              />
              <Card
                image="./src/assets/default.png"
                title="Director Departamental"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
                name="Juan Pérez"
              />
              <Card
                image="./src/assets/default.png"
                title="Director Departamental"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
                name="Juan Pérez"
              />
            </div>
          </div>
        </section>
    );
};

export default Teams;