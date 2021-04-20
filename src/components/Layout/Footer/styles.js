import styled from 'styled-components';

export const Footer = styled.footer`
  height: 45vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 64em) {
    flex-direction: row;
    height: 20vh;
    min-height: 150px;
  }
`;

export const BoxImg = styled.div`
  width: 100%;
  @media screen and (min-width: 64em) {
    width: 33.333%;
  }
`;

export const Img = styled.img`
  display: flex;
  margin: 0 auto;
  @media screen and (min-width: 48em) {
    padding: 10px 80px;
    max-width: 370px;
  }
`;

export const BoxCopy = styled.div`
  @media screen and (min-width: 64em) {
    width: 33.333%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Copy = styled.p`
  text-align: center;
  font-size: 25px;
  margin: 5px 0;
  margin-top: 20px;
  color: #2b2b2b;
`;

export const Rights = styled.p`
  text-align: center;
  font-size: 20px;
  margin: 7px 0;
  margin-bottom: 35px;
  color: #2c2c2c;
`;

export const Network = styled.ul`
  margin: 0;
  padding: 0 50px;
  display: flex;
  justify-content: space-evenly;
  @media screen and (min-width: 64em) {
    width: 33.333%;
    margin: auto;
  }
`;

export const Social = styled.li`
  list-style: none;
`;
