
import { IPerson, Species, StarwarsPerson } from "../interfaces";

export default function Modal({ 
  
  homeworld, 
  species, 
  person,
  onClose 
}: { 
  
  homeworld: IPerson | null, 
  species: Species | null, 
  person:StarwarsPerson,
  onClose: () => void 
}) {
  console.log(homeworld,species)
  return (
    <div className="">
      <div className="">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✖
        </button>

        <h2 className="text-xl font-bold">{person.name}</h2>
        <p>Height: {person.height/100}m</p>
        <p>Mass: {person.mass}kg</p>
        <p>createed:{person.created}</p>
        <p>Films length:{person.films.length}</p>
        
        <p>Birth Year: {person.birth_year}</p>

        {homeworld ? (
          <p>Homeworld: {homeworld.name} (Population: {homeworld.population}) Terrarin:{homeworld.terrain } Climate:{homeworld.climate}</p>
        ) : (
          <p>Homeworld: Unknown</p>
        )}

        {/* {species ? (
          <p>Species: {species.name}</p>
        ) : (
          <p>Species: Unknown</p>
        )} */}
      </div>
    </div>
  );
}
