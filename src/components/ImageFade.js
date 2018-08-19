import React from 'react';
import { Image, Reveal } from 'semantic-ui-react'
import church from '../img/church.jpg'


const ImageFade = () => (
  <Reveal animated='small fade'>
    <Reveal.Content visible>
      <Image src={church} size='small' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <h1>Hello Semantic</h1>
    </Reveal.Content>
  </Reveal>
)


export default ImageFade
