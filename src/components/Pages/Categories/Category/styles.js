import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  :hover {
    background-color: #36558f;
    border-radius: 28.534px;
  }
  :hover p {
    color: white;
  }
`;

export const Img = styled.img`
  height: 100px;
  ${Box}:hover & {
    filter: invert(80%) url(#fff);
  }
`;

export const Name = styled.p`
  text-align: center;
  padding-top: 20px;
  width: 70%;
  color: black;
  font-size: 18px;
`;
