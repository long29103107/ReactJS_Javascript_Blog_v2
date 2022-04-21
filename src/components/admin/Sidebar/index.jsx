import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import './Sidebar.scss'

function Sidebar() {
  const url = window.location.origin;
  const currentRoute = useLocation();
  const activeSidebar = (href) => {

    return currentRoute.pathname.includes(href) ? 'active' : '';
  }

  const data = [
    {
      href: '/admin/dashboard',
      icon: 'chart-column',
      title: 'Dashboard',
    },
    {
      href: '/admin/blog',
      icon: 'blog',
      title: 'Blog',
    },
    {
      href: '/admin/category',
      icon: 'list-alt',
      title: 'Category',
    }
  ];

  return (
    <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 " id="sidenav-main">
      <div className="sidenav-header">
        <FontAwesomeIcon icon="times" className="p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" id="iconSidenav"  />
        <Link className="navbar-brand m-0" to="/admin/dashboard">
          <img src={require('assets/admin/img/logo-ct.png')} className="navbar-brand-img h-100" alt="main_logo" />
          <span className="ms-1 font-weight-bold">Blog Admin</span>
        </Link>
      </div>
      <hr className="horizontal dark mt-0" />
      <div className="collapse navbar-collapse  w-auto  max-height-vh-100 h-100" id="sidenav-collapse-main">
        <ul className="navbar-nav">
          {data && data.map((value, index) =>
            <li className="nav-item" key={index}>
              <Link className={"nav-link " + activeSidebar(value.href)} to={value.href}>
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon icon={value.icon} />
                </div>
                <span className="nav-link-text ms-1">{value.title}</span>
              </Link>
            </li>
            )}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;