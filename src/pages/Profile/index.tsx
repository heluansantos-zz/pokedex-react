import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { PokemonCreateContext } from '../../hooks/Pokemon';

import About from './About';

import Badges from '../../components/Badges';

import IProfile from './interface';

import {
  Container,
  Header,
  PokemonId,
  PokemonName,
  PokemonImage,
  Content,
  TabContent,
  Tabs,
  Tab,
  Infos,
  PatternBg,
  NameBg,
  WrapperInfo,
  Back,
  WrapperImage,
  Stats,
} from './styles';

import PatternPoints from '../../assets/img/PatternProfile.png';
import BackIcon from '../../assets/img/backIcon.png';

const Profile: React.FC<IProfile> = (props) => {
  const history = useHistory();
  const {
    PokeTypes,
    formatePokemonId,
    setCurrentPokemon,
    currentPokemon,
  } = PokemonCreateContext();
  const { types, name, id, sprites } = props.location.state;
  const [tabs, setTabs] = useState([{ active: true, name: 'About' }]);

  const setCurrentTab = (index: number) => {
    setTabs((prevState) => {
      prevState.map((item, i: number) => {
        item.active = false;

        if (i === index) {
          prevState[i].active = true;
        }
      });

      return [...prevState];
    });
  };

  useEffect(() => {
    setCurrentPokemon(props.location.state);
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container
      backgroundColor={
        types.length ? PokeTypes[types[0].type.name].dafaultColor : ''
      }
    >
      <Header>
        <Back
          onClick={() => history.push('/')}
          src={BackIcon}
          alt="Pattern Points"
        />
        <NameBg>{name}</NameBg>
        <PatternBg src={PatternPoints} alt="Pattern Points" />

        <Infos>
          <WrapperImage>
            <PokemonImage
              src={
                sprites.other
                  ? sprites.other['official-artwork'].front_default
                  : ''
              }
              alt={name}
            />
          </WrapperImage>
          <WrapperInfo>
            <PokemonId>{formatePokemonId(id)}</PokemonId>
            <PokemonName>{name}</PokemonName>
            <Badges types={types} pokeTypes={PokeTypes} />
          </WrapperInfo>
        </Infos>
      </Header>
      <Content>
        <Tabs>
          {tabs.map(({ name, active }, i: number) => (
            <Tab key={name} onClick={() => setCurrentTab(i)} active={active}>
              {name}
            </Tab>
          ))}
        </Tabs>
        <TabContent>
          {tabs[0] && currentPokemon.species && (
            <About {...currentPokemon} formatePokemonId={formatePokemonId} />
          )}
          <Stats />
        </TabContent>
      </Content>
    </Container>
  );
};

export default Profile;
