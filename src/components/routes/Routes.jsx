import React from 'react'
import {Route,Routes as Rutas,BrowserRouter} from 'react-router-dom'
import Home from '../inicio/Home'
import QuienesSomos from '../Quiene somos/QuienesSomos'
import Pproduct from '../Productos/Pproduct'
import Pmarcas from '../Marcas/Pmarcas'
import Contacto from '../contacto/Contact'
import Sucursal from '../Sucursal/Sucursal'

export default function Routes() {
  return (
    <div>
    
  <BrowserRouter>
    <Rutas>
      <Route path='/.netlify/functions/api/' element={<Home/>} />
      <Route path='/.netlify/functions/api/product' element={<Pproduct/>} />
      <Route path='/.netlify/functions/api/QuienesSomos' element={<QuienesSomos/>} />
      <Route path='/.netlify/functions/api/marcas' element={<Pmarcas/>} />
      <Route path='/.netlify/functions/api/contacto' element={<Contacto/>} />
      <Route path='/.netlify/functions/api/ubicacion' element={<Sucursal/>} />
    </Rutas>
  </BrowserRouter>



   </div>
  )
}
