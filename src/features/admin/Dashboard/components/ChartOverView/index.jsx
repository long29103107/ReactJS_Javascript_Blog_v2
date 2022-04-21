import { Row, Col } from 'reactstrap';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartBar from './ChartBar';
import ChartLine from './ChartLine';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function ChartOverView() {

  return (
    <Row className="mt-4">
      <Col lg="5" className="mb-lg-0 mb-4">
        <ChartBar />
      </Col>
      <Col lg="7">
          <ChartLine />
      </Col>
    </Row>
  )
}

export default ChartOverView;