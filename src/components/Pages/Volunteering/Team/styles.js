import styled from 'styled-components';

export const Box = styled.div`
  background: #f1f3f7;
  width: 100%;
  height: 150px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  :hover {
    background-color: #36558f;

    border-radius: 28.534px;
  }
  :hover h2,
  :hover p {
    color: white;
  }
`;

export const TitleTeam = styled.h2`
  font-size: 30px;
  color: #36558f;
`;

export const Semester = styled.p`
  padding-top: 10px;
  font-size: 23px;
  color: black;
`;
