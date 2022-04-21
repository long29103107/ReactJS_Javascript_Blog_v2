function TagCloud() {
  const tags = [
    'National',
    'International',
    'Economics',
    'Politics',
    'National',
    'Lifestyle',
    'Technology',
    'Trades',
  ]
  return (
    <div className="sidebar-widget">
      <h2 className="sw-title">Tags Cloud</h2>
      <div className="tags">
        {tags && tags.map((item, index) => 
          <a href="#" key={index}>{item}</a>
        )}
      </div>
    </div>
  )
}

export default TagCloud;