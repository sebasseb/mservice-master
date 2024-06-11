
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";


import NewNavbar from './components/NewNavbar';
import Footer from './components/Footer';

import ScrollToTop from './components/ScrollToTop';

import Inicio from "./components/Inicio"
import Nosotros from "./components/Nosotros"
import Servicios from "./components/Servicios"
import Contacto from './components/Contacto';
import PageNotFound from './components/PageNotFound';
import Clientes from './components/Clientes';
import Noticias from './components/Noticias';
import Cotizaciones from './components/Cotizaciones';
import Mantencion from './components/ServiciosComponent/Mantencion';
import TratamientoPisos from './components/ServiciosComponent/TratamientoPisos';
import VidriosVerticales from './components/ServiciosComponent/VidriosVerticales';
import LimpiezaEstacionamientos from './components/ServiciosComponent/LimpiezaEstacionamientos';

import Fumigacion from './components/ServiciosComponent/Fumigacion';
import ControlPlagas from './components/ServiciosComponent/ControlPlagas';




function App() {


  return (
    <HashRouter>
         <div className="App ">
            <ScrollToTop/>
         
              <NewNavbar/>
              <div className="content">
                <Routes >
                    <Route path="/inicio" element={<Inicio/>}></Route>
                    <Route path="/nosotros" element={<Nosotros/>}></Route>
                    <Route path="/servicios" element={<Servicios/>}></Route>
                    <Route path="/contacto" element={<Contacto/>}></Route>
                    <Route path="/clientes" element={<Clientes/>}></Route>
                    <Route path="/cotizaciones" element={<Cotizaciones/>}></Route>
                    <Route path="/noticias" element={<Noticias/>}></Route>


                    <Route path="/mantencion-industrial" element={<Mantencion/>}></Route>
                    <Route path="/tratamiento-pisos" element={<TratamientoPisos/>}></Route>
                    <Route path="/vidrios-vertical" element={<VidriosVerticales/>}></Route>
                    <Route path="/estacionamientos" element={<LimpiezaEstacionamientos/>}></Route>
                    
                    <Route path="/fumigacion" element={<Fumigacion/>}></Route>
                    <Route path="/control-plagas" element={<ControlPlagas/>}></Route>

                    




                    <Route path="/*" element={<PageNotFound/>}></Route>
                    <Route path=""  element={<Inicio/>} /> 


                    
                </Routes>

              </div>
                <Footer/>
        </div>
    </HashRouter>

  );
}

export default App;
