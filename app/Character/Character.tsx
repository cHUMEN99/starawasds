"use client"

import { useState } from 'react';
import { IPerson, Species, Starwars } from '../interfaces';
import { getSpecialColor } from '../utils/api';
import Modal from '../components/Modal';

export function Character({ starwars, homeworldData, speciesData }: { starwars: Starwars, homeworldData: IPerson[], speciesData: Species[] }) {
    const [selectedPerson, setSelectedPerson] = useState<Starwars["results"][number] | null>(null); 
    const [selectedHomeworld, setSelectedHomeworld] = useState<IPerson | null>(null);
    const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null);

    const handlePersonClick = (person: Starwars["results"][number], index: number) => {
        setSelectedPerson(person);
        setSelectedHomeworld(homeworldData[index]);
        setSelectedSpecies(speciesData[index]);
    };

   

    return (
        <div>
            {starwars.results.map((el, index) => (
                <div key={index} className={`${getSpecialColor(speciesData[index]?.name || 'Unknown')} m-2`}>
                    <h1 onClick={() => handlePersonClick(el, index)}>{el.name}</h1>
                   
                </div>
            ))}  
            
            {selectedPerson && (
                <Modal 
                    person={selectedPerson} 
                    homeworld={selectedHomeworld} 
                    species={selectedSpecies} 
                    onClose={() => setSelectedPerson(null)}
                />
            )}
        </div>
    );
}