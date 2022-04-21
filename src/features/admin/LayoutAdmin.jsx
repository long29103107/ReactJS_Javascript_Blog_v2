import { Outlet, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from 'components/admin/Sidebar';
import Header from 'components/admin/Header';
import 'assets/admin/css/nucleo-icons.css';
import 'assets/admin/css/nucleo-svg.css';
import './Template.scss';

function LayoutAdmin() {
  const match = useLocation();
  
  return (
    <>
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <Header />
        <Outlet />
      </main>
    </>
  );
}

export default LayoutAdmin;