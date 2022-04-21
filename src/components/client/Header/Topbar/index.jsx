import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'reactstrap';
import './Topbar.scss';
import { faFacebook, faInstagram, faYoutube, faLinkedin,faTwitter } from "@fortawesome/free-brands-svg-icons"

function Topbar() {
  const contact = [
    {
      icon: 'envelope',
      title: 'info@mail.com'
    },
    {
      icon: 'phone-alt',
      title: '+012 345 6789'
    }
  ];

  const listIcon = [
    faTwitter,
    faFacebook,
    faLinkedin,
    faInstagram,
    faYoutube
  ];

  return (
    <div className="top-bar">
      <Container>
        <Row>
          <Col md="6">
            <div className="tb-contact">
              {contact && contact.map((item, index) => <p key={index}>
                <FontAwesomeIcon icon={item.icon} /> {item.title}
              </p>)}
            </div>
          </Col>
          <Col md="6">
            <div className="tb-menu">
              {listIcon && listIcon.map((item, index) => <a key={index} href="#"><FontAwesomeIcon icon={item}/></a>)}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Topbar;