import React from 'react';
import {Row, Col, Icon} from 'antd';
 

class CallOut extends React.Component {

  render() {

    return (
      <Row>
        <Col className="portfolio-block portfolio-text-block" style={{height: 220 + 'px'}} xs={24} md={24}>
          <div className="portfolio-block-outer" style={{height: 70 + '%'}}>
            <div style={{marginLeft: 150 + 'px'}}>
              <h5 className="portfolio-callout-small left">Our</h5>
              <h3 className="portfolio-callout left">Vision</h3>
            </div>
            <div
              className="portfolio-line margin-auto-right left"
              style={{
              width: 370 + 'px'
            }}>
              <h4 className="portfolio-learn right">
                <a style={{
                  color: '#72736e'
                }}>LEARN ABOUT OUR VISION
                  <Icon
                    style={{
                    color: '#72736e'
                  }}
                    type="arrow-right"/></a>
              </h4>
            </div>
          </div>
        </Col>
      </Row>

    );
  }
}

export default CallOut;
