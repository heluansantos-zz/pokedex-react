import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../../components/Input';
import Home from '../../pages/Home';

import AppProvider from '../../hooks';

describe('Home Page', () => {
  it('Should initialize Home Page', () => {
    const wrapper = render(
      <AppProvider>
        <Home />
      </AppProvider>,
    );

    expect(wrapper).toBeDefined();
  });

  it('should be class name', async () => {
    const { getByPlaceholderText } = render(
      <AppProvider>
        <Home />
      </AppProvider>,
    );

    const field = getByPlaceholderText('What Pokémon are you looking for?');

    fireEvent.change(field, { target: { value: 'containerPokemons' } });

    expect(
      field.getElementsByClassName('containerPokemons'),
    ).toBeInTheDocument();
  });

  it('should be search input', async () => {
    const { getByPlaceholderText } = render(
      <AppProvider>
        <Home />
      </AppProvider>,
    );

    const field = getByPlaceholderText('What Pokémon are you looking for?');

    fireEvent.change(field, { target: { value: 'a' } });

    expect(screen.queryByText('a')).toBeInTheDocument();
  });

  it('should be onSearchPokemon function return empty', async () => {
    const { getByPlaceholderText, getAllByText } = render(
      <AppProvider>
        <Home />
      </AppProvider>,
    );

    const field = getByPlaceholderText('What Pokémon are you looking for?');

    fireEvent.change(field, { target: { value: 0 } });

    expect(getAllByText(0)).toBeInTheDocument();
  });

  it('Class Home Page', () => {
    render(<Home />);

    expect(screen.queryByText('containerPokemons')).toBeInTheDocument();
    screen.getByRole('textbox');
  });

  it('Input Home Page', () => {});
});
