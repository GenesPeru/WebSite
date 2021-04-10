import React from 'react';
import { Image, Box, Card, Name } from './styles';
export default ({ name, image }) => (
  <Box>
    <Card>
      <Image src={image} alt='logo1' />
      <Name>{name}</Name>
    </Card>
  </Box>
);
