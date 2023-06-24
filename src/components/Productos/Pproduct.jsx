import React, { useEffect, useState } from 'react';
import style from '../style/estilos.module.css'
import  '../style/Pproduto.css'
import CategoriaProduct from './CategoriaProduct';


export default function Pproduct() {
  const [imagenes, setIma] = useState([]);
  const [CantPro,setCant] = useState();
  
  const guardar = (datos) => {
    const datosLimitados = datos.slice(0, 30);
    setIma(datosLimitados);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((re) => guardar(re));
  }, []);

   return (
<div>

<div id='todoPproduct'>

  
<h1>Productos</h1> 



<p>Cantidad de productos disponibles: <strong>{imagenes.length}</strong></p>
<hr></hr>
<p>Ordenar por:</p>
<select className="form-select" aria-label="Default select example" style={{
width:'30%'
}}>
  <option value="2">Nombre, A a Z</option>
  <option value="3">Nombre, Z a A</option>
  <option value='4'>Precio:de mas bajo a mas alto</option>
  <option value="1">Precio:de mas alto al mas bajo</option>
</select>

{imagenes.map((e,i)=>
{
return (
<div key={i}  id='com'>
 
    <div  style={{
backgroundImage:'https://images.wallpapersden.com/image/download/rick-and-morty-in-outer-space_bGdrbmuUmZqaraWkpJRmbmdlrWZlbWU.jpg'
}}>
     <div className="card">
      <div className="info">
       <div className="name">Product name</div>
        <div className="bio">
  
<p>producto muy bueno hecho en china</p>

        </div>
      <div>
    </div>
   </div>
    <div className="photo" style={{
      height: '100%',
      width: '100%',
      backgroundImage: `url('https://th.bing.com/th/id/OIP.JpxfI_qGMtg90sA6PXYieAHaEK?pid=ImgDet&rs=1')`,
      backgroundRepeat: 'no-repeat',
          position: 'absolute',
      backgroundSize: '100% 100%',  
      borderRadius: '10px',
      transition: ' 0.7s'
    }}>
   </div>
   
</div>

</div>
</div>
)
})}
</div>

<div style={{position:'relative',top:'-3350px' }}>
<CategoriaProduct/>
</div>

</div>
  );
}
