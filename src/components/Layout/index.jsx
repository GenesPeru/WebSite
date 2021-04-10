import React, { useContext } from 'react';
import Bar from './Bar';
import Nav from './Nav';
import Footer from './Footer';
import { Context } from '@src/Context';

export default ({ children }) => {
  return (
    <>
      <Bar />
      <Nav />
      {children}
      <Footer />
    </>
  );
};
