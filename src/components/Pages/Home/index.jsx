import React from 'react';
import Main from './Main';
import About from './About';
import Objectives from './Objectives';
import Data from './Data';
import Team from './Team';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

export default () => {
  return (
    <>
      <Helmet>
        <title>Home | Genes Perú</title>
        <meta name='description' content='Ong' />
      </Helmet>
      <Main />
      <About />
      <Objectives />
      <Data />
      <Team />
      <Footer />
    </>
  );
};
