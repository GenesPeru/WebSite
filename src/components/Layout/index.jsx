import React from 'react';
import Bar from './Bar';
import Nav from './Nav';
import Footer from './Footer';

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
