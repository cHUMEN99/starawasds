
import { Character } from "./Character/Character";
import Pagination from "./Pagination/Pagination";
import { getDerails, getPerson } from "./utils/api";

export default async function Home({ searchParams }: { searchParams: { page?: string, modal?: string, id?: string } }) {
  const page = Number(searchParams.page) || 1;
  const starwars = await getPerson(page);

  const homeworldPromises = starwars.results.map((el) => 
    el.homeworld ? getDerails(el.homeworld) : Promise.resolve(null)
  );
  const homeworldData = await Promise.all(homeworldPromises);

  const speciesPromise = starwars.results.map((el) => 
    el.species.length > 0 ? getDerails(el.species[0]) : Promise.resolve(null)
  );
  const speciesData = await Promise.all(speciesPromise);

 


  return (
    <div>
      <Character speciesData={speciesData} homeworldData={homeworldData} starwars={starwars} />
      <Pagination page={page} next={starwars.next} previous={starwars.previous} />
      
      
    </div>
  );
}
