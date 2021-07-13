import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  width: 70%;
  height: 350px;
  box-shadow: 0px 0.862806px 3.45122px rgba(0, 0, 0, 0.25);
  align-items: center;
  max-width: 300px;
`;

export const Img = styled.img`
  height: 70%;
  margin-top: 10px;
  width: inherit;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const Description = styled.p`
  text-align: center;
`;

export const Button = styled.link`
  margin: 20px auto;
  display: block;
  font-size: 20px;
  width: 177px;
  height: 50px;
  background: #36558f;
  border: 1.6878px solid #36558f;
  border-radius: 8.62806px;
  color: #fff;
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
