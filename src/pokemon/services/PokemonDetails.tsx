import React, { useEffect, useState } from 'react';
import { PokemonsDetails } from '../interfaces/pokemonDetails';
import { getPokemonsDetails } from './getPokemonDetails';

interface PokemonDetailsProps {
    
}

export const PokemonDetails: React.FC<PokemonDetailsProps> = () => {
    const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<PokemonsDetails | undefined>(undefined);

    useEffect(() => {
//        if (!selectedPokemon) return;

//        getPokemonsDetails(selectedPokemon.name)
//        .then((response) => setSelectedPokemonDetails(response))
        
    }, []);

    return (
        <div>
          {/* <h2> Pokemon selecionado:{" "}{selectedPokemon?.name || "Nenhum Pokemon Selecionado"}</h2> */}
          {JSON.stringify(selectedPokemonDetails, undefined, 2)}
        </div>
    );
};

export default PokemonDetails;