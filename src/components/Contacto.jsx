import React from 'react'
import Foto from '../img/aseoOficina.jpg'



import '../css/Contacto.css'
import { Badge } from 'react-bootstrap';

function Contacto() {
  return (
    <div>
      <div className="container mt-2">
        <h3>Contacto</h3>
        <div className="body row">
        <iframe
            title="mapa"
            className="col-md-5 col-sm-12 mb-3 "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.423525523869!2d-71.43915198518505!3d-33.04531498421905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689d903f1f4a8cd%3A0x85961078bb2a5092!2sChorrillos%20695%2C%20Quilpu%C3%A9%2C%20Valpara%C3%ADso!5e0!3m2!1ses!2scl!4v1651025418647!5m2!1ses!2scl"
            width="400"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="contacto col-sm-12 col-md-7 mt-5">
            <ul>
              <li className="text-start">32 272 9802 / 32 272 9803 </li>
              <li className="text-start">info@masterservice.cl</li>
              <li className="text-start">
                Chorrillos 695, Quilpué, Región de Valparaíso
              </li>
            </ul>
          </div>
        </div>

        <div className="description row">
          <div className="info mt-3 mb-4 col-md-7 col-sm-12 row">
            <div className=" personal col-12 row">
              <div className="text-center seccion col-md-12 col-sm-12">
                <h4>Maria Veronica Diaz</h4>
                <h5>Secretaria Operaciones</h5>
                <Badge bg="dark" id="caption">mvdiaz@masterservice.cl</Badge>
              </div>
                
              <div className="text-center seccion col-md-6 col-sm-12">
                <hr />
                <h4 >Ximena Aballay Figueroa</h4>
                <h5>Jefe Departamento Operaciones</h5>
                <Badge bg="dark" id="caption">xaballay@masterservice.cl</Badge>
              </div>

              <div className=" text-center seccion col-md-6 col-sm-12">
              <hr />
                <h4 >Claudia Bustos Orellana </h4>
                <h5>Jefe de Finanzas</h5>
                <Badge bg="dark" id="caption">cbustos@masterservice.cl</Badge>
              </div>



            

              
              
            </div>
          </div>
          
            <div className="logo col-sm-12 col-md-5 mt-4">
            <img className="w-100" src={Foto} alt="" />
          </div>
        </div>

 
      </div>
    </div>
  );
}

export default Contacto