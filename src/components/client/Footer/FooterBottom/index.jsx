import './FooterBottom.scss';
import { Container, Row, Col } from 'reactstrap';

function FooterBottom() {
  return (
    <div className="footer-bottom">
      <Container>
        <Row>
          <Col md="6" className="copyright">
            <p>Copyright &copy; <a href="https://htmlcodex.com">HTML Codex</a>. All Rights Reserved</p>
          </Col>

          <Col md="6" className="template-by">
            <p>Template By <a href="https://htmlcodex.com">HTML Codex</a></p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterBottom;