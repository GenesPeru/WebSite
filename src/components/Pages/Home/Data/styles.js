import styled, { css } from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-content: center;
  @media screen and (min-width: 48em) {
    display: flex;
    align-content: center;
    justify-content: center;
  }
`;

export const Cards = styled.div`
  @media screen and (min-width: 48em) {
    width: 80%;
  }
`;

export const Card = styled.div`
  margin-bottom: 50px;
`;

export const Number = styled.p`
  font-size: 70px;
  color: #36558f;
  text-align: center;
  margin: 0;
`;

export const Title = styled.h4`
  font-size: 30px;
  text-align: center;
  margin: 0;
`;

export const Img = styled.img`
  display: flex;
  margin: 0 auto;
  height: 150px;
`;
