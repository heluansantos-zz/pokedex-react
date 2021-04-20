import React from 'react';

import { PokemonProvider } from './Pokemon';

const AppProvider: React.FC = ({ children }) => (
  <PokemonProvider>{children}</PokemonProvider>
);

export default AppProvider;
