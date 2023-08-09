import imagen from '../images/latinos.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function QuienesSomos() {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
      <Container fluid>
        <Row>
          <Col xs={12} md={6} style={{ backgroundColor: 'white', color: 'black', padding: '50px' , borderRadius:'30px'}}>
            <div className="text-center mt-4">
              <h1>Quienes Somos?</h1>
            </div>
            <div className="text-center mt-4">
              <img src={imagen} alt="Imagen" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          </Col>
          <Col xs={12} md={6} className="text-white" style={{ padding: '40px' }}>
            <div className="mt-4">
              <p>
                Somos una distribuidora ubicada en Los Frailes que distribuimos temporalmente por esa zona. Aunque somos una empresa reciente, eso no quita que seamos personas responsables. Cada miembro de esta empresa es alguien con vasta experiencia en el mercado.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
