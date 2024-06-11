import React from 'react'
import MantencionIndustrial from '../../img/aseoIndustrial2.jpg'

import '../../css/Servicios.css'

function Mantencion() {
  return (
    <div className="container">
      <div className="servicio row">
        <div className="imagen col-sm-12 col-md-4">
          <img
            src={MantencionIndustrial}
            alt=""
            className="w-100 mt-3"
          />
        </div>

        <div className="descripcion col-sm-12 col-md-8 mt-3">
          <div className="card">
            <div className="card-header">Mantención Industrial</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Oficinas</li>
              <li className="list-group-item">Retail</li>
              <li className="list-group-item">Colegios</li>
              <li className="list-group-item">Clínicas</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="container">

      <p className="mt-3">Su principal objetivo es mantener las áreas
de trabajo limpias, ordenadas y libres de
contaminación.</p>      
        <p className="text-start mt-2">Servicio enfocado en la limpieza general de
espacios; trabajo minucioso con altos
estándares de calidad, supervisado por
profesionales del área. El servicio se ejecuta,
generalmente, de manera diaria y contínua.</p>


      </section>
    </div>
  );
}

export default Mantencion