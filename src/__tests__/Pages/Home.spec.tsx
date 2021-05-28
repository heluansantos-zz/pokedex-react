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

  it('Class Home Page', () => {
    render(<Home />);

    expect(screen.queryByText('containerPokemons')).toBeInTheDocument();
    screen.getByRole('textbox');
  });

  it('Input Home Page', () => {});
});
