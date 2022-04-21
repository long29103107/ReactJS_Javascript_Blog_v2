import './TabNews.scss';
import TabNewsDetail from 'components/client/TabNews';
import { Container, Row, Col } from 'reactstrap';

function TabNewsContent() {
  const tabListNews = [
    {
      title: 'Featured News',
      data: [
        {
          src: 'news-350x223-1.jpg',
          title: 'Lorem ipsum dolor sit amet',
        },
        {
          src: 'news-350x223-2.jpg',
          title: 'Lorem ipsum dolor sit amet',
        },
        {
          src: 'news-350x223-3.jpg',
          title: 'Lorem ipsum dolor sit amet',
        }
      ]
    },
    {
      title: 'Popular News',
      data: [
        {
          src: 'news-350x223-1.jpg',
          title: 'Lorem ipsum dolor sit amet 1',
        },
        {
          src: 'news-350x223-2.jpg',
          title: 'Lorem ipsum dolor sit amet 1',
        },
        {
          src: 'news-350x223-3.jpg',
          title: 'Lorem ipsum dolor sit amet 1',
        }
      ]
    },
    {
      title: 'Lasted News',
      data: [
        {
          src: 'news-350x223-1.jpg',
          title: 'Lorem ipsum dolor sit amet 2',
        },
        {
          src: 'news-350x223-2.jpg',
          title: 'Lorem ipsum dolor sit amet 2',
        },
        {
          src: 'news-350x223-3.jpg',
          title: 'Lorem ipsum dolor sit amet 2',
        }
      ]
    }
  ];

  const tabListMost = [
    {
      title: 'Most Viewed',
      data: [
        {
          src: 'news-350x223-1.jpg',
          title: 'Lorem ipsum dolor sit amet',
        },
        {
          src: 'news-350x223-2.jpg',
          title: 'Lorem ipsum dolor sit amet',
        },
        {
          src: 'news-350x223-3.jpg',
          title: 'Lorem ipsum dolor sit amet',
        }
      ]
    },
    {
      title: 'Most Read',
      data: [
        {
          src: 'news-350x223-1.jpg',
          title: 'Lorem ipsum dolor sit amet 1',
        },
        {
          src: 'news-350x223-2.jpg',
          title: 'Lorem ipsum dolor sit amet 1',
        },
        {
          src: 'news-350x223-3.jpg',
          title: 'Lorem ipsum dolor sit amet 1',
        }
      ]
    },
    {
      title: 'Most Recent',
      data: [
        {
          src: 'news-350x223-1.jpg',
          title: 'Lorem ipsum dolor sit amet 2',
        },
        {
          src: 'news-350x223-2.jpg',
          title: 'Lorem ipsum dolor sit amet 2',
        },
        {
          src: 'news-350x223-3.jpg',
          title: 'Lorem ipsum dolor sit amet 2',
        }
      ]
    }
  ];

  return (
    <div className="tab-news">
      <Container>
        <Row>
          <Col md="6">
            <TabNewsDetail 
              tabList={tabListNews}
            />
          </Col>

          <Col md="6">
            <TabNewsDetail
              tabList={tabListMost}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TabNewsContent;