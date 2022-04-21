import { Card, CardBody, CardHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
function Orders() {
  const data = [
    {
      icon: 'ni ni-bell-55',
      title: '$2400, Design changes',
      time: '22 DEC 7:20 PM',
      textType: 'success'
    },
    {
      icon: 'ni ni-html5',
      title: 'New order #1832412',
      time: '21 DEC 11 PM',
      textType: 'warning'
    },
    {
      icon: 'ni ni-cart',
      title: 'Server payments for April',
      time: '21 DEC 9:34 PM',
      textType: 'danger'
    },
     {
      icon: 'ni ni-bell-55',
      title: '$2400, Design changes',
      time: '22 DEC 7:20 PM',
      textType: 'info'
    },
    {
      icon: 'ni ni-html5',
      title: 'New order #1832412',
      time: '21 DEC 11 PM',
      textType: 'primary'
    },
    {
      icon: 'ni ni-cart',
      title: 'Server payments for April',
      time: '21 DEC 9:34 PM',
      textType: 'dark'
    }
  ]
  return (
    <Card className="h-100">
      <CardHeader className="pb-0">
        <h6>Orders overview</h6>
        <p className="text-sm">
          <FontAwesomeIcon icon="arrow-up" className="text-success" aria-hidden="true"/>
          <span className="font-weight-bold"> 24%</span> this month
        </p>
      </CardHeader>
      <CardBody className="p-3">
        <div className="timeline timeline-one-side">
          {data && data.map((item, index) => 
            <div className="timeline-block mb-3" key={index}>
              <span className="timeline-step">
                <i className={`${item.icon} text-${item.textType} text-gradient`}></i>
              </span>
              <div className="timeline-content">
                <h6 className="text-dark text-sm font-weight-bold mb-0">{item.title}</h6>
                <p className="text-secondary font-weight-bold text-xs mt-1 mb-0">{item.time}</p>
              </div>
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  )
}
export default Orders;