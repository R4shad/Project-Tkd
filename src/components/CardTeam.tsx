import { useState } from 'react';

export interface CardProps {
  image: string;
  title: string;
  description: string;
  name: string;
}

export const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  name,
}) => {
  const [expandirDescripcion, setExpandirDescripcion] = useState(false);

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative w-full h-72">
        <img
          className="w-full h-full object-cover mt-4"
          src={image}
          alt={title}
        />

        <svg
          className="absolute bottom-0 left-0 w-full h-auto"
          viewBox="0 0 1440 390"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0,400 L 0,150 C 122.39999999999998,129.86666666666667 244.79999999999995,109.73333333333332 406,134 C 567.2,158.26666666666668 767.2,226.93333333333334 946,262 C 1124.8,297.06666666666666 1282.4,298.5333333333333 1440,300 L 1440,400 L 0,400 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="pt-0 px-4 pb-2">
        <h2 className="text-xl font-normal text-gray-900">{title}</h2>

        <p
          className={`text-gray-600 mt-2 text-sm transition-all ${
            expandirDescripcion ? '' : 'line-clamp-4'
          }`}
        >
          {description}
        </p>

        {/* Botón Leer más / Leer menos */}
        {description.length > 200 && (
          <button
            onClick={() => setExpandirDescripcion(!expandirDescripcion)}
            className="mt-1 text-blue-500 text-sm font-semibold hover:underline focus:outline-none"
          >
            {expandirDescripcion ? 'Leer menos' : 'Leer más'}
          </button>
        )}
      </div>

      <div className="px-4 pb-4">
        <p className="text-sm text-gray-500 font-medium line-clamp-5">
          {name}
        </p>
      </div>
    </div>
  );
};

export default Card;

