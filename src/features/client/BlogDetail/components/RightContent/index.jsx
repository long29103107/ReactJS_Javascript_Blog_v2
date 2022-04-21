import { Col } from 'reactstrap';
import NewsCategory from '../NewsCategory';
import TagCloud from '../TagCloud';
import ThisCategory from '../ThisCategory';
import TabNews from 'components/client/TabNews'
import './RightContent.scss';

function RightContent() {

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
  return (
    <Col lg="4">
      <div className="sidebar">
        <ThisCategory />

        {/* <TabNews
          tabList={tabListNews}
          className="tab-news" 
        /> */}

        <NewsCategory />

        <TagCloud />

      </div>
    </Col>
  )
}

export default RightContent;