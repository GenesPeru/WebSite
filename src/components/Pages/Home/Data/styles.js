import styled from 'styled-components';

export const Section = styled.section`
  height: 70vh;
  margin: auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  @media screen and (min-width: 48em) {
    margin-top: 0;
    display: block;
    height: auto;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (min-width: 48em) {
    height: 450px;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Card = styled.div`
  margin-bottom: 50px;
`;

export const Number = styled.p`
  font-size: 50px;
  color: #36558f;
  text-align: center;
  margin: 0;
  @media screen and (min-width: 48em) {
    font-size: 70px;
  }
`;

export const Title = styled.h4`
  font-size: 20px;
  text-align: center;
  margin: 0;
  @media screen and (min-width: 48em) {
    font-size: 30px;
  }
`;

export const Img = styled.img`
  display: flex;
  margin: 0 auto;
  height: 150px;
  @media screen and (min-width: 48em) {
    height: 120px;
  }
`;
