import React, { useState } from 'react'

interface MapSectionProps {
  lat: number
  lng: number
}

const Maps: React.FC<MapSectionProps> = ({ lat, lng }) => {
  const [selectedLocation, setSelectedLocation] = useState({ lat, lng })

  const locations = {
    Central: { lat: -17.356325582729294, lng: -66.29132073496622 },
    GymBeto: { lat: -17.363160341116618, lng: -66.28469847128844 },
    GymAtlas: { lat: -17.389741319276464, lng: -66.28112576892757 },
  }

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locationName = e.target.value as keyof typeof locations
    setSelectedLocation(locations[locationName])
  }

  const mapSrc = `https://www.google.com/maps?q=${selectedLocation.lat},${selectedLocation.lng}&hl=es&z=16&output=embed`

  return (
    <section className="map-section py-12 px-4 sm:px-6 lg:px-8 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Nuestra Ubicación
        </h2>

        {lat === -17.356146393304535 && (
          <div className="mb-6 flex justify-end  items-center gap-8">
            <p>Elige una sucursal: </p>
            <select
              onChange={handleLocationChange}
              className="border rounded-lg p-2 text-gray-700"
              defaultValue={'Central'}
            >
              <option value="Central">Central</option>
              <option value="GymBeto">Gym Beto</option>
              <option value="GymAtlas">Gym Atlas</option>
            </select>
          </div>
        )}

        <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            key={`${selectedLocation.lat},${selectedLocation.lng}`}
            className="w-full h-full"
            src={mapSrc}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Maps
