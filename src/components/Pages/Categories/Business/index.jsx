import React from 'react';
import { Title, Box, Img, ButtonLink } from './styles';
import Button from '@src/components/Button';

export default ({ name, image, link }) => (
  <>
    <Box>
      <Img src={image} alt={name} />
      <Title>{name}</Title>
      <ButtonLink href={link} target='_blank'>
        acceder
      </ButtonLink>
    </Box>
  </>
);
