import React from 'react';
import Pokedex from './pokedex/Pokedex';

interface AppProps {
  
}

export const App: React.FC<AppProps> = () => {
  return (
    <Pokedex />
  );
};

export default App;