import React from 'react';
import { Box, Name, Img } from './styles';

export default ({ name, image }) => (
  <>
    <Box>
      <Img src={image} alt='logo1' />
      <Name>{name}</Name>
    </Box>
  </>
);
