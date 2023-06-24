import React, { useState } from 'react';
import '../style/Sucursal.css';

export default function Sucursal() {
  const [estado, setEstado] = useState(false);

  const revelar = () => {
    setEstado(!estado);
  };

  return (
    <div style={{ height: '800px', position: 'relative' }}>
      <h1 style={{ position: 'relative', left: '45%', top: '15px' }}>Ubicaciones</h1>

      <div className='ubicaciones'>
        <button
          className="btn btn-success"
          id='boton'
          onClick={revelar}
        >
          <h3>Los Frailes</h3>
          <div className='flecha'><i className="fa-solid fa-arrow-down"></i></div>
        </button>

        {estado && (
          <div id='frailes'>
            <iframe
              className='mapa'
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15137.515750627448!2d-69.798681!3d18.466487!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf876f01475a41%3A0xe8f223ea2193aacc!2sDistribuidora%20Silverio%20Francisco!5e0!3m2!1ses-419!2sdo!4v1687535133417!5m2!1ses-419!2sdo"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className='informacion'>
              <p><i className="fa-solid fa-phone fa-shake"></i><strong>Teléfono:</strong> <a href='https://api.whatsapp.com/send?phone=18092894727'>(829)-456-8792</a></p>
              <p><i className="fa-solid fa-envelope fa-bounce"></i> <strong>Correo:</strong> distribuidoralatinos@gmail.com</p>
              <p><i className="fa-solid fa-location-dot fa-flip"></i><strong>Ubicación:</strong></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
