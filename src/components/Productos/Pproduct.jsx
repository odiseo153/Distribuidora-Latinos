import { useState } from 'react';
import '../style/Pproduto.css';
import CategoriaProduct from './CategoriaProduct';
import ProductData from '../Json_Data/Productos.json';

export default function Pproduct() {
  const [imagenes, setIma] = useState(ProductData);
  const [Orden, setOrden] = useState(0);

  const compareByName = (a) => {
console.log(a)
    if (a === 'Nombre, A a Z') {
      setOrden(-1);
    }
    if (a === 'Nombre, Z a A') {
      setOrden(1);
    }
    // Puedes implementar más lógica para otros casos de ordenamiento aquí
  };

  const customSort = (a, b) => {
    if (Orden === -1) {
      return a.nombre.localeCompare(b.nombre);
    }
    if (Orden === 1) {
      return b.nombre.localeCompare(a.nombre);
    }
    // Implementa otras condiciones de ordenamiento aquí
    return 0;
  };

  // Ordenar el array de imágenes utilizando la función de comparación personalizada
  imagenes.sort(customSort);

  return (
    <div>
      <div id='todoPproduct'>
        <h1>Productos</h1>
        <p>Cantidad de productos disponibles: <strong>{imagenes.length}</strong></p>
        <hr></hr>
        <p>Ordenar por:</p>
        <select className="form-select" onChange={e => compareByName(e.target.value)} aria-label="Default select example" style={{
          width: '30%'
        }}>
          <option value="Nombre, A a Z">Nombre, A a Z</option>
          <option value="Nombre, Z a A">Nombre, Z a A</option>
          <option value='Precio: de más bajo a más alto'>Precio: de más bajo a más alto</option>
          <option value="Precio: de más alto al más bajo">Precio: de más alto al más bajo</option>
        </select>
        {imagenes.map((e, i) => {
          return (
            <div key={i} id='com'>
              <div>
                <div className="card">
                  <div className="info">
                    <div className="name">{e.nombre}</div>
                    <div className="bio">
                      <hr/>
                      <p>{e.Descripcion}</p>
                    </div>
                    <div>
                    </div>
                  </div>
                  <div className="photo" style={{
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
          )
        })}
      </div>
   
    </div>
  );
}
