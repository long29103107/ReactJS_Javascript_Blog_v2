import { Container } from 'reactstrap';
import './Breadcrumb.scss';

function Breadcrumb() {
  return (
    <div className="breadcrumb-wrap">
      <Container>
          <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">News</a></li>
              <li className="breadcrumb-item active">News details</li>
          </ul>
      </Container>
  </div>
  )
}

export default Breadcrumb;