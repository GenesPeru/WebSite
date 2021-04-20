import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { Main, Box, Img, Categories, Category, Anchor } from './styles';
import Logo from '@img/Logo.svg';

import { Context } from '@src/Context';

export default () => {
  const { bar, handleBar } = useContext(Context);

  if (!bar) {
    return null;
  } else {
    return ReactDOM.createPortal(
      <Main
        className={
          bar
            ? 'animate__animated animate__fadeInLeft'
            : 'animate__animated animate__fadeInRight'
        }
      >
        <Box>
          <Img src={Logo} alt='Logo de Genes Perú' onClick={handleBar} />
        </Box>
        <Categories>
          <Category>
            <Anchor to='/' onClick={handleBar}>
              {' '}
              Inicio
            </Anchor>
          </Category>
          <Category>
            <Anchor to='/categorias' onClick={handleBar}>
              Agremiados
            </Anchor>
          </Category>
          <Category>
            <Anchor to='/blog' onClick={handleBar}>
              Blog
            </Anchor>
          </Category>
          <Category>
            <Anchor to='/voluntariado' onClick={handleBar}>
              Voluntariado
            </Anchor>
          </Category>
        </Categories>
      </Main>,
      document.getElementById('bar')
    );
  }
};
