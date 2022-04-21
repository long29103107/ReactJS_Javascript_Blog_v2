import { Outlet, useLocation } from 'react-router-dom';
import Header from 'components/client/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMenu from 'components/client/NavbarMenu';
import Footer from 'components/client/Footer';
import ButtonBackToTop from 'components/client/ButtonBackToTop';
import Breadcrumb from 'components/client/Breadcrumb';

function Layout() {
  const match = useLocation();
  
  return (
    <>
      <Header />
      <NavbarMenu />
      {match.pathname !== '/' && ( <Breadcrumb />)}
      <Outlet />
      <Footer />
      <ButtonBackToTop />
    </>
  );
}

export default Layout;