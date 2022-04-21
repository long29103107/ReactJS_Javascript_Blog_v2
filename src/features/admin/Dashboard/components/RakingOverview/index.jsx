import Projects from './Projects';
import { Col, Row } from 'reactstrap';
import Orders from './Orders';

function RankingOverview() {
  return (
    <Row className="my-4">
        <Col lg="8" md="6" className="mb-md-0 mb-4">
          <Projects />
        </Col>
        <Col lg="4" md="6">
          <Orders />
        </Col>
      </Row>
  )
}

export default RankingOverview;