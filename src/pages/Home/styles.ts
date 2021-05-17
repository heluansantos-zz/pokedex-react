import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 40px 0 40px;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -10px;
  align-content: flex-start;
`;

export const Header = styled.div`
  margin-bottom: 45px;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 10px;
  color: #ddd;
`;

export const Subtitle = styled.p`
  line-height: 19px;
  color: #747476;
  display: block;
  margin-bottom: 20px;
`;

export const PokeballBackground = styled.img`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`;
