import React from 'react';
import LogoBlack from '@img/LogoBlack.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
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
          <FontAwesomeIcon icon={faTwitter} style={iconoStyle} />
        </a>
      </Social>
      <Social>
        <a
          href='https://www.facebook.com/Genesperuoficial'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Facebook'
        >
          <FontAwesomeIcon icon={faFacebookF} style={iconoStyle} />
        </a>
      </Social>
      <Social>
        <a
          href='https://www.linkedin.com/in/genes-per%C3%BA-39824b1a7'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Linkedin'
        >
          <FontAwesomeIcon icon={faLinkedinIn} style={iconoStyle} />
        </a>
      </Social>
      <Social>
        <a
          href='https://www.instagram.com/genes_peru'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Instagram'
        >
          <FontAwesomeIcon icon={faInstagram} style={iconoStyle} />
        </a>
      </Social>
      <Social>
        <a
          href='https://www.youtube.com/channel/UCllOAm-7Y6QENvzH2J0yHyw'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Youtube'
        >
          <FontAwesomeIcon icon={faYoutube} style={iconoStyle} />
        </a>
      </Social>
    </Network>
  </Footer>
);
