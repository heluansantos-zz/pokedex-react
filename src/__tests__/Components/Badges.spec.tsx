import React from 'react';
import { shallow } from 'enzyme';
import { renderHook } from '@testing-library/react-hooks';

import Badges from '../../components/Badges';
import IBadges from '../../components/Badges/interface';

import { PokemonCreateContext } from '../../hooks/Pokemon';
import AppProvider from '../../hooks';

describe('Badges Component', () => {
  const hook = renderHook(() => PokemonCreateContext(), {
    wrapper: AppProvider,
  });
  const badgesProps: IBadges = {
    types: [],
    pokeTypes: hook.result.current.PokeTypes,
  };

  it('Should initialize Badges Component', () => {
    const wrapper = shallow(<Badges {...badgesProps} />);

    expect(wrapper).toBeDefined();
  });

  it('Should not render badge image an empty array', () => {
    const wrapper = shallow(<Badges {...badgesProps} />);

    expect(wrapper.find('img')).toHaveLength(0);
  });

  it('Should render badge image', () => {
    const mockType = [
      {
        slot: 1,
        type: { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' },
      },
    ];

    const wrapper = shallow(<Badges {...badgesProps} types={mockType} />);

    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('img').prop('alt')).toEqual('grass badge');
  });
});
