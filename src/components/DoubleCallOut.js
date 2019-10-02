import React from 'react';
import {Row, Col, Icon} from 'antd';
 

class CallOut extends React.Component {

  render() {

    return (
      <Row>
        <Col className="portfolio-block portfolio-text-block" style={{height: 320 + 'px', borderRightWidth: 0 + 'px'}} xs={24} md={12}>
          <div className="portfolio-block-outer" style={{height: 40 + '%'}}>
            <div style={{marginLeft: 150 + 'px'}}>
              <h5 className="portfolio-callout-small left">Investor</h5>
              <h3 className="portfolio-callout left">Login</h3>
            </div>
            <div
              className="portfolio-line margin-auto-right left"
              style={{
              width: 370 + 'px'
            }}>
              <h4 className="portfolio-learn right">
                <a style={{
                  color: '#72736e'
                }}>INVESTOR LOGIN
                  <Icon
                    style={{
                    color: '#72736e'
                  }}
                    type="arrow-right"/></a>
              </h4>
            </div>
          </div>
        </Col>

        <Col className="portfolio-block portfolio-text-block" style={{height: 320 + 'px', borderLeftWidth: 0 + 'px'}} xs={24} md={12}>
        <div className="portfolio-block-outer" style={{height: 40 + '%'}}>
        <div style={{marginRight: 150 + 'px'}}>
        <h5 className="portfolio-callout-small right">Say Hi</h5>
        <h3 className="portfolio-callout right">Contact</h3>
          </div>
          <div className="portfolio-line margin-auto-left right" style={{width: 320 + 'px'}}>
            <h4 className="portfolio-learn left">
              <a style={{
                color: '#72736e'
              }}>CONTACT MELILLO EQUITIES
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
