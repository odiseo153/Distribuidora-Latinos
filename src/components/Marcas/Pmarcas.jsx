import React, { useEffect, useState } from 'react';
import style from '../style/estilos.module.css'
import  '../style/Pproduto.css'


export default function Pmarcas() {
  const [imagenes, setIma] = useState([]);
  const [CantPro,setCant] = useState();
  
  const guardar = (datos) => {
    const datosLimitados = datos.slice(0, 8);
    setIma(datosLimitados);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((re) => guardar(re));
  }, []);

   return (
<div>


<div >
<h1>Marcas</h1> 


{imagenes.map((e,i)=>
{
return (
<div key={i}  id='com'>
 
    <div  style={{
backgroundImage:'https://images.wallpapersden.com/image/download/rick-and-morty-in-outer-space_bGdrbmuUmZqaraWkpJRmbmdlrWZlbWU.jpg'
}}>
     <div className="card">
      <div className="info">
       <div className="name">Marca name</div>
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

</div>
  );
}
