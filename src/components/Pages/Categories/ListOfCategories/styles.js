import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 90vw;
  display: grid;
  margin: 0 auto;

  grid-template-columns: 1fr 1fr;
  @media screen and (min-width: 48em) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const LinkCategory = styled(Link)`
  width: 80%;
  align-self: center;
  justify-self: center;
`;
