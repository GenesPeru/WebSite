import React from 'react';
import ListOfTeams from './ListOfTeams';
import { Helmet } from 'react-helmet';

export default () => {
  return (
    <>
      <Helmet>
        <title>Voluntariado | Genes Perú</title>
        <meta name='description' content='Ong' />
      </Helmet>
      <ListOfTeams />
    </>
  );
};
