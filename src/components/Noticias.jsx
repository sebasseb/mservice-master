import React from 'react'

import Logo from '../img/master-logo.webp'
import Cliente from '../img/fotoCliente.png'
import Tecnologia from '../img/nuevaTecnologia.png'



function Noticias() {
  return (
    <div>
      <div className="container">
        <h3>Noticias</h3>
        <div className="noticia-block row mt-2   bg-light">




          <div className="noticia col-12 row mb-3 ">
            <div className="imagen col-sm-12 col-md-4 mt-2">
                <img  className="w-75" src={Logo}  alt="" />
            </div>
            <div className="cuerpo col-sm-12 col-md-8  text-start  mt-2 ">
              <br />

              <h5>¡Master Service se ha modernizado! </h5>
              <br />


              <p>
                Hemos cambiado nuestro sitio web. <br/>Ahora más simple, atractivo y minimalista. 
              </p>
            </div>
          </div>


          <div className="noticia col-12 row mb-3 ">
            <div className="imagen col-sm-12 col-md-4 mt-2">
                <img  className="w-75" src={Cliente}  alt="" />
            </div>
            <div className="cuerpo col-sm-12 col-md-8  text-start  mt-2 ">
              <br />

              <h5>¡Nuevo Cliente! </h5>
              <br />


              <p>
              Se incorpora a nuestra lista de clientes Colegio Ana María Janer ubicado en Las Rejas 881, Viña del
Mar, funcionando desde 1958. El centro educativo cristiana nos da su confianza para ser su
proveedor de servicios, parala mantención el aseo de este prestigioso colegio.
              </p>
            </div>
          </div>




          <div className="noticia col-12 row mb-3 ">
            <div className="imagen col-sm-12 col-md-4 mt-4">
                <img  className="w-75" src={Tecnologia}  alt="" />
            </div>
            <div className="cuerpo col-sm-12 col-md-8  text-start  mt-0 ">
              <br />

              <h5>Master Service adhiere a su línea en limpieza de vidrios el XLINE SYSTEMS.</h5>
              <br />


              <p>
              X-Line Systems es un equipo profesional para limpieza de cristales, vidrios, ventanas y fachadas en
altura con sistemas de purificación de agua y pértigas telescópicas hidro difusoras para la industria
de la limpieza con sistemas de filtración de resinas básicas asequibles para todo el mundo hasta
los más altos sistemas de filtración de ósmosis inversa.
              </p>
            </div>
          </div>




          





        





        </div>
      </div>
    </div>
  );
}

export default Noticias