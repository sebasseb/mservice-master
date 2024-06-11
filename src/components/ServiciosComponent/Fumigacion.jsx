import React from 'react'
import Fumig from '../../img/desinfectando.jpg'

import '../../css/Servicios.css'

function Fumigacion() {
  return (
    <div className="container">
      <div className="servicio row">
        <div className="descripcion col-sm-12 col-md-8">
          <div className="card">
            <div className="card-header">Fumigación</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Ácaros</li>
              <li className="list-group-item">Arácnidos</li>
              <li className="list-group-item">Insectos</li>
              <li className="list-group-item">Termitas</li>
            </ul>
          </div>
        </div>
        <div className="imagen col-sm-12 col-md-4">
          <img
            src={Fumig}
            alt=""
            className="w-100 "
          />
        </div>

      </div>

      <section className="container">
        <p className="text-start mt-4">
        Servicio orientado a controlar y prevenir
una plaga de insectos determinada,
mediante el uso de fumigante en
concentración indicada, ya sea en forma
gaseosa o en pastillas de liberación lenta.
        </p>
      </section>
    </div>
  );
}

export default Fumigacion