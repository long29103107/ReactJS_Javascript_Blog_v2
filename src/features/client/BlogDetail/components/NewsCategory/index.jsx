import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function NewsCategory() {
  const newsCategories = [
    {
      title: 'National',
      count: 98
    },
    {
      title: 'International',
      count: 87
    },
    {
      title: 'Economics',
      count: 76
    },
    {
      title: 'Politics',
      count: 65
    },
    {
      title: 'Lifestyle',
      count: 54
    },
    {
      title: 'Technology',
      count: 43
    },
    {
      title: 'Trades',
      count: 32
    }
  ]
  return (
    <div className="sidebar-widget">
      <h2 className="sw-title">News Category</h2>
      <div className="category">
        <ul>
          {newsCategories && newsCategories.map((item, index) => 
            <li key={index}><FontAwesomeIcon icon="arrow-right" /> <a href="#">{item.title}</a><span>({item.count})</span></li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default NewsCategory;