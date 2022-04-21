import './FooterMenu.scss';
import { Container } from 'reactstrap'

function FooterMenu() {
  const listFooterMenu = [
    'Terms of use',
    'Privacy policy',
    'Cookies',
    'Accessibility help',
    'Advertise with us',
    'Contact us'
  ]
  return (
    <div className="footer-menu">
      <Container>
        <div className="f-menu">
          {listFooterMenu && listFooterMenu.map((item, index) => <a href="#" key={index}>{item}</a>)}
        </div>
      </Container>
    </div>
  )
}

export default FooterMenu;