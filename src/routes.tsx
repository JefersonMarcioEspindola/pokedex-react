import React from 'react';
import { Route, Link } from "react-router-dom";
import Pokedex from './pokedex/Pokedex';

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => {
    return (
        <>
            <Route path="/pokemons">
                <h1>Pokemon</h1>
            </Route>

            <Route path="/">
                <Pokedex />
            </Route>
        </>
    );
};

export default Routes;
