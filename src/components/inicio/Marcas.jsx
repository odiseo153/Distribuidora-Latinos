import React, { useState } from 'react'
import style from '../style/estilos.module.css'
export default function Marcas() {
 
const [veces,setRep] = useState(['','','','','','','','','','','','',''])

//window.confirm('confirma')

 return (
    <div className={style.marcas}>

<h1>Nuestras Marcas</h1>


<div className={style.sliders}>
        <div className={style.slide_track}>
        
{veces.map(e=>
{
return (
<div key={1}>
<div className={style.slide}>
                <img src="https://th.bing.com/th/id/OIP.OHwZVd2b_xA6EmdIxtaH6AHaHa?pid=ImgDet&rs=1" alt=""/>
            </div>
</div>

)
})}
       
</div>
</div>
 

</div>
  
  )
}
