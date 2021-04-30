import React from 'react';
import Loader from '@img/Loader.gif';
import { Container } from './styles';

export default ({ content }) => (
  <Container content={content}>
    <img src={Loader} alt='Loader' />
  </Container>
);
