import React from 'react'
import img from '../assets/Rectangle.png'

const Description: React.FC = () => {
  return (
    <section className="description">
      <div className="description__container container mx-auto  gap-10 p-6">
        <div className="desciption__left flex justify-between flex-col md:flex-row items-center mb-15 md:mb-20 ">
          {/* Image */}
          <div className="description__image  mb-5 md:mb-0 md:w-md w-72">
            <img
              src={img}
              alt=""
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="description__content w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae voluptate facere expedita accusamus omnis mollitia.
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, distinctio ad corrupti assumenda molestiae ea
              corporis voluptatem vel sit ullam voluptates exercitationem maxime
              quas nemo ducimus soluta earum quidem. Quas.
            </p>
          </div>
        </div>
        <div className="desciption__right flex flex-col justify-between md:flex-row-reverse items-center  mb-15 md:mb-20">
          {/* Image */}
          <div className="description__image mb-5 md:mb-0  md:w-md w-72">
            <img
              src={img}
              alt=""
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="description__content w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae voluptate facere expedita accusamus omnis mollitia.
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, distinctio ad corrupti assumenda molestiae ea
              corporis voluptatem vel sit ullam voluptates exercitationem maxime
              quas nemo ducimus soluta earum quidem. Quas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Description
