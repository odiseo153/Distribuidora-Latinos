import React from 'react'
import '../style/contacto.css'
import imagen from '../images/latinos.jpg'
import {useForm} from 'react-hook-form'


export default function Contacto() {
  
const {register,handleSubmit} = useForm();


const enviarCorreo = (datos)=> {
  var destinatario = datos.correo;
  var asunto = datos.Asunto;
  var cuerpo = datos.mensaje;

  var enlaceCorreo = 'mailto:' + destinatario +
                     '?subject=' + encodeURIComponent(asunto) +
                     '&body=' + encodeURIComponent(cuerpo);

if(window.confirm('se abrira una ventana que lo llevara a Gmail para enviar ese correo desea continuar?'))
{
  window.open(enlaceCorreo);
}


console.log(datos)
}


return (
    <div style={{
height:'700px'
}}>



<div className="container">
  <div >
    <h2>Envianos un Correo</h2>
  </div>
  <div className="row">
    <div className="column">
      <img src={imagen} style={{
width:'500px'
}} />
    </div>
    <div className="column">
      <form action="" onSubmit={handleSubmit(enviarCorreo)}>
        <label >Email</label>
        <input type="text" id="fname" {...register("correo")}  required placeholder="Tu email.."/>
        <label >Asunto del Correo</label>
        <input type="text" id="lname" {...register("Asunto")} required placeholder="Asunto del contacto.."/>
        <label >descripcion</label>
        <textarea id="subject" {...register("mensaje")} required placeholder="una descripcion del por que nos contactas"></textarea>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  </div>
</div>

</div>


  )
}
