import React from 'react';
import {Row, Col, Icon} from 'antd';
import LeafIcon from '../assets/images/leaf.svg'
import PeopleIcon from '../assets/images/people.svg'
import EarthIcon from '../assets/images/earth.svg'
 

class AdditionCallOut extends React.Component {

  render() {

    return (
      <Row>
        <Col
          className="portfolio-block portfolio-text-block"
          style={{
          height: 320 + 'px'
        }}
          xs={24}
          md={24}>
          <div
            className="portfolio-block-outer"
            style={{
            height: 50 + '%'
          }}>
            <Row>
              <Col
                style={{
                textAlign: 'center'
              }}
                lg={{
                span: 3,
                offset: 3,
                order: 'bottom-aligned'
              }}>
                <img
                  src={PeopleIcon}
                  width={160 + 'px'}
                  style={{
                  marginBottom: 30 + 'px'
                }}
                  alt={"Leaf Icon"}/>
                <p className="icon-tagline">COMMUNITY INVOLVEMENT</p>
              </Col>
              <Col
                style={{
                textAlign: 'center'
              }}
                lg={{
                span: 1,
                order: 'bottom-aligned'
              }}>

                <Icon
                  type="plus"
                  style={{
                  marginTop: 100 + 'px',
                  fontSize: 30,
                  color: '#1d4a63'
                }}/>
              </Col>
              <Col
                style={{
                textAlign: 'center'
              }}
                lg={{
                span: 3,
                order: 'bottom-aligned'
              }}>
                <img
                  src={EarthIcon}
                  width={100 + 'px'}
                  style={{
                  marginBottom: 10 + 'px'
                }}
                  alt={"Leaf Icon"}/>
                <p className="icon-tagline">ENVIRONMENTAL ACTION
                </p>
              </Col>
              <Col
                style={{
                textAlign: 'center'
              }}
                lg={{
                span: 1,
                order: 'bottom-aligned'
              }}>

                <Icon
                  type="plus"
                  style={{
                  marginTop: 100 + 'px',
                  fontSize: 30,
                  color: '#1d4a63'
                }}/>
              </Col>
              <Col
                style={{
                textAlign: 'center'
              }}
                lg={{
                span: 3,
                order: 'bottom-aligned'
              }}>
                <img
                  src={LeafIcon}
                  width={100 + 'px'}
                  style={{
                  marginBottom: 15 + 'px'
                }}
                  alt={"Leaf Icon"}/>
                <p className="icon-tagline">SUSTAINABLE GROWTH</p>
              </Col>
              <Col
              style={{
              textAlign: 'center'
            }}
              lg={{
              span: 1,
              order: 'bottom-aligned'
            }}>

              <Icon
              className={'rotate'}
                type="pause"
                style={{
                marginTop: 100 + 'px',
                fontSize: 30,
                color: '#1d4a63'
              }}/>
            </Col>
            <Col
            style={{
            textAlign: 'center'
          }}
            lg={{
            span: 7,
            offset: 1
        
          }}>
            <h1 className="csr-headline">CSR</h1>
            <p className="csr-tagline">CORPORATE SOCIAL RESPONSIBILITY</p>
          </Col>
            </Row>
          </div>
        </Col>
      </Row>

    );
  }
}

export default AdditionCallOut;
