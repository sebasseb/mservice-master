import React from 'react'
//import Carousel from './Carousel'
import NewCarousel from './NewCarousel'
import ServiciosMin from './ServiciosMin'

function Inicio() {
  return (
    <div> 
        {/* <Carousel/> */}
        <NewCarousel/>
        <hr />
        <ServiciosMin />
    </div>
  )
}

export default Inicio