import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Projects() {
  const data = [
    {
      logo: '',
      title: 'Soft UI XD Version',
      budget: '$14,000',
      completion: 60
    },
    {
      logo: '',
      title: 'Add Progress Track',
      budget: '$3,000',
      completion: 10
    },
    {
      logo: '',
      title: 'Fix Platform Errors',
      budget: 'Not set',
      completion: 100
    },
    {
      logo: '',
      title: 'Launch our Mobile App',
      budget: '$20,500',
      completion: 100
    },
    {
      logo: '',
      title: 'Add the New Pricing Page',
      budget: '$500',
      completion: 25
    },
    {
      logo: '',
      title: 'Redesign New Online Shop',
      budget: '$2,000',
      completion: 40
    }
  ]
  return (
    <Card>
      <CardHeader className="pb-0">
        <Row>
          <Col lg="6" xs="7">
            <h6>Projects</h6>
            <p className="text-sm mb-0">
              <FontAwesomeIcon className="text-info" style={{ height: 0.875 + 'rem'}} icon="check"  aria-hidden="true"/>
              <span className="font-weight-bold ms-1">30 done</span> this month
            </p>
          </Col>
          <Col lg="6" xs="5" className="my-auto text-end">
            <div className="dropdown float-lg-end pe-4">
              <a className="cursor-pointer" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-ellipsis-v text-secondary"></i>
              </a>
              <ul className="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5" aria-labelledby="dropdownTable">
                <li><a className="dropdown-item border-radius-md" href="!#">Action</a></li>
                <li><a className="dropdown-item border-radius-md" href="!#">Another action</a></li>
                <li><a className="dropdown-item border-radius-md" href="!#">Something else here</a></li>
              </ul>
            </div>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="px-0 pb-2">
        <div className="table-responsive">
          <table className="table align-items-center mb-0">
            <thead>
              <tr>
                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Companies</th>
                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Members</th>
                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Budget</th>
                <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Completion</th>
              </tr>
            </thead>
            <tbody>
              {data && data.map((item,index) => 
                <tr key={index}>
                  <td>
                    <div className="d-flex px-2 py-1">
                      <div>
                        <img src={require('assets/admin/img/small-logos/logo-spotify.jpg')} className="avatar avatar-sm me-3" alt="xd" />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="mb-0 text-sm">{item.title}</h6>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="avatar-group mt-2">
                      <a href="!#" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                        <img src={require('assets/admin/img/team-1.jpg')} alt="team1" />
                      </a>
                      <a href="!#" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                        <img src={require('assets/admin/img/team-2.jpg')} alt="team2" />
                      </a>
                      <a href="!#" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Alexander Smith">
                        <img src={require('assets/admin/img/team-3.jpg')} alt="team3" />
                      </a>
                      <a href="!#" className="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                        <img src={require('assets/admin/img/team-4.jpg')} alt="team4" />
                      </a>
                    </div>
                  </td>
                  <td className="align-middle text-center text-sm">
                    <span className="text-xs font-weight-bold"> {item.budget} </span>
                  </td>
                  <td className="align-middle">
                    <div className="progress-wrapper w-75 mx-auto">
                      <div className="progress-info">
                        <div className="progress-percentage">
                          <span className="text-xs font-weight-bold">{item.completion}%</span>
                        </div>
                      </div>
                      <div className="progress">
                        <div className={"progress-bar " + (item.completion == 100 ? 'bg-gradient-success' : 'bg-gradient-info') + " w-" + item.completion} role="progressbar" aria-valuenow={item.completion} aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </td>
                </tr>
                )}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  )
}

export default Projects;