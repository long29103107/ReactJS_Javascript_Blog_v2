import { Container, Row, Col } from 'reactstrap';
import './TopNews.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function TopNews() {
  const sliderLeft = [
    {
      src: 'news-450x350-1.jpg',
      title: 'Lorem ipsum dolor sit amet'
    },
    {
      src: 'news-450x350-2.jpg',
      title: 'Lorem ipsum dolor sit amet'
    }
  ];

  const sliderRight = [
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

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="top-news">
      <Container>
        <Row>
          <Col md="6" className="tn-left">
            <Slider {...settings}>
                {sliderLeft && sliderLeft.map((item, index) => 
                  <div className="tn-img" key={index}>
                    <img src={require(`assets/client/img/${item.src}`)} />
                    <div className="tn-title">
                      <a href="#">{item.title}</a>
                    </div>
                  </div>
                )}
            </Slider>
          </Col>
          <Col md="6" className=" tn-right">
            <Row>
              {sliderRight && sliderRight.map((item, index) =>
                <Col md="6" key={index}>
                  <div className="tn-img" key={index}>
                    <img src={require(`assets/client/img/${item.src}`)} />
                    <div className="tn-title">
                      <a href="#">{item.title}</a>
                    </div>
                  </div>
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TopNews;