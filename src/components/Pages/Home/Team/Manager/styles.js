import styled from 'styled-components';
export const Box = styled.div`
  min-width: 100vw;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 48em) {
    min-width: 50vw;
  }
  @media screen and (min-width: 64em) {
    min-width: 33.333vw;
  }
`;

export const Card = styled.div`
  padding: 20px 0;
  width: 60%;
  background: #fff;
  box-shadow: 0px 2.70037px 6.75093px rgba(0, 0, 0, 0.45);
  border-radius: 3.37547px;
`;

export const Photo = styled.img`
  display: flex;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const Name = styled.h5`
  font-size: 25px;
  margin: 5px 0;
  text-align: center;
`;

export const Rol = styled.p`
  font-size: 18px;
  margin: 2px 0;
  text-align: center;
`;
