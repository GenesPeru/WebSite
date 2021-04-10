import styled from 'styled-components';

export const Main = styled.main`
  height: 60vh;
  width: 100%;
  @media screen and (min-width: 48em) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
  }
`;

export const Container = styled.div`
  @media screen and (min-width: 48em) {
    width: 60vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  width: 80%;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 10px;
  padding: 0 20px;
  @media screen and (min-width: 35.5em) {
    font-size: 35px;
  }

  @media screen and (min-width: 48em) {
    font-size: 40px;
    width: 80%;
  }
`;

export const Svg = styled.img`
  display: flex;
  width: 270px;
  margin: 0 auto;
  @media screen and (min-width: 35.5em) {
    width: 330px;
  }
  @media screen and (min-width: 48em) {
    max-height: 500px;
    width: 45vw;
    padding-left: 40px;
  }
`;

export const Buttons = styled.div`
  padding-top: 30px;
  @media screen and (min-width: 48em) {
    padding-top: 0;
    display: flex;
    width: 80%;
    margin: 0 auto;
  }
`;
