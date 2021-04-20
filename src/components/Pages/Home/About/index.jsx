import React from 'react';
import { Section, Title, Description, BoxButton } from './styles';
import Button from '@components/Button';

export default () => (
  <>
    <Section>
      <Title>¿Quienes somos?</Title>
      <Description>
        Somos una plataforma social sin fines de lucro que une a personas
        naturales y jurídicas con emprendimientos sostenibles a nivel nacional,
        siendo pioneros en Latinoaerica.
      </Description>
      <BoxButton>
        <Button primary>Leer más</Button>
      </BoxButton>
    </Section>
  </>
);
