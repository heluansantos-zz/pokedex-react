import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { fireEvent, render } from '@testing-library/react';

import PokeCard from '../../components/PokeCard';
import IPokeCard from '../../components/PokeCard/interface';

import AppProvider from '../../hooks';

describe('PokeCard Component', () => {
  const pokeCardProps: IPokeCard = {
    router: 'profile/bulbasaur',
    className: 'pokecard',
    history: {},
    id: 0,
    name: 'bulbasaur',
    abilities: [],
    base_experience: 0,
    forms: [],
    game_indices: [],
    height: 0,
    held_items: [],
    is_default: true,
    location_area_encounters: '',
    moves: [],
    order: 0,
    species: {},
    sprites: {},
    stats: [],
    types: [],
    weight: 0,
  };

  it('Should initialize PokeCard Component', () => {
    const wrapper = render(
      <AppProvider>
        <PokeCard {...pokeCardProps} />
      </AppProvider>,
    );

    expect(wrapper).toBeDefined();
  });

  it('Should render full PokeCard ', () => {
    const mockType = [
      {
        slot: 1,
        type: { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' },
      },
    ];

    const mockSprites = {
      other: {
        'official-artwork': {
          front_default: '',
        },
      },
    };

    const wrapper = render(
      <AppProvider>
        <PokeCard {...pokeCardProps} types={mockType} sprites={mockSprites} />
      </AppProvider>,
    );

    expect(wrapper.getByText('bulbasaur')).toBeDefined();
    expect(wrapper.getByAltText('bulbasaur')).toBeDefined();
  });

  it('Should back to home page', () => {
    const history = createMemoryHistory();
    const mockPush = jest.spyOn(history, 'push');

    const wrapper = render(
      <AppProvider>
        <Router history={history}>
          <PokeCard {...pokeCardProps} />
        </Router>
      </AppProvider>,
    );

    const container = wrapper.container.getElementsByClassName('pokecard')[0];

    fireEvent.click(container);
    expect(mockPush).toHaveBeenLastCalledWith(
      pokeCardProps.router,
      pokeCardProps,
    );
  });
});
