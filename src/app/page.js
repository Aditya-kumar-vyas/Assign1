import CarCard from "./components/CardCard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Home() {

  const cars = [
    {
      id: 1,
      name: "Audi Sport",
      image: "https://images.unsplash.com/photo-1618849985511-7dbc48d7d2e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF1ZGl8ZW58MHx8MHx8fDA%3D",
      description: "Electric luxury sedan with top-notch performance.",
    },
    {
      id: 2,
      name: "BMW X5",
      image: "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym13fGVufDB8fDB8fHww",
      description: "Spacious SUV with advanced features.",
    },
    {
      id: 3,
      name: "Ford Mustang",
      image: "https://images.unsplash.com/photo-1695753740196-010d54f56f3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Rm9yZCUyMG11c3Rhbmd8ZW58MHx8MHx8fDA%3D",
      description: "Iconic sports car with powerful performance.",
    },
    {
      id: 4,
      name: "Ford Mustang",
      image: "https://images.unsplash.com/photo-1533421348632-1d75db0355df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fENhcnMlMjBzcG9ydHN8ZW58MHx8MHx8fDA%3D",
      description: "Iconic sports car with powerful performance.",
    },
    {
      id: 5,
      name: "Ford Mustang",
      image: "https://images.unsplash.com/photo-1516236959620-057556c2361e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFNlZGFufGVufDB8fDB8fHww",
      description: "Iconic sports car with powerful performance.",
    },
    {
      id: 6,
      name: "Ford Mustang",
      image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fENhcnMlMjBzcG9ydHN8ZW58MHx8MHx8fDA%3D",
      description: "Iconic sports car with powerful performance.",
    },
  ];
  

  return (
    <div>
      <Navbar></Navbar>
      {/* <Sidebar></Sidebar> */}
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-8">Available Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
