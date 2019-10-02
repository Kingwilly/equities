import React from 'react';
import {Row, Col, Icon} from 'antd';
import PeapackGladstoneMap from '../assets/images/maps/peapack-gladstone.svg';
import LeadershipBackground from '../assets/images/leadership-hero.jpg';

class OurSplitSection extends React.Component {

  render() {

    return (
      <div>
        <Row>
          <Col
            className='portfolio-block portfolio-text-block'
            style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: `url(${PeapackGladstoneMap})`
          }}
            xs={24}
            md={12}>
          </Col>
          <Col
            className="portfolio-block portfolio-text-block"
            style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: `url(${LeadershipBackground})`
          }}
            xs={24}
            md={12}>
            <div className="portfolio-block-outer center">
                <h3 className="portfolio-callout">OUR EXECUTIVE</h3>
                <h4 className="portfolio-learn">
                  <a style={{
                    color: '#72736e'
                  }}>
                    <Icon
                      style={{
                      color: '#72736e'
                    }}
                      type="arrow-left"/></a>
                </h4>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default OurSplitSection;
