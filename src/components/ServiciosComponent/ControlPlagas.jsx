import React from 'react'

import '../../css/Servicios.css'

import Plagas from '../../img/ratstop.png'

function ControlPlagas() {
  return (
    <div className="container">
      <div className="servicio row">
        <div className="imagen col-sm-12 col-md-4">
          <img
            src={Plagas}
            alt=""
            className="w-100"
          />
        </div>

        <div className="descripcion col-sm-12 col-md-8 mt-3 ">
          <div className="card">
            <div className="card-header">Control de Plagas</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Pellet Anticoagulante</li>
              <li className="list-group-item">Efecto en pocos dias</li>
              <li className="list-group-item">Instalación en pvc</li>
            </ul>
          </div>

          <section className="container">
        <p className="text-start mt-4">
        Servicio orientado a controlar y
prevenir una plaga mediante el uso de un
gel u otro método de control con el
objetivo de minimizar la aparición.
        </p>
      </section>

        </div>
      </div>

    
    </div>
  );
}

export default ControlPlagas