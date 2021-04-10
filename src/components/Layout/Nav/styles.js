import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavMovil = styled.nav`
  position: relative;
  height: 10vh;
  width: 100%;
`;

export const LogoMovil = styled.img`
  display: flex;
  width: 200px;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const NavDesktop = styled.nav`
  display: flex;
`;

export const LogoBox = styled.div`
  width: 30vw;
  @media screen and (min-width: 64em) {
    width: 35vw;
  }
`;
export const LogoDesktop = styled.img`
  padding: 0 30px;
  margin: 0 auto;
  display: flex;
  max-height: 100px;
  @media screen and (min-width: 64em) {
    max-height: 120px;
    margin: 0;
    margin-left: 50px;
  }
`;

export const Categories = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 70vw;
  align-items: center;
  @media screen and (min-width: 64em) {
    width: 65vw;
  }
`;

export const Category = styled.li`
  font-size: 22px;
  @media screen and (min-width: 48em) {
    font-size: 26px;
  }
  @media screen and (min-width: 64em) {
    font-size: 30px;
  }
  @media screen and (min-width: 80em) {
    font-size: 35px;
  }
`;

export const Anchor = styled(Link)`
  color: #323131;
`;
