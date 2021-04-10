import React, { useContext, useState } from 'react';
import {
  LogoMovil,
  NavMovil,
  NavDesktop,
  Categories,
  LogoDesktop,
  Category,
  Anchor,
  LogoBox,
} from './styles';
import Logo from '@img/Logo.svg';
import { Context } from '@src/Context';

const barStyle = {
  fontSize: '35px',
  position: 'absolute',
  right: '45px',
  top: '45px',
};

export default () => {
  const { handleBar, window } = useContext(Context);
  console.log(window);
  return (
    <header>
      {window == 'movil' ? (
        <>
          <NavMovil>
            <i className='fas fa-bars' style={barStyle} onClick={handleBar}></i>
          </NavMovil>
          <LogoMovil src={Logo} />
        </>
      ) : (
        <NavDesktop>
          <LogoBox>
            <LogoDesktop src={Logo} alt='' />
          </LogoBox>

          <Categories>
            <Anchor to='/'>
              <Category>Inicio</Category>
            </Anchor>
            <Anchor to='/categorias'>
              <Category>Agremiados</Category>
            </Anchor>
            <Anchor to='/blog'>
              <Category>Blog</Category>
            </Anchor>
            <Anchor to='/voluntariado'>
              <Category>Voluntariado</Category>
            </Anchor>
          </Categories>
        </NavDesktop>
      )}
    </header>
  );
};
