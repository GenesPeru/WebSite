import styled, { css } from 'styled-components';
export const Container = styled.div`
  display: flex;
  overflow-x: auto;
  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }

  /* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }

  /* Cambiamos el fondo cuando esté en active */
  ::-webkit-scrollbar-thumb:active {
    background-color: #999999;
  }
`;
