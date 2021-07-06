import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
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
  zIndex: '999',
};

export default () => {
  const { handleBar, window, isSelectBar, handleSelectBar } =
    useContext(Context);

  const fadeBar = () => {
    handleSelectBar();
    if (!isSelectBar) {
      handleBar();
    } else {
      setTimeout(() => handleBar(), 300);
    }
  };

  return (
    <header>
      {window == 'movil' ? (
        <>
          <NavMovil>
            <FontAwesomeIcon icon={faBars} style={barStyle} onClick={fadeBar} />
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
              <Anchor to='/conferencia'>Conferencias</Anchor>
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
