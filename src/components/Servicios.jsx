import React from 'react'
import ModalServicio from './ModalServicio'
import { useModal } from './useModal';

import {Link} from 'react-router-dom';


import Estacionamiento from '../img/aseoExterior2.jpg'
import Desinfeccion from '../img/desinfectando.jpg'
import AseoIndustrial from '../img/aseoIndustrial3.jpg'
import { Badge, Card } from 'react-bootstrap';

function Servicios() {
  const [isOpenModal1,openModal1,closeModal1 ] =useModal(false)
  const [isOpenModal2,openModal2,closeModal2 ] =useModal(false)
  const [isOpenModal3,openModal3,closeModal3 ] =useModal(false)

  return (
    <div className="container mt-2 w-75">
      {/* <h3>Servicios</h3> */}

      <div className="row">
        <div className="col-sm-12 ">
          {/* <img
            className="w-100 mb-3 "
            onClick={openModal1}
            src={AseoIndustrial}
            alt=""
          /> */}

          <Card className="bg-dark text-white mb-3" onClick={openModal1}>
            <Card.Img src={AseoIndustrial} alt="Card image" />
            <Card.ImgOverlay>
              <Badge
                className="position-absolute bottom-0 start-0"
                bg="dark"
                id="caption"
              >
                <Card.Title>Aseo Industrial</Card.Title>
              </Badge>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className="col-sm-12 col-md-6">
          {/* <img
            className="w-100 mb-3"
            onClick={openModal2}
            src={Desinfeccion}
            alt=""
          /> */}

          <Card className="bg-dark text-white" onClick={openModal2}>
            <Card.Img src={Desinfeccion} alt="Card image" />
            <Card.ImgOverlay>
              <Badge
                className="position-absolute bottom-0 start-0"
                bg="dark"
                id="caption"
              >
                <Card.Title>Saneamiento Ambiental</Card.Title>
              </Badge>
            </Card.ImgOverlay>
          </Card>
          <br />
        </div>
        <div className="col-sm-12 col-md-6">
          {/* <img
            className="w-100  mb-3"
            onClick={openModal3}
            src={AseoOficina}
            alt=""
          /> */}
          <Card className="bg-dark text-white" onClick={openModal3}>
            <Card.Img src={Estacionamiento} alt="Card image" />
            <Card.ImgOverlay>
              <Badge
                className="position-absolute bottom-0 start-0"
                bg="dark"
                id="caption"
              >
                <Card.Title>Aseo de Zonas</Card.Title>
              </Badge>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>

      <ModalServicio isOpen={isOpenModal1} closeModal={closeModal1}>
        <img className="w-75 mb-2" src={AseoIndustrial} alt="" />
        <h2>Aseo Industrial</h2>
        <Link to="/mantencion-industrial" className="col-12 nav-link sec">
          <section className="text-center">
            <h5>Mantención Industrial </h5>
          </section>
        </Link>

        <Link to="/tratamiento-pisos" className="col-12 nav-link sec">
          <section className="text-center">
            <h5>Tratamiento de Pisos</h5>
          </section>
        </Link>

        <Link to="/vidrios-vertical" className="col-12 nav-link sec">
          <section className="text-center">
            <h5>Limpieza de Vidrios en Vertical</h5>
          </section>
        </Link>
      </ModalServicio>

      <ModalServicio isOpen={isOpenModal2} closeModal={closeModal2}>
        <img className="w-75 mb-2" src={Desinfeccion} alt="" />
        <h2>Saneamiento Ambiental</h2>
        

        <Link to="/fumigacion" className="col-12 nav-link sec">
          <section className="text-center">
            <h5>Fumigación</h5>
          </section>
        </Link>

        <Link to="/control-plagas" className="col-12 nav-link sec">
          <section className="text-center">
            <h5>Control de Plagas</h5>
          </section>
        </Link>
      </ModalServicio>

      <ModalServicio isOpen={isOpenModal3} closeModal={closeModal3}>
        <img className="w-75 mb-2" src={Estacionamiento} alt="" />
        <h2>Aseo de Zonas</h2>


        <Link to="/estacionamientos" className="col-12 nav-link sec">
          <section className="text-center">
            <h5>Limpieza de Estacionamientos</h5>
          </section>
        </Link>
      </ModalServicio>
    </div>
  );
}

export default Servicios