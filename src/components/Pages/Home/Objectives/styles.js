import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  min-height: 950px;
`;

export const Content = styled.div`
  width: 100%;
  @media screen and (min-width: 48em) {
    display: flex;
    height: 45vh;
    justify-content: center;
    align-items: center;
    min-height: 500px;
  }
`;

export const Description = styled.div`
  @media screen and (min-width: 48em) {
    height: fit-content;
    width: 50vw;
  }
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 60px;
  margin: 25px 0;
  @media screen and (min-width: 48em) {
    margin-top: 0px;
  }
`;

export const Img = styled.img`
  display: flex;
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  @media screen and (min-width: 48em) {
    width: 50%;
    height: fit-content;
    max-width: 500px;
  }
`;

export const Text = styled.p`
  width: 80%;
  text-align: center;
  margin: 0 auto;
  font-size: 23px;
  line-height: 40px;
  @media screen and (min-width: 48em) {
    text-align: start;
  }
`;
