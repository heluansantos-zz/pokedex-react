import React, { createContext, useState, useContext, useCallback } from 'react';

import IPokemonContext, { PokeTypes, IPokemon } from './interface';

import Repository from '../../config/repository';

const PokemonContext = createContext<IPokemonContext>({} as IPokemonContext);

const PokemonProvider: React.FC = ({ children }) => {
  const api = new Repository();
  const [pokemon, setPokemon] = useState({} as IPokemon);
  const [data, setData]: [IPokemon[], React.Dispatch<any>] = useState([]);
  const [res, setRes] = useState([]);

  const getPokemons = useCallback(async (offset: number) => {
    try {
      const newPokemons: IPokemon[] = [];
      const response = await api.getPokemons(offset);
      setRes(response.data);

      for (let i = 0; i < response.data.results.length; i++) {
        const pokemonInfo = await api.getPokemonByName(
          response.data.results[i].name,
        );

        newPokemons.push(pokemonInfo.data);
      }

      setData((prevState: IPokemon[]) => [...prevState, ...newPokemons]);
    } catch {}
  }, []);

  const infoPokerdexHistory = useCallback(async () => {
    const info1 = 'Os jogos originais de Pokémon são japoneses';
    const info2 = 'Criados por Satoshi Tajiri';
    const info3 = 'Console Game Boy';
    const info4 = 'Jogos de RPGs';
    const info5 = 'Traduções para o inglês';
    const info6 =
      'A série Pokémon começou com o lançamento de Pocket Monsters Red e Green para o Game Boy no Japão';
    const info7 = 'A versão original "Green" nunca foi lançada fora do Japão';
    const info8 =
      'Esta primeira geração de jogos introduziu as 151 espécies originais de Pokémon';
    const info9 =
      'Uma encarnação 3D do Nintendo 64 do mesmo sistema de batalha dos RPGs portáteis';
    const info10 =
      'No Nintendo Space World em 2000 um jogo foi revelado brevemente com Meowth e Equipe Rocket cantando uma música';
    const info11 =
      ' Este jogo foi chamado de Meowths Party mas nunca foi transformado em um jogo jogável';
    const info12 =
      'A música/vídeo foi tocada no final de um episódio de Pokémon e um CD foi feito para o varejo no Japão por tempo limitado.';
    const info13 =
      'A segunda geração de jogos eletrônicos de "Pokémon" começou em 1999 com o lançamento do Pokémon Gold & Silver';
    const info14 =
      'Outubro de 2000 e data de lançamento europeu de abril de 2001';
    const info15 =
      'Como na geração anterior, uma versão aprimorada chamada Pokémon Crystal foi lançada mais tarde';
    const info16 =
      'Novos recursos de jogabilidade incluem um sistema de dia e noite';
    const info17 = 'Uso completo da paleta de cores do Game Boy Color';
    const info18 = 'Primeira geração (1996–1999)';
    const info19 = 'Segunda geração (1999–2002)';
    const info20 = 'Terceira geração (2002–2006)';
    const info21 = 'Spin-offs (2005, 2006)';
    const info22 = 'Quarta geração (2006–2010)';
    const info23 = 'Quinta geração (2010–2013)';
    const info24 = 'Sexta geração (2013–2016)';
    const info25 = 'Sétima geração (2016–2019)';
    const info26 = 'Oitava geração (2019–presente)';
    const info27 = '-----Game Boy e Game Boy Color';
    const info28 = 'Pokémon Red & Blue, 1996 no Japão e 1998 nos EUA.';
    const info29 = 'Pokémon Green, a versão japonesa de Pokémon Blue, 1996.';
    const info30 = 'Pokémon Yellow, 1998 no Japão e 1999 nos EUA.';
    const info31 = 'Pokémon Pinball, 1999 nos dois países.';
    const info32 = 'Pokémon Gold & Silver, 1999 no Japão e 2000 nos EUA.';
    const info33 = 'Pokémon Crystal, 2000 no Japão e 2001 nos EUA.';
    const info34 = 'Pokémon Crystal, 2000 no Japão e 2001 nos EUA.';
    const info35 = 'Pokémon Trading Card Game, 1998 no Japão e 2001 nos EUA.';
    const info36 = 'Pokémon Trading Card Game 2, 2001 no Japão.';
    const info37 = '-----Nintendo 64';
    const info38 = 'Pokémon Stadium, 1999 no Japão e 2000 nos EUA.';
    const info39 = 'Pokémon Stadium 2, 2000 no Japão e 2001 nos EUA.';
    const info40 = 'Hey You, Pikachu!, 1998 no Japão e 2000 nos EUA.';
    const info41 = 'Pokémon Puzzle League, 2000 nos EUA.';
    const info42 = 'Pokémon Snap, 1999 nos dois países.';
    const info43 = '-----Game Boy Advance';
    const info44 = 'Pokémon Ruby & Sapphire, 2002 no Japão e 2003 nos EUA.';
    const info45 = 'Pokémon Pinball: Ruby & Sapphire, 2003 nos dois países.';
    const info46 = 'Pokémon FireRed & LeafGreen, 2004 no Japão e nos EUA.';
    const info47 = 'Pokémon Emerald, 2004 (Japão) e 2005 nos EUA.';
    const info48 =
      'Pokémon Mystery Dungeon: Red Rescue Team, 2005 no Japão e 2006 nos EUA.';
    const info49 = '-----Nintendo GameCube';
    const info50 = 'Pokémon Colosseum, 2003 no Japão e 2004 nos EUA.';
    const info51 = 'Pokémon XD, 2005 nos dois países.';
    const info52 = 'Pokémon Channel, 2003 nos dois países.';
    const info53 = 'Pokémon Box Ruby & Sapphire, 2003 no Japão e 2004 nos EUA.';
    const info54 = '-----Nintendo DS';
    const info55 = 'Pokémon Diamond & Pearl, 2006 no Japão e 2007 nos EUA.';
    const info56 = 'Pokémon Dash, 2004 no Japão e 2005 nos EUA.';
    const info57 = 'Pokémon Trozei!, 2006 no Japão e 2006 nos EUA.';
    const info58 =
      'Pokémon Mystery Dungeon: Blue Rescue Team, 2005 no Japão e 2006 nos EUA.';
    const info59 = 'Pokémon Ranger, 2006 nos dois países.';
    const info60 =
      'Pokémon Mystery Dungeon: Explorers of Time e Explorers of Darkness, 2007 no Japão e 2008 nos EUA.';
    const info61 = 'Pokémon Ranger: Shadows of Almia, 2008 no Japão e nos EUA.';
    const info62 = 'Pokémon Platinum, 2008 no Japão e 2009 nos EUA.';
    const info63 =
      'Pokémon HeartGold & SoulSilver, 2009 no Japão, 2010 nos EUA e 2010 na Europa.';
    const info64 =
      'Pokémon Mystery Dungeon: Explorers of Sky, 2009 no Japão e nos EUA.';
    const info65 = 'Pokémon Ranger: Guardian Signs, 2010 no Japão e nos EUA.';
    const info66 = 'Pokémon Black & White, 2010 no Japão e 2011 no Ocidente.';
    const info67 =
      'Learn with Pokémon: Typing Adventure, 2011 no Japão e 2012 na Europa.';
    const info68 = 'Pokémon TCG: How To Play DS, 2011 somente no Japão.';
    const info69 = 'Pokémon Conquest, 2012 no Japão e no Ocidente.';
    const info70 = 'Pokémon Black 2 & White 2, 2012 no Japão e no Ocidente.';
    const info71 = '-----Wii e Wii U';
    const info72 = 'Pokémon Battle Revolution, 2006 no Japão e 2007 nos EUA.';
    const info73 = 'Pokémon Snap Channel, 2007 no Japão.';
    const info74 = 'My Pokémon Ranch, um novo canal do Wii para 2008.';
    const info75 = 'Pokémon Rumble, em 2009.';
    const info76 = 'PokéPark Wii: Pikachus Adventure, em 2009.';
    const info77 = 'PokéPark 2: Wonders Beyond, em 2011.';
    const info78 = 'Pokémon Rumble U, em 2013.';
    const info79 = 'Pokkén Tournament, em 2016.';
    const info80 = '-----Nintendo 3DS e New Nintendo 3DS';
    const info81 =
      'Pokémon Rumble Blast lançado no ano de 2011. É baseado no jogo Pokémon Rumble lançado para Wii.';
    const info82 = 'Pokémon X & Y lançado em 12 de Outubro de 2013.';
    const info83 =
      'Pokémon Mystery Dungeon: Gates to Infinity lançado em 24 de Março de 2013.';
    const info84 = 'Pokemon Art Academy lançado em 4 de Julho de 2014.';
    const info85 =
      'Pokémon Omega Ruby & Alpha Sapphire lançado em 21 de novembro de 2014.';
    const info86 = 'Pokémon Shuffle lançado em 18 de fevereiro de 2015.';
    const info87 =
      'Pokémon Super Mystery Dungeon lançado em 21 de novembro de 2015.';
    const info88 = 'Pokémon Picross lançado em 2 de dezembro de 2015.';
    const info89 = 'Pokémon Rumble World lançado em 23 de janeiro de 2016.';
    const info90 = 'Detective Pikachu lançado em 3 de fevereiro de 2016.';
    const info91 = 'Pokémon Sun & Moon lançado em 8 de novembro de 2016.';
    const info92 =
      'Pokémon Ultra Sun & Ultra Moon lançado em 17 de novembro de 2017.';
    const info93 = '-----Nintendo Switch';
    const info94 = 'Pokkén Tournament DX, lançado em 22 de setembro de 2017.';
    const info95 = 'Pokémon Quest, lançado em 30 de maio de 2018.';
    const info96 =
      'Pokémon Lets Go, Pikachu! & Lets Go, Eevee!, lançado em 16 de novembro de 2018.';
    const info97 = 'Pokémon Sword e Shield, lançado em 15 de novembro de 2019.';
    const info98 = 'Pokémon Mystery Dungeon: Rescue Team DX, lançado em 2020.';
    const info99 = 'Pokémon Café Mix, lançado em 2020.';
    const info100 = 'New Pokémon Snap, lançado em 2021.';

    const info01 = 'Os jogos originais de Pokémon são japoneses';
    const info02 = 'Criados por Satoshi Tajiri';
    const info03 = 'Console Game Boy';
    const info04 = 'Jogos de RPGs';
    const info05 = 'Traduções para o inglês';
    const info06 =
      'A série Pokémon começou com o lançamento de Pocket Monsters Red e Green para o Game Boy no Japão';
    const info07 = 'A versão original "Green" nunca foi lançada fora do Japão';
    const info08 =
      'Esta primeira geração de jogos introduziu as 151 espécies originais de Pokémon';
    const info09 =
      'Uma encarnação 3D do Nintendo 64 do mesmo sistema de batalha dos RPGs portáteis';
    const info010 =
      'No Nintendo Space World em 2000 um jogo foi revelado brevemente com Meowth e Equipe Rocket cantando uma música';
    const info011 =
      ' Este jogo foi chamado de Meowths Party mas nunca foi transformado em um jogo jogável';
    const info012 =
      'A música/vídeo foi tocada no final de um episódio de Pokémon e um CD foi feito para o varejo no Japão por tempo limitado.';
    const info013 =
      'A segunda geração de jogos eletrônicos de "Pokémon" começou em 1999 com o lançamento do Pokémon Gold & Silver';
    const info014 =
      'Outubro de 2000 e data de lançamento europeu de abril de 2001';
    const info015 =
      'Como na geração anterior, uma versão aprimorada chamada Pokémon Crystal foi lançada mais tarde';
    const info016 =
      'Novos recursos de jogabilidade incluem um sistema de dia e noite';
    const info017 = 'Uso completo da paleta de cores do Game Boy Color';
    const info018 = 'Primeira geração (1996–1999)';
    const info019 = 'Segunda geração (1999–2002)';
    const info020 = 'Terceira geração (2002–2006)';
    const info021 = 'Spin-offs (2005, 2006)';
    const info022 = 'Quarta geração (2006–2010)';
    const info023 = 'Quinta geração (2010–2013)';
    const info024 = 'Sexta geração (2013–2016)';
    const info025 = 'Sétima geração (2016–2019)';
    const info026 = 'Oitava geração (2019–presente)';
    const info027 = '-----Game Boy e Game Boy Color';
    const info028 = 'Pokémon Red & Blue, 1996 no Japão e 1998 nos EUA.';
    const info029 = 'Pokémon Green, a versão japonesa de Pokémon Blue, 1996.';
    const info030 = 'Pokémon Yellow, 1998 no Japão e 1999 nos EUA.';
    const info031 = 'Pokémon Pinball, 1999 nos dois países.';
    const info032 = 'Pokémon Gold & Silver, 1999 no Japão e 2000 nos EUA.';
    const info033 = 'Pokémon Crystal, 2000 no Japão e 2001 nos EUA.';
    const info034 = 'Pokémon Crystal, 2000 no Japão e 2001 nos EUA.';
    const info035 = 'Pokémon Trading Card Game, 1998 no Japão e 2001 nos EUA.';
    const info036 = 'Pokémon Trading Card Game 2, 2001 no Japão.';
    const info037 = '-----Nintendo 64';
    const info038 = 'Pokémon Stadium, 1999 no Japão e 2000 nos EUA.';
    const info039 = 'Pokémon Stadium 2, 2000 no Japão e 2001 nos EUA.';
    const info040 = 'Hey You, Pikachu!, 1998 no Japão e 2000 nos EUA.';
    const info041 = 'Pokémon Puzzle League, 2000 nos EUA.';
    const info042 = 'Pokémon Snap, 1999 nos dois países.';
    const info043 = '-----Game Boy Advance';
    const info044 = 'Pokémon Ruby & Sapphire, 2002 no Japão e 2003 nos EUA.';
    const info045 = 'Pokémon Pinball: Ruby & Sapphire, 2003 nos dois países.';
    const info046 = 'Pokémon FireRed & LeafGreen, 2004 no Japão e nos EUA.';
    const info047 = 'Pokémon Emerald, 2004 (Japão) e 2005 nos EUA.';
    const info048 =
      'Pokémon Mystery Dungeon: Red Rescue Team, 2005 no Japão e 2006 nos EUA.';
    const info049 = '-----Nintendo GameCube';
    const info050 = 'Pokémon Colosseum, 2003 no Japão e 2004 nos EUA.';
    const info051 = 'Pokémon XD, 2005 nos dois países.';
    const info052 = 'Pokémon Channel, 2003 nos dois países.';
    const info053 =
      'Pokémon Box Ruby & Sapphire, 2003 no Japão e 2004 nos EUA.';
    const info054 = '-----Nintendo DS';
    const info055 = 'Pokémon Diamond & Pearl, 2006 no Japão e 2007 nos EUA.';
    const info056 = 'Pokémon Dash, 2004 no Japão e 2005 nos EUA.';
    const info057 = 'Pokémon Trozei!, 2006 no Japão e 2006 nos EUA.';
    const info058 =
      'Pokémon Mystery Dungeon: Blue Rescue Team, 2005 no Japão e 2006 nos EUA.';
    const info059 = 'Pokémon Ranger, 2006 nos dois países.';
    const info060 =
      'Pokémon Mystery Dungeon: Explorers of Time e Explorers of Darkness, 2007 no Japão e 2008 nos EUA.';
    const info061 =
      'Pokémon Ranger: Shadows of Almia, 2008 no Japão e nos EUA.';
    const info062 = 'Pokémon Platinum, 2008 no Japão e 2009 nos EUA.';
    const info063 =
      'Pokémon HeartGold & SoulSilver, 2009 no Japão, 2010 nos EUA e 2010 na Europa.';
    const info064 =
      'Pokémon Mystery Dungeon: Explorers of Sky, 2009 no Japão e nos EUA.';
    const info065 = 'Pokémon Ranger: Guardian Signs, 2010 no Japão e nos EUA.';
    const info066 = 'Pokémon Black & White, 2010 no Japão e 2011 no Ocidente.';
    const info067 =
      'Learn with Pokémon: Typing Adventure, 2011 no Japão e 2012 na Europa.';
    const info068 = 'Pokémon TCG: How To Play DS, 2011 somente no Japão.';
    const info069 = 'Pokémon Conquest, 2012 no Japão e no Ocidente.';
    const info070 = 'Pokémon Black 2 & White 2, 2012 no Japão e no Ocidente.';
    const info071 = '-----Wii e Wii U';
    const info072 = 'Pokémon Battle Revolution, 2006 no Japão e 2007 nos EUA.';
    const info073 = 'Pokémon Snap Channel, 2007 no Japão.';
    const info074 = 'My Pokémon Ranch, um novo canal do Wii para 2008.';
    const info075 = 'Pokémon Rumble, em 2009.';
    const info076 = 'PokéPark Wii: Pikachus Adventure, em 2009.';
    const info077 = 'PokéPark 2: Wonders Beyond, em 2011.';
    const info078 = 'Pokémon Rumble U, em 2013.';
    const info079 = 'Pokkén Tournament, em 2016.';
    const info080 = '-----Nintendo 3DS e New Nintendo 3DS';
    const info081 =
      'Pokémon Rumble Blast lançado no ano de 2011. É baseado no jogo Pokémon Rumble lançado para Wii.';
    const info082 = 'Pokémon X & Y lançado em 12 de Outubro de 2013.';
    const info083 =
      'Pokémon Mystery Dungeon: Gates to Infinity lançado em 24 de Março de 2013.';
    const info084 = 'Pokemon Art Academy lançado em 4 de Julho de 2014.';
    const info085 =
      'Pokémon Omega Ruby & Alpha Sapphire lançado em 21 de novembro de 2014.';
    const info086 = 'Pokémon Shuffle lançado em 18 de fevereiro de 2015.';
    const info087 =
      'Pokémon Super Mystery Dungeon lançado em 21 de novembro de 2015.';
    const info088 = 'Pokémon Picross lançado em 2 de dezembro de 2015.';
    const info089 = 'Pokémon Rumble World lançado em 23 de janeiro de 2016.';
    const info090 = 'Detective Pikachu lançado em 3 de fevereiro de 2016.';
    const info091 = 'Pokémon Sun & Moon lançado em 8 de novembro de 2016.';
    const info092 =
      'Pokémon Ultra Sun & Ultra Moon lançado em 17 de novembro de 2017.';
    const info093 = '-----Nintendo Switch';
    const info094 = 'Pokkén Tournament DX, lançado em 22 de setembro de 2017.';
    const info095 = 'Pokémon Quest, lançado em 30 de maio de 2018.';
    const info096 =
      'Pokémon Lets Go, Pikachu! & Lets Go, Eevee!, lançado em 16 de novembro de 2018.';
    const info097 =
      'Pokémon Sword e Shield, lançado em 15 de novembro de 2019.';
    const info098 = 'Pokémon Mystery Dungeon: Rescue Team DX, lançado em 2020.';
    const info099 = 'Pokémon Café Mix, lançado em 2020.';
    const info0100 = 'New Pokémon Snap, lançado em 2021.';
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
        infoPokerdexHistory,
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
