import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  width: 70%;
  height: 350px;
  box-shadow: 0px 0.862806px 3.45122px rgba(0, 0, 0, 0.25);
`;

export const Img = styled.img`
  height: 70%;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const Description = styled.p`
  text-align: center;
`;

export const Button = styled.button`
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
