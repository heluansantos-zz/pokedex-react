import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px;
`;

export const Ablities = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: capitalize;

  .small {
    font-size: 12px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 19px;
  color: #747476;
  margin-bottom: 20px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const ParentLabel = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #62b957;
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const Label = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: #17171b;
  width: 102px;
`;

export const Value = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: #747476;
  text-transform: capitalize;
`;
