import React from 'react'


import Slide1 from '../img/vidriosVerticales2.jpg'
import Slide2 from '../img/desinfeccionOficinas.jpg'
import Slide3 from '../img/fumigacion-desinsectacion.jpg'
import Slide4 from '../img/cucaracha.jpg'


function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade bg-dark col-sm-12 "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            className="active"
            aria-current="true"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active ">
            <img
              src={Slide1}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item ">
            <img
              src={Slide2}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item  ">
            <img
              src={Slide3}
              className="d-block w-100 "
              alt="..."
            />
          </div>
            <div className="carousel-item  ">
            <img
              src={Slide4}
              className="d-block w-100 "
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel