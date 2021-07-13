import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const ContainerFrameYoutube = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 60vh;
  @media screen and (min-width: 64em) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const BoxFrameYoutube = styled.div`
  width: 100%;
  height: 100%;
`;

export const FrameYoutube = styled.iframe`
  width: 100%;
  max-width: 560px;
  margin: 20px auto;
  height: 315px;
  display: flex;
`;
