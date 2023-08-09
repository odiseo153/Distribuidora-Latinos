import { useState } from 'react';
import '../style/Pproduto.css';
import MarcaData from '../Json_Data/Marcas.json';

export default function Pmarcas() {
  const [imagenes, setIma] = useState(MarcaData);

  return (
    <div>
      <div>
        <h1 style={{position:'relative',left:'700px'}}>Marcas</h1>

<hr/>
        {imagenes.map((e, i) => (
          <div key={i} id='com'>
            <div>
              <div className="card">
                <div className="info">
                  <div className="name">{e.nombre}</div>
                </div>
                <div style={{
                  height: '100%',
                  width: '100%',
                  backgroundImage: `url('${e.Imagen}')`,
                  backgroundRepeat: 'no-repeat',
                  position: 'absolute',
                  backgroundSize: '100% 100%',  
                  borderRadius: '10px',
                  transition: '0.7s'
                }}>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
