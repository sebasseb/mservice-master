import React from 'react'

import '../../css/Servicios.css'

import Piso from '../../img/tratamientoPisos.jpg'

function TratamientoPisos() {
  return (
    <div className="container">
      <div className="servicio row">
        <div className="descripcion col-sm-12 col-md-8">
          <div className="card">
            <div className="card-header">Tratamiento de Pisos</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Decapado</li>
              <li className="list-group-item">Sellado</li>
              <li className="list-group-item">Encerado</li>
              <li className="list-group-item">Abrillantado</li>
            
            </ul>
          </div>
          <section className="container">
        <p className="text-center mt-4">
            Consiste en un lavado y decapado de pisos duros con detergentes neutros, aplicando sellos y ceras acrílicas
        </p>
      </section>


        </div>
        <div className="imagen col-sm-12 col-md-4 mt-0">
          <img
            src={Piso}
            alt=""
            className="w-100 mt-0"
          />
        </div>

      </div>

    
    </div>
  );
}

export default TratamientoPisos