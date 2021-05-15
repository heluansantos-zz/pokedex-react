import React from 'react';
import { render } from '@testing-library/react';

import Profile from '../../pages/Profile';
import IProfile from '../../pages/Profile/interface';

import AppProvider from '../../hooks';

describe('Profile Page', () => {
  window.scrollTo = jest.fn();

  const profileProps: IProfile = {
    location: {
      state: {
        types: [],
        sprites: {},
        id: 1,
        species: {},
      },
    },
  };

  it('Should initialize Profile Page', () => {
    const wrapper = render(
      <AppProvider>
        <Profile {...profileProps} />
      </AppProvider>,
    );

    expect(wrapper).toBeDefined();
  });
});
