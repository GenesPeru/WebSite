import React from 'react';
import Mision from '@img/Mision.svg';
import Vision from '@img/Vision.svg';
import {
  Section,
  Description,
  Content2,
  Title,
  Img,
  Text,
  Content,
} from './styles';

export default () => (
  <>
    <Section>
      <Content>
        <Description>
          <Title>Mision</Title>
          <Text>
            Somos una plataforma social sin fines de lucro que une a personas
            naturales y juridicas con emprendimientos sostenibles.
          </Text>
        </Description>
        <Img src={Mision} alt='' />
      </Content>
      <Content2>
        <Description>
          <Title>Vision</Title>
          <Text>
            Genes Perú existe para agrupar y generar sinergias entre
            emprendedoras y emprendedores para el crecimiento conjunto.
          </Text>
        </Description>
        <Img src={Vision} alt='' />
      </Content2>
    </Section>
  </>
);
