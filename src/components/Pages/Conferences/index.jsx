import React from 'react';
import { Helmet } from 'react-helmet';

import {
  Title,
  ContainerFrameYoutube,
  BoxFrameYoutube,
  FrameYoutube,
} from './styles';

export default () => (
  <>
    <Helmet>
      <title>Conferencias | Genes Perú</title>
      <meta name='description' content='Ong' />
    </Helmet>
    <Title>Conferencias de Genes Perú</Title>
    <ContainerFrameYoutube>
      <BoxFrameYoutube>
        <FrameYoutube
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/Ms5KVZdwblA'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></FrameYoutube>
      </BoxFrameYoutube>
      <BoxFrameYoutube>
        <FrameYoutube
          src='https://www.youtube.com/embed/vWvTVlGjzng'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></FrameYoutube>
      </BoxFrameYoutube>
    </ContainerFrameYoutube>
  </>
);
