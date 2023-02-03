import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface PokedexProps {
    
}

interface PokemonListInterface {
    name: string
    url: string
}

const Pokedex: React.FC<PokedexProps> = () => {
    const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(undefined);
 
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon').then((response) => setPokemons(response.data.results))
    }, []);

    useEffect(() => {
        if (!selectedPokemon) return;

        axios.get('https://pokeapi.co/api/v2/pokemon').then((response) => setPokemons(response.data.results))
        
    }, [selectedPokemon]);

    return (
        <div>
            <h1>Pokedex</h1>

            Pokemons:
            {pokemons.map((pokemon) => <button onClick={() => setSelectedPokemon(pokemon)}>{pokemon.name}</button>)}

            <h2>Pokemon selecionado: {selectedPokemon}</h2>

        </div>
    );
};

export default Pokedex;