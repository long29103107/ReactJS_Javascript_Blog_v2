import { Container, Row, Col } from 'reactstrap';
import Topbar from './Topbar';
import Brand from './Brand';

function Header() {
  return (
    <>
      <Topbar />
      <Brand />
    </>
  );
}

export default Header;
