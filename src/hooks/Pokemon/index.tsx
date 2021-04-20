import React, { createContext, useState, useContext, useCallback } from 'react';

import IPokemonContext, { PokeTypes, IPokemon } from './interface';

import Repository from '../../config/repository';

const PokemonContext = createContext<IPokemonContext>({} as IPokemonContext);

const PokemonProvider: React.FC = ({ children }) => {
  const api = new Repository();
  const [pokemon, setPokemon] = useState({} as IPokemon);
  const [data, setData]: [IPokemon[], React.Dispatch<any>] = useState([]);

  const getPokemons = useCallback(async (offset: number) => {
    try {
      const newPokemons: IPokemon[] = [];
      const response = await api.getPokemons(offset);

      for (let i = 0; i < response.data.results.length; i++) {
        const pokemonInfo = await api.getPokemonByName(
          response.data.results[i].name,
        );
        newPokemons.push(pokemonInfo.data);
      }

      setData((prevState: IPokemon[]) => [...prevState, ...newPokemons]);
    } catch {}
  }, []);

  const setCurrentPokemon = useCallback(async (item: IPokemon) => {
    try {
      const response = await api.getPokemonSpecies(item.name);
      item.species = { ...item.species, ...response.data };

      setPokemon(item);
    } catch {}
  }, []);

  const resetPokemons = () => {
    setData([]);
  };

  const searchPokemon = useCallback(async (name: string) => {
    try {
      const response = await api.getPokemonByName(name.toLowerCase());

      setData([{ ...response.data }]);
    } catch {}
  }, []);

  const formatePokemonId = (id: number): string => {
    const currentId = id.toString();
    let zero = '';

    if (currentId.length === 1) zero = '00';

    if (currentId.length === 2) zero = '0';

    return `${zero}${id}`;
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemons: data,
        getPokemons,
        PokeTypes,
        formatePokemonId,
        resetPokemons,
        searchPokemon,
        setCurrentPokemon,
        currentPokemon: pokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

const PokemonCreateContext = (): IPokemonContext => {
  return useContext(PokemonContext);
};

export { PokemonContext, PokemonProvider, PokemonCreateContext };
