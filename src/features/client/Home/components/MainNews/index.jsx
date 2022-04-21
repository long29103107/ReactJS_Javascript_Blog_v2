import './MainNews.scss';
import { Container, Row, Col } from 'reactstrap';

function MainNews() {
  const readMore = [
    'Lorem ipsum dolor sit amet',
    'Pellentesque tincidunt enim libero',
    'Morbi id finibus diam vel pretium enim',
    'Duis semper sapien in eros euismod sodales',
    'Vestibulum cursus lorem nibh',
    'Morbi ullamcorper vulputate metus non eleifend',
    'Etiam vitae elit felis sit amet',
    'Nullam congue massa vitae quam',
    'Proin sed ante rutrum',
    'Curabitur vel lectus',
  ]

  const mainNewsList = [
    {
      src: 'news-350x223-1.jpg',
      title: 'Lorem ipsum dolor sit',
    },
    {
      src: 'news-350x223-2.jpg',
      title: 'Lorem ipsum dolor sit',
    },
    {
      src: 'news-350x223-3.jpg',
      title: 'Lorem ipsu dolor sit',
    },
    {
      src: 'news-350x223-4.jpg',
      title: 'Lorem ipsum dolor sit',
    },
    {
      src: 'news-350x223-5.jpg',
      title: 'Lorem ipsum dolor sit',
    },
    {
      src: 'news-350x223-1.jpg',
      title: 'Lorem ipsum dolor sit',
    },
    {
      src: 'news-350x223-2.jpg',
      title: 'Lorem ipsum dolor sit',
    },
    {
      src: 'news-350x223-3.jpg',
      title: 'Lorem ipsum dolor sit',
    },
    {
      src: 'news-350x223-4.jpg',
      title: 'Lorem ipsum dolor sit',
    }
  ]

  return (
    <div className="main-news">
      <Container>
        <Row>
          <Col lg="9">
            <Row>
              {mainNewsList && mainNewsList.map((item, index) => 
                <Col md="4" key={index}>
                  <div className="mn-img">
                    <img src={require(`assets/client/img/${item.src}`)} />
                    <div className="mn-title">
                      <a href="#">{item.title}</a>
                    </div>
                  </div>
                </Col>
              )}
            </Row>
          </Col>

          <Col lg="3">
            <div className="mn-list">
              <h2>Read More</h2>
              <ul>
                {readMore && readMore.map((item, index) => <li key={index}><a href="#">{item}</a></li>)}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MainNews;