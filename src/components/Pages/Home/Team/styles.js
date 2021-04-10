import styled from 'styled-components';

export const Section = styled.section`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h4`
  font-size: 40px;
  text-align: center;
  @media screen and (min-width: 48em) {
    font-size: 55px;
  }
`;
