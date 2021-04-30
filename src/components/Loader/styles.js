import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 50vh;
  ${(props) =>
    !props.content &&
    css`
      width: 100%;
      height: 100vh;
    `}
`;
