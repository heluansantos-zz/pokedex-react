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
} from './styles';

const Profile: React.FC<any> = (props) => {
  const { species, abilities, base_experience } = props;
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
    </Container>
  );
};

export default Profile;
