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
        <a
          href='https://twitter.com/genesperu'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Twitter'
        >
          <i style={iconoStyle} className='fab fa-twitter'></i>
        </a>
      </Social>
      <Social>
        <a
          href='https://www.facebook.com/Genesperuoficial'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Facebook'
        >
          <i style={iconoStyle} className='fab fa-facebook-f'></i>
        </a>
      </Social>
      <Social>
        <a
          href='https://www.linkedin.com/in/genes-per%C3%BA-39824b1a7'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Linkedin'
        >
          <i style={iconoStyle} className='fab fa-linkedin-in'></i>
        </a>
      </Social>
      <Social>
        <a
          href='https://www.instagram.com/genes_peru'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Instagram'
        >
          <i style={iconoStyle} className='fab fa-instagram'></i>
        </a>
      </Social>
      <Social>
        <a
          href='https://www.youtube.com/channel/UCllOAm-7Y6QENvzH2J0yHyw'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Youtube'
        >
          <i style={iconoStyle} className='fab fa-youtube'></i>
        </a>
      </Social>
    </Network>
  </Footer>
);
