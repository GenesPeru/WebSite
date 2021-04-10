import styled from 'styled-components';

export const Box = styled.div`
  min-width: 100vw;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 48em) {
    min-width: 50vw;
  }
  @media screen and (min-width: 64em) {
    min-width: 33.333vw;
  }
`;

export const Card = styled.div`
  padding: 20px 0;
  width: 70%;
  background: #fff;
  @media screen and (min-width: 35.5em) {
    max-width: 380px;
  }
  @media screen and (min-width: 48em) {
    width: 90%;
  }
`;
export const Image = styled.img`
  display: flex;
  width: 80%;
  margin: 0 auto;
  border-radius: 14px;
  @media screen and (min-width: 48em) {
    height: 320px;
  }
`;

export const Name = styled.p`
  padding-top: 20px;
  font-size: 25px;
  text-align: center;
`;
