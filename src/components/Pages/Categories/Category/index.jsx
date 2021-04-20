import React from 'react';
import { Box, Name, Img } from './styles';

export default ({ name, image }) => (
  <>
    <Box>
      <Img src={image} alt={name} />
      <Name>{name}</Name>
    </Box>
  </>
);
