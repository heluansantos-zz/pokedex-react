import React from 'react';

import IInput from './interface';

import { Container, Image, Ipunt } from './styles';

const InputComponent: React.FC<IInput> = (props) => {
  return (
    <Container>
      <Image src={props.icon} alt="icon" />
      <Ipunt {...props} />
    </Container>
  );
};

export default InputComponent;
