import styled from 'styled-components';

export const Section = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 48em) {
    height: 70vh;
    min-height: 700px;
  }
`;

export const Title = styled.h2`
  font-size: 50px;
  text-align: center;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(
    90deg,
    #65bd60 0%,
    #5ac1a8 25%,
    #3ec6ed 50%
  );

  padding-top: 30px;
  padding-bottom: 30px;
  @media screen and (min-width: 48em) {
    font-size: 65px;
  }
`;

export const Description = styled.p`
  margin: 0 auto;
  margin-bottom: 50px;
  text-align: center;
  width: 80%;
  font-size: 23px;
  line-height: 37px;
`;

export const BoxButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonLink = styled.a`
  margin: 30px auto;
  display: block;
  font-size: 20px;
  width: 177px;
  height: 50px;
  background: #fff;
  border: 1.6878px solid #36558f;
  border-radius: 42.1951px;
  color: #36558f;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.primary &&
    css`
      background: #36558f;
      color: #fff;
      border: none;
      :box-shadow: 0px 1.6878px 3.37561px rgba(0, 0, 0, 0.25);
    `}
  @media screen and (min-width: 48em) {
    font-size: 23px;
    width: 185px;
    height: 52px;
    margin: 10px;
  }
`;
