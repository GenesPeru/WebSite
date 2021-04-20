import React from 'react';
import LogoBlack from '@img/LogoBlack.svg';
import {
  Footer,
  BoxImg,
  Img,
  Copy,
  Rights,
  Network,
  Social,
  BoxCopy,
} from './styles';

const iconoStyle = {
  fontSize: '25px',
  color: '#585858',
};

export default () => (
  <Footer>
    <BoxImg>
      <Img src={LogoBlack} alt='Logo' />
    </BoxImg>

    <BoxCopy>
      <Copy>© Copyright 2021 Genes Perú</Copy>
      <Rights>All rights reserved</Rights>
    </BoxCopy>

    <Network>
      <Social>
        <i style={iconoStyle} className='fab fa-twitter'></i>
      </Social>
      <Social>
        <i style={iconoStyle} className='fab fa-facebook-f'></i>
      </Social>
      <Social>
        <i style={iconoStyle} className='fab fa-linkedin-in'></i>
      </Social>
      <Social>
        <i style={iconoStyle} className='fab fa-instagram'></i>
      </Social>
      <Social>
        <i style={iconoStyle} className='fab fa-youtube'></i>
      </Social>
    </Network>
  </Footer>
);
