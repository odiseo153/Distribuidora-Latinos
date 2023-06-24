import React, { useState } from "react";
import style from '../style/estilos.module.css';

export default function Product() {
  const [veces, setVeces] = useState(['', '', '', '']);

  return (
    <div>
      <h1>Productos</h1>
      <div id={style.products}>
        {veces.map((e, index) => (
          <div key={index}>
            <div
              className='card'
              style={{
                width: '300px',
                borderColor: 'red',
                transition:'1s'
              }}
            >
              <a href="#" id={style.foto}>
                <img
                  src="https://th.bing.com/th/id/R.20735d65cdfb4abbc7cedb600a88d4ca?rik=H5%2fZQyDYMPr0yw&pid=ImgRaw&r=0"
                  className="card-img-top"
                  id={style.imaPro}
                  alt="..."
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
