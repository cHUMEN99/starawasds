

import { IPerson, Species, Starwars } from '../interfaces';
import { getSpecialColor } from '../utils/api';


export function Character({ starwars, homeworldData, speciesData }: { starwars: Starwars, homeworldData: IPerson[], speciesData: Species[] }) {
    // const [selectedPerson, setSelectedPerson] = useState<Starwars["results"][number] | null>(null); 
    return (
        <div>
            {starwars.results.map(( el, index ) => (
               <div key={index} className={`${getSpecialColor(speciesData[index]?.name || 'Unknown')} m-2`}>

                    <h1 >{el.name}</h1>
                    <h3>Homeworld: {homeworldData[index]?.name}</h3>
                    <h3>Population: {homeworldData[index]?.population}</h3>
                    <h3>Species: {speciesData[index]?.name}</h3>
                    {/* {selectedPerson && (
                        <Modal homeworldData={homeworldData}  speciesData={speciesData} starwars={starwars.results}/>
                    )
                    } */}
                    
                   
                </div>
            ))}  
        </div>
    );
}
