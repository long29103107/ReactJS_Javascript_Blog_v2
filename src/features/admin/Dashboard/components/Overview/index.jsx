import { Row, Col, Card, CardBody} from 'reactstrap';

function Overview() {
  const data = [
    {
      title: 'Today\'s Money',
      data: '$53,000',
      deviant: '+55%',
      icon: 'ni ni-money-coins',
      textType: 'text-success'
    },
    {
      title: 'Today\'s Users',
      data: '2,300',
      deviant: '+3%',
      icon: 'ni ni-world',
      textType: 'text-success'
    },
    {
      title: 'New Clients',
      data: '+3,462',
      deviant: '-2%',
      icon: 'ni ni-paper-diploma',
      textType: 'text-danger'
    },
    {
      title: 'Sales',
      data: '$103,430',
      deviant: '+5%',
      icon: 'ni ni-cart',
      textType: 'text-success'
    },
  ]
  return (
    <Row>
        {data && data.map((item, index) => 
          <Col xl="3" sm="6" className="mb-xl-0 mb-4" key={index}>
            <Card>
              <CardBody className="p-3">
                <Row>
                  <Col xs="8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-capitalize font-weight-bold">{item.title} </p>
                      <h5 className="font-weight-bolder mb-0">
                        {item.data}
                        <span className={item.textType + " text-sm font-weight-bolder"}> {item.deviant}</span>
                      </h5>
                    </div>
                  </Col>
                  <Col xs="4" className="text-end">
                    <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                      <i className={item.icon + " text-lg opacity-10"} aria-hidden="true"></i>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        )}
      </Row>
  )
} 

export default Overview;