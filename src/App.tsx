import React from 'react';
import { Routes } from 'react-router-dom';
import Pokedex from './pokedex/Pokedex';
import { BrowserRouter as Router } from "react-router-dom";

interface AppProps {
  
}

export const App: React.FC<AppProps> = () => {
  return (
    
    <>
      <Router>
        <Router />  
      </Router>
    </>

  );
};

export default App;