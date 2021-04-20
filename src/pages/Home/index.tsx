import React, { useCallback, useEffect, useState } from 'react';

import Input from '../../components/Input';
import PokeCard from '../../components/PokeCard';

import { PokemonCreateContext } from '../../hooks/Pokemon';

import {
  Container,
  Content,
  Header,
  Title,
  Subtitle,
  PokeballBackground,
} from './styles';

import SearchIcon from '../../assets/img/search.png';
import PokeballBg from '../../assets/img/pokeballbg.png';

const Home: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const {
    searchPokemon,
    getPokemons,
    pokemons,
    resetPokemons,
  } = PokemonCreateContext();

  const onScroll = () => {
    const containerPokemons = document.getElementById('containerPokemons');
    const windowScroll = window.pageYOffset;

    if (!containerPokemons) return;

    if (containerPokemons.clientHeight - windowScroll < 1300) {
      setOffset((prevState: number): any => {
        return prevState + 35;
      });
    }
  };

  const onSearchPokemon = useCallback(
    (name: string) => {
      resetPokemons();

      if (name === '') {
        getPokemons(0);
        setOffset(0);
        return;
      }

      searchPokemon(name);
      window.scrollTo(0, 0);
    },
    [pokemons],
  );

  useEffect(() => {
    getPokemons(offset);
  }, [offset]);

  useEffect(() => {
    resetPokemons();
    window.addEventListener('scroll', onScroll);
  }, []);

  return (
    <Container id="containerPokemons">
      <PokeballBackground src={PokeballBg} alt="Pokeball icon" />
      <Header>
        <Title>Pokédex</Title>
        <Subtitle>
          Search for Pokémon by name or using the National Pokédex number.
        </Subtitle>
        <Input
          onChange={(e) => {
            onSearchPokemon(e.target.value);
          }}
          icon={SearchIcon}
          placeholder="What Pokémon are you looking for?"
        />
      </Header>
      <Content>
        {pokemons.map((item: any) => (
          <PokeCard router={`profile/${item.name}`} key={item.id} {...item} />
        ))}
      </Content>
    </Container>
  );
};

export default Home;
