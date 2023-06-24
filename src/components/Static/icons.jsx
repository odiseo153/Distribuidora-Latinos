import React from 'react'
import style from '../style/estilos.module.css'
import imagen from '../images/latinos.jpg'

export default function Icons() {
  
let ima = 'https://th.bing.com/th/id/R.8a779d6fac2cb9b378d8df982e1bd899?rik=hvxXm6e4q3Pzdg&pid=ImgRaw&r=0'
return (
    <div>

<div className={style.iconsDiv}>
 <img 
  src={imagen} 
  className={style.imagen} 
  alt='imagen' 
/>
<i className="fa-solid fa-heart" id={style.heart}></i>

<div className="input-group mb-3" id={style.buscar}>
  <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{height:'50px',top:'6px'}}>Categorias</button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Papel</a></li>
    <li><a className="dropdown-item" href="#">Limpieza</a></li>
    <li><a className="dropdown-item" href="#">decoracion</a></li>
    <li><hr className="dropdown-divider" /></li>
    <li><a className="dropdown-item" href="#">Todos</a></li>
  </ul>

  <input type="text" className="form-control" aria-label="Text input with dropdown button" />
 <button style={{height:'50px',top:'6px',position:'relative'}} className="input-group-text" id="basic-addon1">
<i className="fa-solid fa-magnifying-glass"></i>
</button>
</div>

<hr className="dropdown-divider" />

</div>
   
    </div>
  )
}
