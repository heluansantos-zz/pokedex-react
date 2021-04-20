import styled from 'styled-components';

import { IPokeCardProps } from './interface';

export const Container = styled.div`
  display: flex;
  background-color: ${(props: IPokeCardProps) => props.backgroundColor};
  box-shadow: 8px 10px 14px
    ${(props: IPokeCardProps) => `${props.backgroundColor}80`};
  border-radius: 10px;
  max-height: 115px;
  min-height: 115px;
  min-width: 203px;
  flex: 1;
  position: relative;
  margin: 0px 10px 30px 10px;
  cursor: pointer;

  @media (min-width: 490px) {
    min-width: 300px;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const PatternBg = styled.img`
  position: absolute;
  top: 5px;
  left: 25%;
  width: 74px;
  height: 32px;
`;

export const PokeballBg = styled.img`
  position: absolute;
  right: 0;
  height: 114px;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  padding-left: 20px;
`;

export const PokemonId = styled.p`
  color: rgba(23, 23, 27, 0.6);
  font-weight: bold;
  font-size: 12px;
`;

export const PokemonName = styled.p`
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
  color: #ffffff;
  text-transform: capitalize;
  margin-bottom: 5px;
`;

export const PokemonImage = styled.img`
  z-index: 1;
  width: 130px;
  position: absolute;
  right: 0;
`;
