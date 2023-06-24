import React from 'react'
import style from '../style/estilos.module.css'
import imagen from '../images/latinos.jpg'

export default function QuienesSomos() {
  return (
    <div style={{
backgroundColor:'black',
height:'700px'
}}>



<div id={style.tituloSomos} >
<h1>Quienes Somos?</h1>
</div>

<div id={style.ImasDiv}>
<img src={imagen}/>
</div>

<div id={style.Texto}>
<p> somos unas distribuidora ubicada en los frailes que distribuimos temporalmente por esa zona aunque somos una empresa reciente eso no quita que seamos personas responsables cada miembro de esta empresa es alguien con vasta experiencia en el mercado  </p>
</div>



</div>
  )
}
