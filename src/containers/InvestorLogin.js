import React from 'react';
import LocationBox from '../components/LocationBox';

import { Row, Col } from 'antd';
import LoginForm from '../components/LoginForm';

class InvestorLogin extends React.Component {
  render() {
    return (
      <div>
        <LocationBox
          mainHeader={'INVESTOR'}
          subHeader={'Login'}
          start={'Home'}
          end={'Investor Login'}
        />

        <Row className="gutter-row" id="firm-overview" gutter={45} style={{paddingTop: '30vh', paddingBottom: 50}}>

          <Col
            xs={{ span: 18, offset: 3 }}
            sm={{ span: 12, offset: 6 }}
            md={{ span: 10, offset: 7 }}
            lg={{ span: 8, offset: 8 }}
            style={{paddingBottom: 30}}
          >
            <LoginForm />
          </Col>
        </Row>
      </div>
    )
  }
}

export default InvestorLogin;
