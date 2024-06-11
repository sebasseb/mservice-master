import React from 'react'
import "../css/ModalServicio.css"

import Logo from '../img/master-logo.webp'

function ModalServicio({children,isOpen,closeModal}) {
  const handdleModalContentClick = (e) => e.stopPropagation();
  return (
    <div>
      
      <div className={`overlay moda ${isOpen &&  "is-open"}`} onClick={closeModal}>
        <div className="modal-dialog " onClick={handdleModalContentClick}>
          <div className="modal-content ">
                <div className="header mt-3">
                  <img  src={Logo} alt="" />
                </div>
                <hr />
            <div className="modal-body">



              {children}
              
              
              </div>
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalServicio