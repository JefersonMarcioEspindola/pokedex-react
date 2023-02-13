import React from 'react';
import Pokedex from './pokedex/Pokedex';
import AppRoutes from './routes';

interface AppProps {
  
}

export const App: React.FC<AppProps> = () => {
  return (
    
    <>
      <AppRoutes />
    </>

  );
};

export default App;