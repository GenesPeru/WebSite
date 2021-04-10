import React from 'react';
import { Section, Cards, Number, Title, Card, Img } from './styles';
import Box from '@img/Box.svg';
import Hands from '@img/Hands.svg';
import People from '@img/People.svg';

export default () => (
  <Section className='pure-g'>
    <Cards>
      <Card className='pure-u-1-2'>
        <Img src={Hands} alt='' />
        <Number>+200</Number>
        <Title>Agremiados</Title>
      </Card>
      <Card className='pure-u-1-2'>
        <Img src={People} alt='' />
        <Number>+100</Number>
        <Title>Voluntarios</Title>
      </Card>
      <Card className='pure-u-1'>
        <Img src={Box} alt='' />
        <Number>+100</Number>
        <Title>Proyectos</Title>
      </Card>
    </Cards>
  </Section>
);
