export interface IPerson{
    name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
}





export interface StarwarsPerson {
    name: string;
    height: number;
    mass: string;
    birth_year: string;
    created:string
    gender: string;
    homeworld: string;
    species: SpeciesType
    films: FilmsType[];
  }
  
  export interface Starwars {
    count: number;
    next: string | null;
    previous: string | null;
    results: StarwarsPerson[];
  }

  export interface Species{
    name:string;
  }


type SpeciesType=string
type FilmsType=string
