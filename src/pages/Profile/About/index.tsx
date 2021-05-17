import React, { useEffect, useState } from 'react';

import {
  Container,
  Ablities,
  Description,
  Item,
  ParentLabel,
  Infos,
  Label,
  Value,
  InfoTitle,
  DivInfo,
  Info1,
  Info2,
  Info3,
  Info4,
  Info5,
  Info6,
  Info7,
  Info8,
  Info9,
  Info10,
  Info11,
  Info12,
  Info13,
  Info14,
  Info15,
  Info16,
  Info17,
  Info18,
  Info19,
  Info20,
  Info21,
  Info22,
  Info23,
  Info24,
  Info25,
  Info26,
  Info27,
  Info28,
  Info29,
  Info30,
  Info31,
  Info32,
  Info33,
  Info34,
  Info35,
  Info36,
  Info37,
  Info38,
  Info39,
  Info40,
  Info41,
  Info42,
  Info43,
  Info44,
  Info45,
  Info46,
  Info47,
  Info48,
  Info49,
  Info50,
  Info51,
  Info52,
  Info53,
  Info54,
  Info55,
  Info56,
  Info57,
  Info58,
  Info59,
  Info60,
  Info61,
  Info62,
  Info63,
  Info64,
  Info65,
  Info66,
  Info67,
  Info68,
  Info69,
  Info70,
  Info71,
  Info72,
  Info73,
  Info74,
  Info75,
  Info76,
  Info77,
  Info78,
  Info79,
  Info80,
  Info81,
  Info82,
  Info83,
  Info84,
  Info85,
  Info86,
  Info87,
  Info88,
  Info89,
  Info90,
  Info91,
  Info92,
  Info93,
  Info94,
  Info95,
  Info96,
  Info97,
  Info98,
  Info99,
  Info100,
} from './styles';

