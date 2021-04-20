import React, { useContext } from 'react';
import Mision from '@img/Mision.svg';
import Vision from '@img/Vision.svg';
import { Context } from '@src/Context';
import {
  Section,
  Description,
  Content2,
  Title,
  Img,
  Text,
  Content,
} from './styles';

export default () => {
  const { handleBar, window } = useContext(Context);
  return (
    <>
      <Section>
        <Content>
          <Description>
            <Title>Mision</Title>
            {window == 'movil' ? (
              <Text>
                Genes Perú existe para agrupar y generar sinergias entre
                emprendedoras y emprendores.
              </Text>
            ) : (
              <Text>
                Genes Perú existe para agrupar y generar sinergias entre
                emprendedoras y emprendores para el crecimiento conjunto,
                contribuyendo al desarrollo territorial sostenible a tráves de
                la puesta en práctica de la filosofía del buen vivir.
              </Text>
            )}
          </Description>
          <Img src={Mision} alt='' />
        </Content>
        <Content>
          {window == 'movil' ? (
            <>
              <Description>
                <Title>Vision</Title>
                <Text>
                  Queremos ser líderes locales y referentes globales en
                  sostenibilidad.
                </Text>
              </Description>
              <Img src={Vision} alt='' />
            </>
          ) : (
            <>
              <Img src={Vision} alt='' />
              <Description>
                <Title>Vision</Title>
                <Text>
                  Queremos ser líderes locales y referentes globales en
                  sostenibilidad, conformada por agentes de cambio felices y
                  consolidados que crecemos juntos generando beneficios de
                  manera equitativa, aportando al desarrollo territorial
                  sostenible y a la construcción de un mundo mejor.
                </Text>
              </Description>
            </>
          )}
        </Content>
      </Section>
    </>
  );
};
