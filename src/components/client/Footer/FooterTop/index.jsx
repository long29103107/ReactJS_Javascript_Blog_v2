import { Container, Row, Col } from 'reactstrap';
import './FooterTop.scss';
import { faFacebook, faInstagram, faYoutube, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FooterTop() {
  const listIcon = [
    faTwitter,
    faFacebook,
    faLinkedin,
    faInstagram,
    faYoutube
  ];

  const infos = [
    {
      icon: 'map-marker',
      title: '123 News Street, NY, USA'
    },
    {
      icon: 'envelope',
      title: 'info@example.com'
    },
    {
      icon: 'phone-alt',
      title: '+123-456-7890'
    }
  ];

  const listMenu = [
    'Lorem ipsum',
    'Pellentesque',
    'Aenean vulputate',
    'Vestibulum sit amet'
  ];

  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6">
            <div className="footer-widget">
              <h3 className="title">Get in Touch</h3>
              <div className="contact-info">
                {infos && infos.map((item, index) => <p  key={index}><FontAwesomeIcon icon={item.icon} /> {item.title}</p>)}
                <div className="social">
                  {listIcon && listIcon.map((item, index) => <a href="#" key={index}><FontAwesomeIcon icon={item} /></a>)}
                </div>
              </div>
            </div>
          </Col>

          <Col lg="3" md="6">
            <div className="footer-widget">
              <h3 className="title">Useful Links</h3>
              <ul>
                {listMenu && listMenu.map((item, index) => <li key={index}><a href="#"><FontAwesomeIcon icon="arrow-right" /> {item}</a></li>)}
              </ul>
            </div>
          </Col>

          <Col lg="3" md="6">
            <div className="footer-widget">
              <h3 className="title">Quick Links</h3>
              <ul>
              {listMenu && listMenu.map((item, index) => <li key={index}><a href="#"><FontAwesomeIcon icon="arrow-right" /> {item}</a></li>)}
              </ul>
            </div>
          </Col>

          <Col lg="3" md="6">
            <div className="footer-widget">
              <h3 className="title">Newsletter</h3>
              <div className="newsletter">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed porta dui. Class aptent taciti sociosqu
                </p>
                <form>
                  <input className="form-control" type="email" placeholder="Your email here" />
                  <button className="btn">Submit</button>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterTop;