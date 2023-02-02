import React, { useState } from 'react';

interface PokedexProps {
    
}

const pokemonArray: string[] = ["Pikachu", "Mew", "Tortic", "Charmander"]

const Pokedex: React.FC<PokedexProps> = () => {
    const [pokemons, setPokemons] = useState<string[]>(pokemonArray);
    const [selectedPokemon, setselectedPokemon] = useState<string | undefined>(undefined);
  

    return (
        <div>
            <h1>Pokedex</h1>

            Pokemons:
            {pokemons.map((pokemon) => <button onClick={() => setselectedPokemon(pokemon)}>{pokemon}</button> )}

            <h2>Pokemon selecionado: {selectedPokemon || "Nenhum pokemon selecionado"} </h2>
        </div>
    );
};

export default Pokedex;