function ThisCategory() {
  const blogs = [
    {
      src: 'news-350x223-1.jpg',
      title: 'Lorem ipsum dolor sit amet consec adipis elit'
    },
    {
      src: 'news-350x223-2.jpg',
      title: 'Lorem ipsum dolor sit amet consec adipis elit'
    },
    {
      src: 'news-350x223-3.jpg',
      title: 'Lorem ipsum dolor sit amet consec adipis elit'
    },
    {
      src: 'news-350x223-4.jpg',
      title: 'Lorem ipsum dolor sit amet consec adipis elit'
    },
    {
      src: 'news-350x223-5.jpg',
      title: 'Lorem ipsum dolor sit amet consec adipis elit'
    }
  ]
  return (
    <div className="sidebar-widget">
      <h2 className="sw-title">In This Category</h2>
      <div className="news-list">
        {blogs && blogs.map((item, index) => 
          <div className="nl-item" key={index}>
            <div className="nl-img">
              <img src={require(`assets/client/img/${item.src}`)} />
            </div>
            <div className="nl-title">
              <a href="#">{item.title}</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ThisCategory;