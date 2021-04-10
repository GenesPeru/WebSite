import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  margin: 30px auto;
  display: block;
  font-size: 20px;
  width: 177px;
  height: 50px;
  background: #fff;
  border: 1.6878px solid #36558f;
  border-radius: 42.1951px;
  color: #36558f;
  ${(props) =>
    props.primary &&
    css`
      background: #36558f;
      color: #fff;
      border: none;
      :box-shadow: 0px 1.6878px 3.37561px rgba(0, 0, 0, 0.25);
    `}
  @media screen and (min-width: 64em) {
    font-size: 25px;
    width: 190px;
    height: 60px;
  }
`;
