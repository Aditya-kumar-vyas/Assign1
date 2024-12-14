export default function CarCard({ car }) {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold">{car.name}</h3>
          <p className="text-gray-600">{car.description}</p>
          <a
            href={`/cars/${car.id}`}
            className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            View Details
          </a>
        </div>
      </div>
    );
  }
  