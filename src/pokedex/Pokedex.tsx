import React, { useEffect, useState } from 'react';
import { PokemonsDetails } from '../pokemon/interfaces/pokemonDetails';
import { getPokemonsDetails } from '../pokemon/services/getPokemonDetails';
import { listPokemons, PokemonListInterface} from '../pokemon/services/listPokemons';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Grid, Box, CardActions, Card, CardContent } from '@mui/material';

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
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Pokedex
                    </Typography>
                    <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>

            <Grid container>

            {pokemons.map((pokemon) => (
                <>
                    <Grid item xs={6} lg={3}> 
                    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {pokemon.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => setSelectedPokemon(pokemon) } size="small">Abrir</Button>
      </CardActions>
    </Card>
                    </Grid>
                </>
            ))}

            </Grid>

            <Container maxWidth="lg" >
                <Box mt={"5rem"}>

                    <h2>Pokemon selecionado: {selectedPokemon?.name || "Nenhum Pokemon Selecionado"}</h2>
                    {JSON.stringify(selectedPokemonDetails, undefined, 2)}

                </Box>
            </Container>



        </div>
    );
};

export default Pokedex;