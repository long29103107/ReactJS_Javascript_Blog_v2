import { Container, Row } from 'reactstrap';
import LeftContent from '../LeftContent';
import RightContent from '../RightContent';
import './Content.scss';

function Content() {
  return (
    <div className="single-news">
      <Container>
        <Row>
          <LeftContent />

          <RightContent />
        </Row>
      </Container>
    </div>

  )
}

export default Content;