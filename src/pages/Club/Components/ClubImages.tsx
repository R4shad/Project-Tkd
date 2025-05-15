export const ClubImages = ({ images }: { images: string[] }) => {
  return (
    <>
      <section className="px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Nuestra Academia
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {images.slice(0, 3).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Imagen ${idx + 1}`}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {images.slice(3, 5).map((img, idx) => (
            <img
              key={idx + 3}
              src={img}
              alt={`Imagen ${idx + 4}`}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          ))}
        </div>
      </section>
    </>
  )
}
