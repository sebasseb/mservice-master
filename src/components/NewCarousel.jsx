import React from 'react'
import { Badge, Carousel } from 'react-bootstrap';

import '../css/Carousel.css'


import Slide1 from '../img/vidriosVerticales2.jpg'
import Slide2 from '../img/vidriosVertical1.jpg'
import Slide3 from '../img/aseoExterior4.jpg'


const NewCarousel = () => {
  return (
    <Carousel >
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={Slide1} alt="First slide" />
        <Carousel.Caption >
          <Badge  bg="dark" id="caption">
            <h3>  ¡Bienvenido!  </h3>
            <p>Descubre Master Service</p>
          </Badge>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={Slide2} alt="Second slide" />

        <Carousel.Caption id="mainCaption" >
          <Badge  bg="dark" id="caption">
            <h3>¡Anímate a la experiencia!</h3>
            <p>Profesionalismo en nuestros servicios</p>
          </Badge>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={Slide3} alt="Third slide" />

        <Carousel.Caption id="mainCaption">
        <Badge  bg="dark" id="caption">
          <h3>¡Todo en Uno!</h3>
          <p>
            Calidad y Eficiencia adaptado a tu realidad 
          </p>
          </Badge>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default NewCarousel