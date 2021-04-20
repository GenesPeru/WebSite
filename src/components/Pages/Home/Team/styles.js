import styled from 'styled-components';

export const Section = styled.section`
  height: 60vh;
  min-height: 550px;
  width: 100%;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 48em) {
    height: 70vh;
    margin-bottom: 0;
  }
`;

export const Title = styled.h4`
  font-size: 40px;
  text-align: center;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
    90deg,
    rgba(101, 189, 96, 0.8) 0%,
    rgba(0, 201, 255, 0.8) 100%
  );

  @media screen and (min-width: 48em) {
    font-size: 60px;
  }
`;
