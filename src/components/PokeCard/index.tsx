import React from 'react';
import { useHistory } from 'react-router-dom';

import Badges from '../Badges';

import IPokeCard from './interface';

import {
  Container,
  Content,
  PokeballBg,
  PatternBg,
  Infos,
  PokemonId,
  PokemonName,
  PokemonImage,
} from './styles';

import { PokemonCreateContext } from '../../hooks/Pokemon';

import PatternPoints from '../../assets/img/Pattern.png';
import Pokeball from '../../assets/img/Pokeball.png';

const PokeCard: React.FC<IPokeCard> = (props) => {
  const history = useHistory();
  const { className, types, name, id, sprites, router } = props;
  const { PokeTypes, formatePokemonId, resetPokemons } = PokemonCreateContext();

  const goProfileRouter = () => {
    history.push(router, { ...props });
    resetPokemons();
  };

  return (
    <Container
      onClick={() => goProfileRouter()}
      className={className}
      backgroundColor={
        types.length ? PokeTypes[types[0].type.name].dafaultColor : ''
      }
    >
      <PatternBg src={PatternPoints} alt="Pattern Points" />
      <PokeballBg src={Pokeball} alt="Pokeball" />
      <Content>
        <Infos>
          <PokemonId>{`#${formatePokemonId(id)}`}</PokemonId>
          <PokemonName>{name}</PokemonName>
          <Badges types={types} pokeTypes={PokeTypes} />
        </Infos>
        <PokemonImage
          src={
            sprites.other ? sprites.other['official-artwork'].front_default : ''
          }
          alt={name}
        />
      </Content>
    </Container>
  );
};

export default PokeCard;