const Profile: React.FC<any> = (props) => {
  const { species, abilities, base_experience } = props;

  const [info] = useState({
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
    info14: 'Outubro de 2000 e data de lançamento europeu de abril de 2001',
    info15:
      'Como na geração anterior, uma versão aprimorada chamada Pokémon Crystal foi lançada mais tarde',
    info16: 'Novos recursos de jogabilidade incluem um sistema de dia e noite',
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
    info87: 'Pokémon Super Mystery Dungeon lançado em 21 de novembro de 2015.',
    info88: 'Pokémon Picross lançado em 2 de dezembro de 2015.',
    info89: 'Pokémon Rumble World lançado em 23 de janeiro de 2016.',
    info90: 'Detective Pikachu lançado em 3 de fevereiro de 2016.',
    info91: 'Pokémon Sun & Moon lançado em 8 de novembro de 2016.',
    info92: 'Pokémon Ultra Sun & Ultra Moon lançado em 17 de novembro de 2017.',
    info93: '-----Nintendo Switch',
    info94: 'Pokkén Tournament DX, lançado em 22 de setembro de 2017.',
    info95: 'Pokémon Quest, lançado em 30 de maio de 2018.',
    info96:
      'Pokémon Lets Go, Pikachu! & Lets Go, Eevee!, lançado em 16 de novembro de 2018.',
    info97: 'Pokémon Sword e Shield, lançado em 15 de novembro de 2019.',
    info98: 'Pokémon Mystery Dungeon: Rescue Team DX, lançado em 2020.',
    info99: 'Pokémon Café Mix, lançado em 2020.',
    info100: 'New Pokémon Snap, lançado em 2021.',
  });

  const [data, setData]: [any, React.Dispatch<any>] = useState({
    pokeData: {
      label: 'Pokédex Data',
      value: {
        species: { label: 'Species', value: '' },
        height: { label: 'Height', value: '' },
        weight: { label: 'Weight', value: '' },
        abilities: { label: 'Abilities', value: '' },
      },
    },
    training: {
      label: 'Training',
      value: {
        catchRate: { label: 'Catch Rate', value: '' },
        baseFriend: { label: 'Base Friendship', value: '' },
        baseExp: { label: 'Base Exp', value: '' },
        growthRate: { label: 'Growth Rate', value: '' },
      },
    },
    breeding: {
      label: 'Breeding',
      value: {
        gender: { label: 'Gender', value: '' },
        eggGroups: { label: 'Egg Groups', value: '' },
        eggCycles: { label: 'Egg Cycles', value: '' },
      },
    },
    pokedex: {
      label: 'Pokedex Numbers',
      value: {},
    },
  });

  const renderAbilities = (abilities: []) => {
    return (
      <Ablities>
        {abilities.map((item: any, i: number) => (
          <span className={`${item.is_hidden ? 'small' : ''}`} key={i}>
            {!item.is_hidden && `${item.slot}.`}
            {item.ability.name} {item.is_hidden && '(hidden ability)'}
          </span>
        ))}
      </Ablities>
    );
  };

  const setAboutData = () => {
    setData((prevState: any) => {
      const { pokeData, training, breeding, pokedex } = prevState;
      const metters = props.height * 0.1;
      const kg = props.weight / 10;
      const gender = species.gender_rate === 1 ? 'Male' : 'Female';

      pokeData.value.species.value = species.genera[7].genus;
      pokeData.value.height.value = `${metters.toFixed(1)}m`;
      pokeData.value.weight.value = `${kg.toFixed(1)}kg`;
      pokeData.value.abilities.value = renderAbilities(abilities);

      training.value.growthRate.value = <p>{species.growth_rate.name}</p>;
      training.value.catchRate.value = species.capture_rate;
      training.value.baseFriend.value = species.base_happiness;
      training.value.baseExp.value = base_experience;

      breeding.value.eggCycles.value = species.hatch_counter;
      breeding.value.gender.value = gender;

      breeding.value.eggGroups.value = (
        <p>
          {species.egg_groups.map((item: any, i: number) => (
            <span key={i}>
              {item.name}
              {species.egg_groups.length - 1 !== i && ', '}
            </span>
          ))}
        </p>
      );

      species.pokedex_numbers.map((item: any) => {
        pokedex.value = {
          ...pokedex.value,
          [item.entry_number]: {
            label: props.formatePokemonId(item.entry_number),
            value: `(${item.pokedex.name})`,
          },
        };
      });

      return { ...prevState };
    });
  };

  const getDescription = () => {
    if (species.flavor_text_entries) {
      return species.flavor_text_entries[44].flavor_text;
    }

    return null;
  };

  useEffect(() => {
    if (props.species.flavor_text_entries) {
      setAboutData();
    }
  }, [props.species]);

  return (
    <Container>
      <Description>{getDescription()}</Description>
      {Object.keys(data).map((parentKey: string) => (
        <Item key={parentKey}>
          <ParentLabel>{data[parentKey].label}</ParentLabel>
          {Object.keys(data[parentKey].value).map((childKey: string) => (
            <Infos key={childKey}>
              <Label>{data[parentKey].value[childKey].label}</Label>
              <Value>{data[parentKey].value[childKey].value}</Value>
            </Infos>
          ))}
        </Item>
      ))}
      <DivInfo>
        <InfoTitle>Informações Adicionais</InfoTitle>
        <Info1>{info.info1}</Info1>
        <Info2>{info.info2}</Info2>
        <Info3>{info.info3}</Info3>
        <Info4>{info.info4}</Info4>
        <Info5>{info.info5}</Info5>
        <Info6>{info.info6}</Info6>
        <Info7>{info.info7}</Info7>
        <Info8>{info.info8}</Info8>
        <Info9>{info.info9}</Info9>
        <Info10>{info.info10}</Info10>
        <Info11>{info.info11}</Info11>
        <Info12>{info.info12}</Info12>
        <Info13>{info.info13}</Info13>
        <Info14>{info.info14}</Info14>
        <Info15>{info.info15}</Info15>
        <Info16>{info.info16}</Info16>
        <Info17>{info.info17}</Info17>
        <Info18>{info.info18}</Info18>
        <Info19>{info.info19}</Info19>
        <Info20>{info.info20}</Info20>
        <Info21>{info.info21}</Info21>
        <Info22>{info.info22}</Info22>
        <Info23>{info.info23}</Info23>
        <Info24>{info.info24}</Info24>
        <Info25>{info.info25}</Info25>
        <Info26>{info.info26}</Info26>
        <Info27>{info.info27}</Info27>
        <Info28>{info.info28}</Info28>
        <Info29>{info.info29}</Info29>
        <Info30>{info.info30}</Info30>
        <Info31>{info.info31}</Info31>
        <Info32>{info.info32}</Info32>
        <Info33>{info.info33}</Info33>
        <Info34>{info.info34}</Info34>
        <Info35>{info.info35}</Info35>
        <Info36>{info.info36}</Info36>
        <Info37>{info.info37}</Info37>
        <Info38>{info.info38}</Info38>
        <Info39>{info.info39}</Info39>
        <Info40>{info.info40}</Info40>
        <Info41>{info.info41}</Info41>
        <Info42>{info.info42}</Info42>
        <Info43>{info.info43}</Info43>
        <Info44>{info.info44}</Info44>
        <Info45>{info.info45}</Info45>
        <Info46>{info.info46}</Info46>
        <Info47>{info.info47}</Info47>
        <Info48>{info.info48}</Info48>
        <Info49>{info.info49}</Info49>
        <Info50>{info.info50}</Info50>
        <Info51>{info.info51}</Info51>
        <Info52>{info.info52}</Info52>
        <Info53>{info.info53}</Info53>
        <Info54>{info.info54}</Info54>
        <Info55>{info.info55}</Info55>
        <Info56>{info.info56}</Info56>
        <Info57>{info.info57}</Info57>
        <Info58>{info.info58}</Info58>
        <Info59>{info.info59}</Info59>
        <Info60>{info.info60}</Info60>
        <Info61>{info.info61}</Info61>
        <Info62>{info.info62}</Info62>
        <Info63>{info.info63}</Info63>
        <Info64>{info.info64}</Info64>
        <Info65>{info.info65}</Info65>
        <Info66>{info.info66}</Info66>
        <Info67>{info.info67}</Info67>
        <Info68>{info.info68}</Info68>
        <Info69>{info.info69}</Info69>
        <Info70>{info.info70}</Info70>
        <Info71>{info.info71}</Info71>
        <Info72>{info.info72}</Info72>
        <Info73>{info.info73}</Info73>
        <Info74>{info.info74}</Info74>
        <Info75>{info.info75}</Info75>
        <Info76>{info.info76}</Info76>
        <Info77>{info.info77}</Info77>
        <Info78>{info.info78}</Info78>
        <Info79>{info.info79}</Info79>
        <Info80>{info.info80}</Info80>
        <Info81>{info.info81}</Info81>
        <Info82>{info.info82}</Info82>
        <Info83>{info.info83}</Info83>
        <Info84>{info.info84}</Info84>
        <Info85>{info.info85}</Info85>
        <Info86>{info.info86}</Info86>
        <Info87>{info.info87}</Info87>
        <Info88>{info.info88}</Info88>
        <Info89>{info.info89}</Info89>
        <Info90>{info.info90}</Info90>
        <Info91>{info.info91}</Info91>
        <Info92>{info.info92}</Info92>
        <Info93>{info.info93}</Info93>
        <Info94>{info.info94}</Info94>
        <Info95>{info.info95}</Info95>
        <Info96>{info.info96}</Info96>
        <Info97>{info.info97}</Info97>
        <Info98>{info.info98}</Info98>
        <Info99>{info.info99}</Info99>
        <Info100>{info.info100}</Info100>
      </DivInfo>
    </Container>
  );
};

export default Profile;
