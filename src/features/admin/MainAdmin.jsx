import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from 'components/admin/Sidebar';
import Header from 'components/admin/Header';
import 'assets/admin/css/nucleo-icons.css';
import 'assets/admin/css/nucleo-svg.css';
import './Template.scss';
import './Custom.scss';
import { SidebarContext } from 'contexts/SidebarContext';
import { useContext } from 'react';
import { SHOW_SIDEBAR } from 'contexts/SidebarContext/contants';

function MainAdmin() {
  const [state, dispatch] = useContext(SidebarContext);
  const { isShow } = state;

  return (
    <>
      <Sidebar />
      <main className={`main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ${isShow ? '' : 'collapse-custom'}`}>
        <Header />
        <Outlet />
      </main>
    </>
  )
}

export default MainAdmin;