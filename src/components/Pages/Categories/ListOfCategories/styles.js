import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 90vw;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  @media screen and (min-width: 48em) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
