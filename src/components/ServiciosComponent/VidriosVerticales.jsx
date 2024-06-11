import React from 'react'

import Vidrios from '../../img/vidriosVertical1.jpg'


import '../../css/Servicios.css'


function VidriosVerticales() {
  return (
    <div className="container">
      <div className="servicio row">
        <div className="imagen col-sm-12 col-md-8">
          <img
            src={Vidrios}
            alt=""
            className="w-100 mt-0"
          />
        </div>

        <div className="descripcion col-sm-12 col-md-4">
          <div className="card">
            <div className="card-header">Limpieza de Vidrios en Vertical</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Personal Experimentado y Capacitado</li>
              <li className="list-group-item">Estrictos estándares de Seguridad</li>
              <li className="list-group-item">Vidrios Interior y exterior</li>
              
            </ul>
          </div>


          
        </div>
      </div>

      <section className="container">
        <p className="text-start mt-4">
        Servicio enfocado a trabajos temporales en
altura que se ejecutan mediante las
“técnicas de acceso y de posicionamiento
mediante cuerdas”.
        </p>
        <p className="text-start mt-2">
        En este servicio, tanto
el acceso al lugar, como la ejecución del
mismo se realizan en suspensión sobre dos
tendidos de cuerda.
        </p>
      </section>
    </div>
  );
}

export default VidriosVerticales