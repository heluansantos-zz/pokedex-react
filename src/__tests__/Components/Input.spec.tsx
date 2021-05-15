import React from 'react';
import { shallow } from 'enzyme';

import Input from '../../components/Input';
import IInput from '../../components/Input/interface';

describe('Input Component', () => {
  const inputProps: IInput = {};

  it('Should initialize Input Component', () => {
    const wrapper = shallow(<Input {...inputProps} />);

    expect(wrapper).toBeDefined();
  });
});
