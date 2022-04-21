import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Brand.scss';

function Brand() {
  return (
    <div className="brand">
    <Container>
      <Row className="align-items-center">
        <Col lg="3" md="4">
          <div className="b-logo">
            <a href="index.html">
              <img src={require('assets/client/img/logo.png')} alt="Logo" />
            </a>
          </div>
        </Col>
        <Col lg="6" md="4"></Col>
        <Col lg="3" md="4">
          <div className="b-search">
            <input type="text" placeholder="Tìm kiếm" />
            <button>
              <FontAwesomeIcon icon="search" />
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default Brand;