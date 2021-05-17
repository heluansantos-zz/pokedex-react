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

        pokemonInfo.data = {
          ...pokemonInfo.data,
          info1: 'Os jogos originais de Pokémon são japoneses',
          info2: 'Criados por Satoshi Tajiri',
          info3: 'Console Game Boy',
          info4: 'Jogos de RPGs',
          info5: 'Traduções para o inglês',
          info6:
            'A série Pokémon começou com o lançamento de Pocket Monsters Red e Green para o Game Boy no Japão',
          info7: 'A versão original "Green" nunca foi lançada fora do Japão',
          info8:
            'Esta primeira geração de jogos introduziu as 151 espécies originais de Pokémon',
          info9:
            'Uma encarnação 3D do Nintendo 64 do mesmo sistema de batalha dos RPGs portáteis',
          info10:
            'No Nintendo Space World em 2000, um jogo foi revelado brevemente com Meowth e Equipe Rocket cantando uma música',
          info11:
            ' Este jogo foi chamado de Meowths Party, mas nunca foi transformado em um jogo jogável',
          info12:
            'A música/vídeo foi tocada no final de um episódio de Pokémon e um CD foi feito para o varejo no Japão por tempo limitado.',
          info13:
            'A segunda geração de jogos eletrônicos de "Pokémon" começou em 1999 com o lançamento do Pokémon Gold & Silver',
          info14:
            'Outubro de 2000 e data de lançamento europeu de abril de 2001',
          info15:
            'Como na geração anterior, uma versão aprimorada chamada Pokémon Crystal foi lançada mais tarde',
          info16:
            'Novos recursos de jogabilidade incluem um sistema de dia e noite',
          info17: 'Uso completo da paleta de cores do Game Boy Color',
          info18: 'Primeira geração (1996–1999)',
          info19: 'Segunda geração (1999–2002)',
          info20: 'Terceira geração (2002–2006)',
          info21: 'Spin-offs (2005, 2006)',
          info22: 'Quarta geração (2006–2010)',
          info23: 'Quinta geração (2010–2013)',
          info24: 'Sexta geração (2013–2016)',
          info25: 'Sétima geração (2016–2019)',
          info26: 'Oitava geração (2019–presente)',
          info27: '-----Game Boy e Game Boy Color',
          info28: 'Pokémon Red & Blue, 1996 no Japão e 1998 nos EUA.',
          info29: 'Pokémon Green, a versão japonesa de Pokémon Blue, 1996.',
          info30: 'Pokémon Yellow, 1998 no Japão e 1999 nos EUA.',
          info31: 'Pokémon Pinball, 1999 nos dois países.',
          info32: 'Pokémon Gold & Silver, 1999 no Japão e 2000 nos EUA.',
          info33: 'Pokémon Crystal, 2000 no Japão e 2001 nos EUA.',
          info34: 'Pokémon Crystal, 2000 no Japão e 2001 nos EUA.',
          info35: 'Pokémon Trading Card Game, 1998 no Japão e 2001 nos EUA.',
          info36: 'Pokémon Trading Card Game 2, 2001 no Japão.',
          info37: '-----Nintendo 64',
          info38: 'Pokémon Stadium, 1999 no Japão e 2000 nos EUA.',
          info39: 'Pokémon Stadium 2, 2000 no Japão e 2001 nos EUA.',
          info40: 'Hey You, Pikachu!, 1998 no Japão e 2000 nos EUA.',
          info41: 'Pokémon Puzzle League, 2000 nos EUA.',
          info42: 'Pokémon Snap, 1999 nos dois países.',
          info43: '-----Game Boy Advance',
          info44: 'Pokémon Ruby & Sapphire, 2002 no Japão e 2003 nos EUA.',
          info45: 'Pokémon Pinball: Ruby & Sapphire, 2003 nos dois países.',
          info46: 'Pokémon FireRed & LeafGreen, 2004 no Japão e nos EUA.',
          info47: 'Pokémon Emerald, 2004 (Japão) e 2005 nos EUA.',
          info48:
            'Pokémon Mystery Dungeon: Red Rescue Team, 2005 no Japão e 2006 nos EUA.',
          info49: '-----Nintendo GameCube',
          info50: 'Pokémon Colosseum, 2003 no Japão e 2004 nos EUA.',
          info51: 'Pokémon XD, 2005 nos dois países.',
          info52: 'Pokémon Channel, 2003 nos dois países.',
          info53: 'Pokémon Box Ruby & Sapphire, 2003 no Japão e 2004 nos EUA.',
          info54: '-----Nintendo DS',
          info55: 'Pokémon Diamond & Pearl, 2006 no Japão e 2007 nos EUA.',
          info56: 'Pokémon Dash, 2004 no Japão e 2005 nos EUA.',
          info57: 'Pokémon Trozei!, 2006 no Japão e 2006 nos EUA.',
          info58:
            'Pokémon Mystery Dungeon: Blue Rescue Team, 2005 no Japão e 2006 nos EUA.',
          info59: 'Pokémon Ranger, 2006 nos dois países.',
          info60:
            'Pokémon Mystery Dungeon: Explorers of Time e Explorers of Darkness, 2007 no Japão e 2008 nos EUA.',
          info61: 'Pokémon Ranger: Shadows of Almia, 2008 no Japão e nos EUA.',
          info62: 'Pokémon Platinum, 2008 no Japão e 2009 nos EUA.',
          info63:
            'Pokémon HeartGold & SoulSilver, 2009 no Japão, 2010 nos EUA e 2010 na Europa.',
          info64:
            'Pokémon Mystery Dungeon: Explorers of Sky, 2009 no Japão e nos EUA.',
          info65: 'Pokémon Ranger: Guardian Signs, 2010 no Japão e nos EUA.',
          info66: 'Pokémon Black & White, 2010 no Japão e 2011 no Ocidente.',
          info67:
            'Learn with Pokémon: Typing Adventure, 2011 no Japão e 2012 na Europa.',
          info68: 'Pokémon TCG: How To Play DS, 2011 somente no Japão.',
          info69: 'Pokémon Conquest, 2012 no Japão e no Ocidente.',
          info70: 'Pokémon Black 2 & White 2, 2012 no Japão e no Ocidente.',
          info71: '-----Wii e Wii U',
          info72: 'Pokémon Battle Revolution, 2006 no Japão e 2007 nos EUA.',
          info73: 'Pokémon Snap Channel, 2007 no Japão.',
          info74: 'My Pokémon Ranch, um novo canal do Wii para 2008.',
          info75: 'Pokémon Rumble, em 2009.',
          info76: 'PokéPark Wii: Pikachus Adventure, em 2009.',
          info77: 'PokéPark 2: Wonders Beyond, em 2011.',
          info78: 'Pokémon Rumble U, em 2013.',
          info79: 'Pokkén Tournament, em 2016.',
          info80: '-----Nintendo 3DS e New Nintendo 3DS',
          info81:
            'Pokémon Rumble Blast lançado no ano de 2011. É baseado no jogo Pokémon Rumble lançado para Wii.',
          info82: 'Pokémon X & Y lançado em 12 de Outubro de 2013.',
          info83:
            'Pokémon Mystery Dungeon: Gates to Infinity lançado em 24 de Março de 2013.',
          info84: 'Pokemon Art Academy lançado em 4 de Julho de 2014.',
          info85:
            'Pokémon Omega Ruby & Alpha Sapphire lançado em 21 de novembro de 2014.',
          info86: 'Pokémon Shuffle lançado em 18 de fevereiro de 2015.',
          info87:
            'Pokémon Super Mystery Dungeon lançado em 21 de novembro de 2015.',
          info88: 'Pokémon Picross lançado em 2 de dezembro de 2015.',
          info89: 'Pokémon Rumble World lançado em 23 de janeiro de 2016.',
          info90: 'Detective Pikachu lançado em 3 de fevereiro de 2016.',
          info91: 'Pokémon Sun & Moon lançado em 8 de novembro de 2016.',
          info92:
            'Pokémon Ultra Sun & Ultra Moon lançado em 17 de novembro de 2017.',
          info93: '-----Nintendo Switch',
          info94: 'Pokkén Tournament DX, lançado em 22 de setembro de 2017.',
          info95: 'Pokémon Quest, lançado em 30 de maio de 2018.',
          info96:
            'Pokémon Lets Go, Pikachu! & Lets Go, Eevee!, lançado em 16 de novembro de 2018.',
          info97: 'Pokémon Sword e Shield, lançado em 15 de novembro de 2019.',
          info98: 'Pokémon Mystery Dungeon: Rescue Team DX, lançado em 2020.',
          info99: 'Pokémon Café Mix, lançado em 2020.',
          info100: 'New Pokémon Snap, lançado em 2021.',
        };

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
