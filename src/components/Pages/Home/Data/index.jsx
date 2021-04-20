import React from 'react';
import { Section, Cards, Number, Title, Card, Img } from './styles';
import Box from '@img/Box.svg';
import Hands from '@img/Hands.svg';
import People from '@img/People.svg';

export default () => (
  <Section>
    <Cards>
      <Card>
        <Img src={Hands} alt='imagen de manos entrecruzadas' />
        <Number>+200</Number>
        <Title>Agremiados</Title>
      </Card>
      <Card>
        <Img src={People} alt='imagen de un equipo' />
        <Number>+100</Number>
        <Title>Voluntarios</Title>
      </Card>
      <Card>
        <Img src={Box} alt='imagen de una caja de ideas' />
        <Number>+100</Number>
        <Title>Proyectos</Title>
      </Card>
    </Cards>
  </Section>
);
