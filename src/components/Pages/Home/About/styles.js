import styled, { css } from 'styled-components';

export const Section = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 50px;
  text-align: center;
  color: linear-gradient(90deg, #65bd60 0%, #5ac1a8 25%, #3ec6ed 50%);
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const Description = styled.p`
  margin: 0 auto;
  margin-bottom: 50px;
  text-align: center;
  width: 90%;
  font-size: 30px;
  line-height: 40px;
`;
