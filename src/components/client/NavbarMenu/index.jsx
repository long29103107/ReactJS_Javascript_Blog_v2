import { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from 'reactstrap';
import './NavbarMenu.scss';
import { NavLink as RRNavLink } from 'react-router-dom';

function NavbarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled,setScrolled]= useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll);

    return () => {
      window.removeEventListener('scroll',handleScroll);
    }
  })

  return (
    <div className={`nav-bar ${scrolled ? 'nav-sticky' : ''}`}>
      <Container>
        <Navbar color="light" light expand="md" className="fix-container-fluid">
          <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
          <Collapse isOpen={isOpen} navbar  className="fix-left">
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink to="/" tag={RRNavLink}>Trang chủ</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="blog/1" tag={RRNavLink}>Trang chi tiết</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default NavbarMenu;