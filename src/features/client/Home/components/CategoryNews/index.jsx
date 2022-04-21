import './CategoryNews.scss';
import { Container, Row, Col } from 'reactstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function CategoryNews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  const listCategoryNews = [
    {
      title: 'Sports',
      data: [
        {
          src: 'news-350x223-1.jpg',
          title: 'Lorem ipsum dolor sit'
        },
        {
          src: 'news-350x223-2.jpg',
          title: 'Lorem ipsum dolor sit'
        },
        {
          src: 'news-350x223-3.jpg',
          title: 'Lorem ipsum dolor sit'
        },
        {
          src: 'news-350x223-4.jpg',
          title: 'Lorem ipsum dolor sit'
        }
      ]
    },
    {
      title: 'Technology',
      data: [
        {
          src: 'news-350x223-1.jpg',
          title: 'Lorem ipsum dolor sit'
        },
        {
          src: 'news-350x223-2.jpg',
          title: 'Lorem ipsum dolor sit'
        },
        {
          src: 'news-350x223-3.jpg',
          title: 'Lorem ipsum dolor sit'
        },
        {
          src: 'news-350x223-4.jpg',
          title: 'Lorem ipsum dolor sit'
        }
      ]
    },
    {
      title: 'Business',
      data: [
        {
          src: 'news-350x223-1.jpg',
          title: 'Lorem ipsum dolor sit'
        },
        {
          src: 'news-350x223-2.jpg',
          title: 'Lorem ipsum dolor sit'
        },
        {
          src: 'news-350x223-3.jpg',
          title: 'Lorem ipsum dolor sit'
        },
        {
          src: 'news-350x223-4.jpg',
          title: 'Lorem ipsum dolor sit'
        }
      ]
    },
    {
      title: 'Entertainment',
      data: [
        {
          src: 'news-350x223-1.jpg',
          title: 'Lorem ipsum dolor sit'
        },
        {
          src: 'news-350x223-2.jpg',
          title: 'Lorem ipsum dolor sit'
        },
        {
          src: 'news-350x223-3.jpg',
          title: 'Lorem ipsum dolor sit'
        },
        {
          src: 'news-350x223-4.jpg',
          title: 'Lorem ipsum dolor sit'
        }
      ]
    }
  ]

  return (
    <div className="cat-news">
      <Container>
        <Row>
          {listCategoryNews && listCategoryNews.map((categoryNews, index) => <Col md="6" key={index}>
            <h2>{categoryNews.title}</h2>
            <Row className="cn-slider">
              <Col md="12">
                <Slider {...settings}>
                  {categoryNews.data && categoryNews.data.map((item, i) => <div key={i} className="cn-img">
                    <img src={require(`assets/client/img/${item.src}`)} />
                    <div className="cn-title">
                      <a href="#">{item.title}</a>
                    </div>
                  </div>)}
                </Slider>
              </Col>
            </Row>
          </Col>
          )}
        </Row>
      </Container>
    </div>
  )
}

export default CategoryNews;