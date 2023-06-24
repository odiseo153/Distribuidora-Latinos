import React from 'react'
import style from '../style/estilos.module.css'

export default function Navbar() {
  return (
    <div > 
<nav className="navbar navbar-expand-lg bg-danger" style={{borderRadius:'10px',width:'100%'}}>
  <div className="container-fluid">
 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>   
 <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item" id={style.iconos}>
          <a className="nav-link active" aria-current="page" href="/">INICIO</a>
        </li>

        <li className="nav-item" id={style.iconos}>
          <a className="nav-link" href="/QuienesSomos">QUIENES SOMOS</a>
        </li>

        <li className="nav-item" id={style.iconos}>
          <a className="nav-link" href="/product">PRODUCTOS</a>
        </li>

         <li className="nav-item" id={style.iconos}>
          <a className="nav-link" href="/marcas">MARCAS</a>
        </li>

         <li className="nav-item" id={style.iconos}>
          <a className="nav-link" href="/ubicacion">UBICACION</a>
        </li>

         <li className="nav-item" id={style.iconos}>
          <a className="nav-link" href="/contacto">CONTACTO</a>
        </li>

      </ul>
    </div>
  </div>
</nav></div>
  )
}
