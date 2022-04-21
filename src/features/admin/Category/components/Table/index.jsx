function Table() {
  const data = [
    {
      src: 'team-2.jpg',
      name: 'John Michael',
      email: 'john@creative-tim.com',
      position: 'Manager',
      status: true,
      date: '23/04/18'
    },
    {
      src: 'team-3.jpg',
      name: 'Alexa Liras',
      email: 'alexa@creative-tim.com',
      position: 'Programator',
      status: false,
      date: '23/04/18'
    },
    {
      src: 'team-4.jpg',
      name: 'Laurent Perrier',
      email: 'laurent@creative-tim.com',
      position: 'Executive',
      status: true,
      date: '23/04/18'
    },
    {
      src: 'team-2.jpg',
      name: 'John Michael',
      email: 'john@creative-tim.com',
      position: 'Manager',
      status: true,
      date: '23/04/18'
    },
    {
      src: 'team-3.jpg',
      name: 'Alexa Liras',
      email: 'alexa@creative-tim.com',
      position: 'Programator',
      status: false,
      date: '23/04/18'
    },
    {
      src: 'team-4.jpg',
      name: 'Laurent Perrier',
      email: 'laurent@creative-tim.com',
      position: 'Executive',
      status: true,
      date: '23/04/18'
    },
  ]
  return (
    <table className="table align-items-center mb-0">
      <thead>
        <tr>
          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Author</th>
          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Function</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Employed</th>
          <th className="text-secondary opacity-7"></th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((item, index) => 
          <tr key={index}>
            <td>
              <div className="d-flex px-2 py-1">
                <div>
                  <img src={require(`assets/admin/img/${item.src}`)} className="avatar avatar-sm me-3" alt="user1" />
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <h6 className="mb-0 text-sm">{item.name}</h6>
                  <p className="text-xs text-secondary mb-0">{item.email}</p>
                </div>
              </div>
            </td>
            <td>
              <p className="text-xs font-weight-bold mb-0">{item.position}</p>
            </td>
            <td className="align-middle text-center text-sm">
              <span className={"badge badge-sm bg-gradient-" + (item.status ? 'success' : 'secondary')}>{item.status ? 'Online' : 'Offline'}</span>
            </td>
            <td className="align-middle text-center">
              <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
            </td>
            <td className="align-middle">
              <a href="" onClick={e=>e.preventDefault()}  className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                Edit
              </a>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
export default Table;