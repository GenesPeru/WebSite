import React from 'react';
import { Box, Card, Photo, Rol, Name } from './styles';

export default ({ name, role, lastName, image }) => (
  <>
    <Box>
      <Card>
        <Photo src={image} alt={role} loading='lazy' />
        <Name>
          {name}
          {lastName}
        </Name>
        <Rol>{role}</Rol>
      </Card>
    </Box>
  </>
);
