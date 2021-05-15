import React from 'react';
import { render } from '@testing-library/react';

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

  it('const Home Page', () => {
    const wrapper = render(
      <AppProvider>
        <Home />
      </AppProvider>,
    );

    expect(wrapper).toBeDefined();
  });
});
