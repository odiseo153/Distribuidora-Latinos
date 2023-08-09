import React from 'react';
import '../style/contacto.css';
import imagen from '../images/latinos.jpg';
import Loading from '../Loading';

export default function Contacto() {
  const [formData, setFormData] = React.useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const enviarCorreo = (event) => {
    event.preventDefault();

    var destinatario = formData.email;
    var asunto = formData.Asunto;
    var cuerpo = formData.mensaje;

    var enlaceCorreo = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    console.log(formData);

    if (window.confirm('Se abrirá una ventana que lo llevará a Gmail para enviar ese correo. ¿Desea continuar?')) {
      window.open(enlaceCorreo);
    }
  };

  return (
    <div>

      <section className="vh-100 bg-color">
        <div className="container py-5 ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="cards">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src={imagen}
                      alt="login form"
                      style={{ height: '700px' }}
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={enviarCorreo}>
                        <h1 className="fw-normal mb-3 pb-3">Envianos un Correo</h1>
                        <div className="d-flex align-items-center mb-3 pb-1"></div>
                        <div className="form-outline mb-4">
                          <i className="fa-solid fa-envelope"></i>
                          <label className="form-label">Email</label>
                          <input
                            type="text"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="form-control form-control-lg"
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <i className="fa-solid fa-pencil"></i>
                          <label className="form-label">Asunto del Correo</label>
                          <input
                            type="text"
                            id="form2Example27"
                            required
                            value={formData.Asunto}
                            onChange={handleInputChange}
                            className="form-control form-control-lg"
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <i className="fa-solid fa-pen-to-square"></i>
                          <label className="form-label">Descripcion</label>
                          <input
                            type="text"
                            required
                            id="form2Example27"
                            value={formData.mensaje}
                            onChange={handleInputChange}
                            className="form-control form-control-lg"
                          />
                        </div>

                        <div className="pt-1 mb-4">
                          <input className="btn btn-primary btn-lg btn-block" value="Enviar Correo" type="submit" />
                       
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}