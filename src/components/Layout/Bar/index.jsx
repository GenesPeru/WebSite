import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { Main, Box, Img, Categories, Category, Anchor } from './styles';
import Logo from '@img/Logo.svg';
import { Context } from '@src/Context';

export default () => {
  const { bar, handleBar, isSelectBar, handleSelectBar } = useContext(Context);

  if (!bar) {
    return null;
  }

  const fadeBar = () => {
    handleSelectBar();
    if (!isSelectBar) {
      handleBar();
    } else {
      setTimeout(() => handleBar(), 300);
    }
  };

  return ReactDOM.createPortal(
    <Main
      className={
        isSelectBar
          ? 'animate__animated animate__fadeInLeft'
          : 'animate__animated animate__fadeOutLeft'
      }
    >
      <Box>
        <Img src={Logo} alt='Logo de Genes Perú' />
      </Box>
      <Categories>
        <Category>
          <Anchor to='/' onClick={fadeBar}>
            {' '}
            Inicio
          </Anchor>
        </Category>
        <Category>
          <Anchor to='/categorias' onClick={fadeBar}>
            Agremiados
          </Anchor>
        </Category>
        <Category>
          <Anchor to='/blog' onClick={fadeBar}>
            Blog
          </Anchor>
        </Category>
        <Category>
          <Anchor to='/voluntariado' onClick={fadeBar}>
            Voluntariado
          </Anchor>
        </Category>
      </Categories>
    </Main>,
    document.getElementById('bar')
  );
};
