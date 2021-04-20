import React from 'react';
import { Box, Img } from './styles';

export default ({ name, image = 'das' }) => (
  <>
    <Box>
      <Img src={image} alt={name} />
      <Title>{name}</Title>
      <Button>acceder</Button>
    </Box>
  </>
);
