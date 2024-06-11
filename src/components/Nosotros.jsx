import React from 'react'
import Frontis from '../img/frontisMaster.webp';
import Equipo from '../img/equipoAseo.jpg'

function Nosotros() {
  return (
    <div className="container mt-1">
      <h3>Nuestros inicios</h3>
      <section className="col-sm-12   m-2 ">
        <div className="row mt-3 d-flex align-items-center ">
        <p className=" col col-sm-12 col-md-6 mt-2">
            Somos una empresa de servicios de aseo que nació por necesidad de
            nuestros clientes de tener una entidad que limpie y sanitice áreas de trabajo.
          </p>
          <div className="col-sm-12 col-md-6">
            <img
              className="col-sm-12 col-md-6 w-100"
              src={Frontis}
              alt=""
            />
          </div>
         

        </div>
      </section>

      <section className="col-sm-12   m-2 ">
        <div className="row mt-2 d-flex align-items-center ">
          

          <div className="col-sm-12 col-md-6">
            <img
              className="col-sm-12 col-md-6 w-100"
              src={Equipo}
              alt=""
            />
          </div>
          <div className=" col col-sm-12 col-md-6 mt-2">
            <p>Estamos respaldados por la Certificación ISO 9001:2015.</p>
            <p>Incorporamos nuevas tecnologías a nuestros procedimientos.</p>
            <p>Comprometidos con capacitaciones constantes para nuestros colaboradores.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Nosotros