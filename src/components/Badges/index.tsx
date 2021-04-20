import React from 'react';

import IBadges from './interface';

import { Container } from './styles';

const Badges: React.FC<IBadges> = ({ types, pokeTypes }) => {
  const getImage = (type: string) => {
    return pokeTypes[type].badgeIcon;
  };

  return (
    <Container>
      {types.map((item: any) => (
        <img
          key={item.id + item.type.name}
          src={getImage(item.type.name)}
          alt={`${item.type.name} badge`}
        />
      ))}
    </Container>
  );
};

export default Badges;
