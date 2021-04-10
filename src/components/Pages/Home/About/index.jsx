import React from 'react';
import { Section, Title, Description } from './styles';
import Button from '@components/Button';

export default () => (
  <>
    <Section>
      <Title>¿Quienes somos?</Title>
      <Description>
        Somos una plataforma social sin fines de lucro que une a personas
        naturales y juridicas con emprendimientos sostenibles.
      </Description>
      <Button primary>Leer más</Button>
    </Section>
  </>
);