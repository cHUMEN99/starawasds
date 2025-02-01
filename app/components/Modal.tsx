
import { IPerson, Species, StarwarsPerson } from "../interfaces";

export default function Modal({ 
  starwars, 
  homeworld, 
  species, 
  onClose 
}: { 
  starwars: StarwarsPerson, 
  homeworld: IPerson | null, 
  species: Species | null, 
  onClose: () => void 
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96 relative">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✖
        </button>

        <h2 className="text-xl font-bold">{starwars.name}</h2>
        <p>Height: {starwars.height}</p>
        <p>Mass: {starwars.mass}</p>
        <p>Birth Year: {starwars.birth_year}</p>

        {homeworld ? (
          <p>Homeworld: {homeworld.name} (Population: {homeworld.population})</p>
        ) : (
          <p>Homeworld: Unknown</p>
        )}

        {species ? (
          <p>Species: {species.name}</p>
        ) : (
          <p>Species: Unknown</p>
        )}
      </div>
    </div>
  );
}
