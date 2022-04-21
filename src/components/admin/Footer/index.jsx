import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer(){
  return (
    <footer className="pt-3">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="copyright text-center text-sm text-muted text-lg-start">
                © {new Date().getFullYear()},
                made with <FontAwesomeIcon icon="heart" /> by <a href="https://www.creative-tim.com" className="font-weight-bold" target="_blank"> Creative Tim </a> for a better web.
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}

export default Footer;