import styled from 'styled-components';

export const Section = styled.section`
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 48em) {
    flex-direction: row;
    height: 50vh;
    height: 500px;
  }
`;

export const Box = styled.div`
  margin: auto 30px;
  @media screen and (min-width: 48em) {
    margin: auto;
  }
`;

export const Title = styled.h5`
  margin: 10px 0;
  font-size: 28px;
`;

export const Text = styled.p`
  font-size: 18px;
  color: #2b2b2b;
  padding: 5px 0;
`;
