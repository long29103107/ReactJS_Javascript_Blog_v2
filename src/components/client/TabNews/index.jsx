import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Container, Row, Col } from 'reactstrap';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useState } from 'react';

TabNews.propTypes = {
  tabList: PropTypes.array,
};

TabNews.defaultProps = {
  tabList: [],
}

function TabNews(props) {
  const [isActiveTabNews, setIsActiveTabNews] = useState('0');
  const { tabList }  = props;
  return (
    <>
      <Nav tabs>
        {tabList && tabList.map((tab, index) =>
          <NavItem key={index}>
            <NavLink
              className={clsx({ active: isActiveTabNews === `${index}` }, 'cursor')}
              onClick={() => setIsActiveTabNews(`${index}`)}
            >
              {tab.title}
            </NavLink>
          </NavItem>
        )}
      </Nav>
      <TabContent activeTab={isActiveTabNews}>
        {tabList && tabList.map((tab, index) =>
          <TabPane tabId={`${index}`} key={index}>
            <Row>
              <Col sm="12">
                {tab.data && tab.data.map((item, i) =>
                  <div className="tn-news" key={i}>
                    <div className="tn-img">
                      <img src={require(`assets/client/img/${item.src}`)} />
                    </div>
                    <div className="tn-title">
                      <a href="#">{item.title}</a>
                    </div>
                  </div>
                )}
              </Col>
            </Row>
          </TabPane>
        )}
      </TabContent>
    </>
  )
}

export default TabNews;