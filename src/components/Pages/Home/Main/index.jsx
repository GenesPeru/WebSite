import React from 'react';
import { Title, Svg, Main, Container, Buttons } from './styles';
import Block from '@img/TwoPerson-Block.svg';
import Button from '@components/Button';

export default () => (
  <Main className='animate__animated animate__bounceInRight'>
    <Svg src={Block} alt='Dos personas en un campo sosteniendo bloques' />
    <Container>
      <Title>Gremio Nacional De Emprendimiento Sostenible del Perú</Title>

      <Buttons>
        <Button primary>Donar</Button>
        <Button>Unirse</Button>
      </Buttons>
    </Container>
  </Main>
);
