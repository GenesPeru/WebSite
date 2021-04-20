import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: color 0.4s ease;
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 25vh;
  background-color: white;
`;

export const Img = styled.img`
  display: flex;
  margin: 0 auto;
`;

export const Categories = styled.ul`
  padding: 0;
  margin: 0;
  height: 75vh;
  background-color: #84fab0;
`;

export const Category = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25%;
  box-shadow: inset 0 0 0 1px #fff;
`;

export const Anchor = styled(Link)`
  color: #323131;
`;
