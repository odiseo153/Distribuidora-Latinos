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
      <Route path='/' element={<Home/>} />
      <Route path='/product' element={<Pproduct/>} />
      <Route path='/QuienesSomos' element={<QuienesSomos/>} />
      <Route path='/marcas' element={<Pmarcas/>} />
      <Route path='/contacto' element={<Contacto/>} />
      <Route path='/ubicacion' element={<Sucursal/>} />
    </Rutas>
  </BrowserRouter>



   </div>
  )
}
