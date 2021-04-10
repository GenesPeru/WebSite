import React from 'react';
import { Section, Box, Title, Text } from './styles';

export default () => (
  <Section>
    <Box>
      <Title>Sobre el gremio</Title>
      <Text>
        <i className='fas fa-phone-alt'></i> 924 087 832
      </Text>
      <Text>
        <i className='fas fa-envelope'></i> VoluntariadoGenes@gmail.com
      </Text>
      <Text>
        <i className='fas fa-map-marker-alt'></i> Miraflores, Lima - Perú
      </Text>
    </Box>
    <Box>
      <Title>Proyectos</Title>
      <Text>Ayuda social</Text>
      <Text>Proyecyos sostenibles</Text>
      <Text>Educacion</Text>
    </Box>
    <Box>
      <Title>Voluntariado</Title>
      <Text>Universidades</Text>
      <Text>Colegios</Text>
    </Box>
  </Section>
);
