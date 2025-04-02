import React from 'react';

interface MapSectionProps {
    lat: number;
    lng: number;
  }

const Maps: React.FC<MapSectionProps> = ({ lat, lng }) => {
    const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&hl=es&z=14&output=embed`;

    return (
        <section className="map-section py-12 px-4 sm:px-6 lg:px-8 text-center">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-10">Nuestra Ubicación</h2>
                <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        className="w-full h-full"
                        src={mapSrc}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Maps;