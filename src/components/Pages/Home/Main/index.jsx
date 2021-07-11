import React from 'react';
import { Title, Svg, Main, Container, Buttons, ButtonLink } from './styles';
import Block from '@img/TwoPerson-Block.svg';
import Button from '@components/Button';

export default () => {
  const handleUploadImage = () => console.log(ev);

  return (
    <Main className='animate__animated animate__bounceInRight'>
      <Svg src={Block} alt='Dos personas en un campo sosteniendo bloques' />
      <Container>
        <Title>Gremio Nacional De Emprendimiento Sostenible del Perú</Title>

        <Buttons>
          <Button primary onClick='handleUploadImage()'>
            Donar
          </Button>

          <ButtonLink href='https://proa.pe/' target='_blank'>
            Unirse
          </ButtonLink>
        </Buttons>
      </Container>
    </Main>
  );
};
