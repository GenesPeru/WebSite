import React from 'react';
import ListOfCategories from './ListOfCategories';
import { Title } from './styles';
import { Helmet } from 'react-helmet';

export default () => {
  return (
    <>
      <Helmet>
        <title>Agremiados | Genes Perú</title>
        <meta name='description' content='Ong' />
      </Helmet>
      <main>
        <Title>Lineas de Acción</Title>
        <ListOfCategories />
      </main>
    </>
  );
};
