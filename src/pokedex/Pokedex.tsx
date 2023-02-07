import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PokemonsDetails } from '../pokemon/interfaces/pokemonDetails';
import { getPokemonsDetails } from '../pokemon/services/getPokemonDetails';
import { listPokemons, PokemonListInterface} from '../pokemon/services/listPokemons';

interface PokedexProps {
    
}


const Pokedex: React.FC<PokedexProps> = () => {
    const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(undefined);
    const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<PokemonsDetails | undefined>(undefined);
 
    useEffect(() => {
        listPokemons().then((response) => setPokemons(response.results))
    }, []);

    useEffect(() => {
        if (!selectedPokemon) return;

        getPokemonsDetails(selectedPokemon.name)
        .then((response) => setSelectedPokemonDetails(response))
        
    }, [selectedPokemon]);

    return (
        <div>
            <h1>Pokedex</h1>

            Pokemons:
            {pokemons.map((pokemon) => <button onClick={() => setSelectedPokemon(pokemon)}>{pokemon.name}</button>)}

            <h2>Pokemon selecionado: {selectedPokemon?.name || "Nenhum Pokemon Selecionado"}</h2>
            {JSON.stringify(selectedPokemonDetails, undefined, 2)}

        </div>
    );
};

export default Pokedex;