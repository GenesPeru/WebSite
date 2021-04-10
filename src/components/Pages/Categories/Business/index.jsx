import React from 'react';
import { Box, Img, Title, Description, Button } from './styles';

export default ({ name, image = 'das' }) => (
  <>
    <Box>
      <Img src={`http://localhost:1337${image}`} alt='logo' />
      <Title>{name}</Title>
      <Button>acceder</Button>
    </Box>
  </>
);
