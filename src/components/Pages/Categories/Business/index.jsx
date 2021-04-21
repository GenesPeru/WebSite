import React from 'react';
import { Title, Box, Img } from './styles';
import Button from '@src/components/Button';

export default ({ name, image }) => (
  <>
    <Box>
      <Img src={image} alt={name} />
      <Title>{name}</Title>
      <Button>acceder</Button>
    </Box>
  </>
);
