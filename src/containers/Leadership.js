import React from 'react';
import HeroImage from '../components/HeroImage';
import LocationBox from '../components/LocationBox';
import LeadershipHero from '../assets/images/lion.jpg';
import LeadershipPortrait from '../assets/images/contact.jpg';

import { Row, Col } from 'antd';

class Leadership extends React.Component {
  render() {
    return (
      <div>
        <LocationBox
          mainHeader={'OUR EXECUTIVE'}
          subHeader={'Leadership'}
          start={'Home'}
          end={'Leadership'}
        />
        <HeroImage
          height={100}
          background={LeadershipHero}
          bottomHeader={'LEADERSHIP'} />

        <Row className="gutter-row" id="firm-overview" gutter={45} style={{paddingTop: 50, paddingBottom: 50}}>

          <Col className="paragraph-emphasis" xs={24} md={{ span: 8, offset: 4 }} style={{paddingBottom: 30}}>
            <img src={LeadershipPortrait} alt="leadership" />
          </Col>
          <Col className="paragraph" xs={24} md={8}>
            <h3 className="portfolio-callout">Anthony Melillo</h3>
            <h3 className="section-header section-header-grey" style={{ marginTop: 10 }}>MANAGING PRINCIPAL</h3>
            <p style={{ marginTop: 20 }}>Anthony M. Melillo is Managing Partner and Founder of Melillo Equities. Mr. Melillo has been involved in all phases of the firm’s development since its founding in 2012. Driven by his passion to rebuild underserved urban communities, Mr. Melillo recognized that revitalization efforts were being disproportionately directed towards larger MSAs and positioned Melillo Equities as a conduit for capital to flow freely into the small cap, transit-oriented submarkets that had been previously overlooked.</p>
            <br />
            <p>Prior to founding Melillo Equities, Mr. Melillo worked at ABM Industries as the Director of Mergers & Acquisitions, overseeing end-to-end purchase and integration of target companies, while also supporting the Treasurer to create and manage all capital related initiatives, including a $50 million share repurchase program, a $650 million credit facility syndication, and a $100 million internal financing arm (ABM Energy Capital).</p>
            <br />
            <p>Mr. Melillo is an active philanthropist both within his community and throughout New Jersey. In addition to volunteering with local churches and civil services, he is an impassioned advocate and volunteer for local land preservation trusts in their efforts to provide municipalities with the tools necessary to combat sprawl and rampant development of New Jersey’s priceless watersheds and viewsheds.</p>
            <br />
            <p>Mr. Melillo graduated with a BS in Economics from the Wharton School at the University of Pennsylvania, with a dual concentration in Real Estate Finance and Business Management.</p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Leadership;
