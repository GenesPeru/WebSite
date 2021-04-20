import React from 'react';
import { Image, Box, Card, Name } from './styles';
export default ({ name, image }) => (
  <Box>
    <Card>
      <Image src={image} alt={name} />
      <Name>{name}</Name>
    </Card>
  </Box>
);
