import React from 'react'
import {Link} from "react-router-dom";


import AseoOficina from '../img/aseoOficina2.jpg'
import Sanitizacion from '../img/sanitizacion.jpg'

function ServiciosMin() {
  return (
    <div className="container">
      <div className="card">
        <div className="container pt-3  ">
          <section className="col-sm-12   m-2">
            <div className="row mt-2 ">
              <div className=" col col-sm-12 col-md-6 text-center mt-3 mb-3">
                <h3>En constante evolución</h3>
                <br />
                <i className="fa-solid fa-circle-check " /> 25 años de
                experiencia en el rubro.
                <br />
                <i className="fa-solid fa-circle-check" /> Innovamos en el
                mercado del aseo.
                <br />
                <i className="fa-solid fa-circle-check " /> Orientados a la
                industria y oficinas.
              </div>

              <div className="col-sm-12 col-md-6">
                <img
                  className="col-sm-12 col-md-6 w-100 "
                  src={Sanitizacion}
                  alt=""
                />
              </div>
            </div>
          </section>
          <section className="col-sm-12  m-2 ">
            <div className="row  mt-3">
              <div className="col-sm-12 col-md-6">
                <img
                  className="col-sm-12 col-md-6 w-100"
                  src={AseoOficina}
                  alt=""
                />
              </div>

              <div className=" col col-sm-12 col-md-6  text-start  mb-3">
                <br /><br />
                <i className="fa-solid fa-circle-check " /> Mantención en
                condominios y colegios.
                <br />
                <i className="fa-solid fa-circle-check " /> Limpieza de vidrios
                verticales.
                <br />
                <i className="fa-solid fa-circle-check " /> Aseo y desinfección
                de áreas clínicas.
              </div>
            </div>
          </section>
        </div>
        <div className="card-footer">
          <Link to="/servicios">
            <button type="button" className="btn  " style={{background: "rgb(35, 158, 129)", color: "white"}}>
              ¡Ir a Servicios!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiciosMin