import React from 'react'

import Estacionamiento from '../../img/estacionamiento.jpeg'

import '../../css/Servicios.css'

function LimpiezaEstacionamientos() {
  return (
    <div className="container">
      <div className="servicio row">
        <div className="descripcion col-sm-12 col-md-8" >
          <div className="card">
            <div className="card-header">Limpieza de Estacionamientos</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Eliminar Grasa</li>
              <li className="list-group-item">Limpiar Acumulación de suciedad</li>
              <li className="list-group-item">Eliminar Mancha de Aceite y Neumáticos</li>
            </ul>

            
          </div>
          <section className="container">
        <p className="text-start mt-4">
        Lavado de pisos, utilizando equipos de limpieza, personal altamente capacitado, jabones y líquidos
de calidad, se puede incluir el lavado de paredes y pilares subterráneos.
        </p>
      </section>
        </div>
        <div className="imagen col-sm-12 col-md-4">
          <img
            src={Estacionamiento}
            alt=""
            className="w-100 mt-0"
          />
        </div>

      </div>

     
    </div>
  );
}

export default LimpiezaEstacionamientos