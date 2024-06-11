import React from 'react'
import '../css/Clientes.css'

import Aduanas from '../img/Clientes/aduanas.png'
import Armada from '../img/Clientes/armada.png'
import CorreosChile from '../img/Clientes/correosChile.png'
import Diputados from '../img/Clientes/diputados.png'
import Hoscar from '../img/Clientes/hoscar.png'
import IPS from '../img/Clientes/ips.png'
import Kaufmann from '../img/Clientes/kaufmann.png'
import MallPuertaMar from '../img/Clientes/mallPuertaMar.png'
import PoderJudicial from '../img/Clientes/poderJudicial.png'
import Renolit from '../img/Clientes/renolit.png'
import UTalca from '../img/Clientes/uTalca.png'
import UTFS from '../img/Clientes/utfs.png'

function Clientes() {
  return (
    <div>
      <div className="container">
        <h3>Conoce a nuestros clientes</h3>
        <div className="clientes row mt-3">
          <div className="col-sm-12 col-md-4 mb-2">
            <div className="card">
              <img src={Aduanas} className="card-img-top " alt="..." />
              <div className="card-body">
                {/* <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p> */}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 mb-2">
          <div className="card">
              <img src={Armada} className="card-img-top" alt="..." />
              <div className="card-body">
                {/* <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p> */}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 mb-2">
          <div className="card">
              <img src={CorreosChile} className="card-img-top" alt="..." />
              <div className="card-body">
                {/* <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p> */}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 mb-2">
          <div className="card">
              <img src={Diputados} className="card-img-top" alt="..." />
              <div className="card-body">
                {/* <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p> */}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 mb-2">
          <div className="card">
              <img src={Hoscar} className="card-img-top" alt="..." />
              <div className="card-body">
                {/* <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p> */}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 mb-2">
          <div className="card">
              <img src={IPS} className="card-img-top" alt="..." />
              <div className="card-body">
                {/* <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p> */}
              </div>
            </div>
          </div>

      

          <div className="col-sm-12 col-md-4 mb-2">
          <div className="card">
              <img src={Kaufmann} className="card-img-top" alt="..." />
              <div className="card-body">
                {/* <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p> */}
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 mb-2">
          <div className="card">
              <img src={MallPuertaMar} className="card-img-top" alt="..." />
              <div className="card-body">
                {/* <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p> */}
              </div>
            </div>
          </div>


          <div className="col-sm-12 col-md-4 mb-2">
          <div className="card">
              <img src={PoderJudicial} className="card-img-top" alt="..." />
              <div className="card-body">
                {/* <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p> */}
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 mb-2">
          <div className="card">
              <img src={Renolit} className="card-img-top" alt="..." />
              <div className="card-body">
                {/* <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p> */}
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 mb-2">
          <div className="card">
              <img src={UTalca} className="card-img-top" alt="..." />
              <div className="card-body">
                {/* <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p> */}
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 mb-2">
          <div className="card">
              <img src={UTFS} className="card-img-top" alt="..." />
              <div className="card-body">
                {/* <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p> */}
              </div>
            </div>
          </div>
      
        </div>
      </div>
    </div>
  );
}

export default Clientes