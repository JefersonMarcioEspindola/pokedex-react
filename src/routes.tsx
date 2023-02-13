import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Pokedex from "./pokedex/Pokedex";
import PokemonDetails from "./pokemon/services/PokemonDetails";

const AppRoutes = ()  => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Pokedex />}> </Route>
                <Route path="/pokemon" element={<PokemonDetails/>}> </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;