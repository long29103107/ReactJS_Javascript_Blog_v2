import Table from '../Table';
import { Container, Row, Card, CardBody, CardHeader, Col } from 'reactstrap';

function ContainerTable() {
  return (
    <div className="py-4">
      <Row>
        <Col xs="12">
          <Card className="mb-4">
            <CardHeader className="pb-0">
              <h6>Authors table</h6>
            </CardHeader>
            <CardBody className="px-0 pt-0 pb-2">
              <div className="table-responsive p-0">
                <Table />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ContainerTable;