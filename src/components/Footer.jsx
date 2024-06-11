
import React from 'react'
import { Link } from "react-router-dom";

import { ReactComponent as Instagram } from '../img/instagram.svg'
import { ReactComponent as Whatsapp } from '../img/whatsapp.svg'
import { ReactComponent as Facebook } from '../img/facebook.svg'
import '../css/Footer.css'

export default function Footer() {
  return (
    <div className="bg-light">
      <hr />
      <div className="footer container mt-4">
        <div className="info row">
          <div className="logo col-sm-12 col-md-4 mt-2">
            <img className="w-50" src={require("../img/iso.webp")} alt="" />
          </div>
          <div className="secciones row col-sm-12 col-md-8 ">
            <section className="d-flex justify-content-around row mt-3 pb-4  ">
              <span className="col-sm-4 mt-2">
                <Instagram id="instagram" /> Instagram
              </span>
              <span className="col-sm-4 mt-2">
                <Whatsapp id="whatsapp" /> Whatsapp
              </span>
              <span className="col-sm-4 mt-2">
                <Facebook id="facebook" /> Facebook
              </span>
            </section>
            <Link className="col-sm-12 col-md-4 sec nav-link" to="/clientes">
              <section className="text-start">
                <h5>Nuestros Clientes</h5>
                <p>
                  Descubre quiénes son nuestros clientes
                </p>
              </section>
            </Link>

            <Link className="col-sm-12 col-md-4 sec nav-link" to="/servicios">
              <section className="text-start">
                <h5>Servicios</h5>
                <p>Cotiza online nuestros servicios</p>
              </section>
            </Link>
            <Link className="col-sm-12 col-md-4 sec nav-link" to="/noticias">
              <section className="text-start">
                <h5>Noticias</h5>
                <p>Entérate de las últimas noticias sobre Master Service</p>
              </section>
            </Link>
          </div>
        </div>

        <div className="copy mt-2">
          <p>&copy; Copyright 2022 &copy;</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
