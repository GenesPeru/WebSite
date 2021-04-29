import React, { useContext } from 'react';
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
          <LogoMovil
            className='animate__animated animate__bounceInLeft'
            src={Logo}
            alt='Logo de Genes Perú'
          />
        </>
      ) : (
        <NavDesktop>
          <LogoBox>
            <LogoDesktop src={Logo} alt='Logo de Genes Perú' />
          </LogoBox>

          <Categories>
            <Category>
              <Anchor to='/'>Inicio</Anchor>
            </Category>

            <Category>
              <Anchor to='/categorias'>Agremiados</Anchor>
            </Category>

            <Category>
              <Anchor to='/blog'>Blog</Anchor>
            </Category>

            <Category>
              <Anchor to='/voluntariado'>Voluntariado</Anchor>
            </Category>
          </Categories>
        </NavDesktop>
      )}
    </header>
  );
};
