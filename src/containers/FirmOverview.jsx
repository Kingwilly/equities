import React from "react";
import HeroImage from "../components/HeroImage";
import Landscape from "../assets/images/csr-landscape.jpg";
import OverviewBackground from "../assets/images/vemont.jpg";
import UrbanPlanningBackground from "../assets/images/urban-planning.png";
import LocationBox from "../components/LocationBox";

import { Row, Col, Anchor } from "antd";
const { Link } = Anchor;

export default function FirmOverview() {
  return (
    <div style={{ marginBottom: -300 }}>
      <LocationBox
        mainHeader={"OUR"}
        subHeader={"Firm"}
        start={"Home"}
        end={"Our Firm"}
      />
      <HeroImage
        height={100}
        background={OverviewBackground}
        bottomHeader={"FIRM OVERVIEW"}
      />

      <Row
        className="gutter-row"
        id="firm-overview"
        gutter={45}
        style={{ paddingTop: 30 }}
      >
        <Col
          className="paragraph-emphasis"
          xs={24}
          md={{ span: 8, offset: 4 }}
          style={{ paddingBottom: 30 }}
        >
          <span>MELILLO EQUITIES</span> is a vertically integrated real estate
          private equity firm with geographical concentration in some of New
          Jersey’s most historically vibrant transit-oriented submarkets.
        </Col>
        <Col className="paragraph" xs={24} md={8}>
          <p>
            With access to a variety of discretionary open-end and closed-end
            funds, we provide our clients scalable investment opportunities
            within small cap markets.
          </p>
          <br />
          <p>
            Melillo Equities invests in all major real estate classifications,
            including office, retail, residential and industrial properties, as
            well as emerging asset classes such as affordable housing and
            self-storage. In doing so, we target assets along the full range of
            the risk-return spectrum, from core to opportunistic.
          </p>
        </Col>
        <Col md={{ span: 4 }} style={{ zIndex: 9999 }} className="anchor-menu">
          <Anchor affix={true} offsetTop={223} showInkInFixed={true}>
            <Link href="#firm-overview" title="FIRM OVERVIEW" />
            <Link href="#our-vision" title="OUR VISION" />
            <Link href="#leadership" title="LEADERSHIP" />
            <Link href="#esg" title="ESG" />
          </Anchor>
        </Col>
      </Row>
      <Row style={{ paddingTop: 120 }} id="our-vision">
        <Col xs={24} md={{ span: 16, offset: 4 }}>
          <h1 className="blue-main-header" style={{ marginBottom: -5 }}>
            OUR VISION
          </h1>
        </Col>
      </Row>
      <Row className="gutter-row" gutter={45} style={{ paddingTop: 20 }}>
        <Col
          className="paragraph-emphasis"
          xs={24}
          md={{ span: 16, offset: 4 }}
        >
          <span>RAPID URBANIZATION</span> is bringing about many challenges in
          the spatial distribution of people and resources, as well as in the
          use and consumption of land.
        </Col>
      </Row>
      <Row className="gutter-row" gutter={45} style={{ paddingTop: 30 }}>
        <Col className="paragraph" xs={24} md={12}>
          <img src={UrbanPlanningBackground} alt="Urban Planning Background" />
        </Col>
        <Col className="paragraph" xs={24} md={8}>
          <p>
            With traditional zoning policies encouraging the development of
            single use properties, we find horizontally sprawling cities
            struggling to cope with the infrastructure deficiencies, congestion,
            and social disaggregation that result.
          </p>
          <br />
          <p>
            At Melillo Equities, we strive to achieve our vision of "Urbanism
            Redefined” by embracing a comprehensive approach to confronting
            these challenges, focusing on:
          </p>
          <br />
          <ul className="bullet-list">
            <li>Implementation of effective urban planning strategies;</li>
            <li>
              Collaboration with local officials at all levels of government;
            </li>
            <li>
              Integration of public infrastructure, open space and pedestrian
              friendly streetscapes;
            </li>
            <li>Promotion of social connectivity and diversity.</li>
          </ul>
          <br />
          <p>
            In pursuing this holistic strategy, we also recognize that dynamic
            innovation is most beneficial when coupled with deliberate
            conservation. To that end, we regard New Jersey’s urban centers as
            important chroniclers of our shared history in addition to being
            powerful facilitators of social, economic and environmental
            progress.
          </p>
        </Col>
      </Row>
      <Row style={{ paddingTop: 120 }} id="leadership">
        <Col xs={24} md={{ span: 16, offset: 4 }}>
          <h1 className="blue-main-header" style={{ marginBottom: -5 }}>
            LEADERSHIP
          </h1>
        </Col>
      </Row>
      <Row className="gutter-row" gutter={45} style={{ paddingTop: 20 }}>
        <Col
          className="paragraph-emphasis"
          xs={24}
          md={{ span: 16, offset: 4 }}
        >
          <span>ANTHONY M. MELILLO</span> is Managing Partner and Founder of
          Melillo Equities. Mr. Melillo has been involved in all phases of the
          firm’s development since its founding in 2012.
        </Col>
      </Row>
      <Row className="gutter-row" gutter={45} style={{ paddingTop: 30 }}>
        <Col className="paragraph" xs={24} md={{ span: 8, offset: 4 }}>
          <p>
            Driven by his passion to rebuild underserved urban communities, Mr.
            Melillo recognized that revitalization efforts were being
            disproportionately directed toward larger MSAs and positioned
            Melillo Equities as a conduit for capital to flow freely into the
            small cap, transit-oriented submarkets that had been previously
            overlooked.
          </p>
          <br />
          <p>
            Prior to founding Melillo Equities, Mr. Melillo worked at ABM
            Industries as the Director of Mergers & Acquisitions, overseeing
            end-to-end purchase and integration of target companies, while also
            supporting the Treasurer to create and manage all capital related
            initiatives, including a $50 million share repurchase program, a
            $650 million credit facility syndication, and a $100 million
            internal financing arm (ABM Energy Capital).
          </p>
          <br className="visible-mobile" />
        </Col>
        <Col className="paragraph" xs={24} md={8}>
          <p>
            Mr. Melillo is an active philanthropist both within his community
            and throughout New Jersey. In addition to volunteering with local
            churches and civil services, he is an impassioned advocate and
            volunteer for local land preservation trusts in their efforts to
            provide municipalities with the tools necessary to combat sprawl and
            rampant development of New Jersey’s priceless watersheds and
            viewsheds.
          </p>
          <br />
          <p>
            Mr. Melillo graduated with a BS in Economics from the Wharton School
            at the University of Pennsylvania, with a dual concentration in Real
            Estate Finance and Business Management.
          </p>
        </Col>
      </Row>
      <Row style={{ paddingTop: 120 }} id="esg">
        <Col xs={24} md={{ span: 16, offset: 4 }}>
          <h1 className="blue-main-header">ESG</h1>
          <h2
            className="blue-sub-header"
            style={{ marginTop: 10, fontSize: "23px", lineHeight: "26px" }}
          >
            ENVIRONMENTAL, SOCIAL, & GOVERNANCE
          </h2>
        </Col>
      </Row>
      <Row className="gutter-row" gutter={40}>
        <Col
          className="paragraph paragraph-padding"
          xs={24}
          md={{ span: 12, offset: 6 }}
        >
          <h3 className="section-header-blue">ARCHITECTURAL CONSERVATION</h3>
          <p>
            We seek to protect the rich heritage of historically sensitive
            localities through the preservation of architecturally significant
            buildings that reflect elements of social, economic and political
            history. Such preservation efforts provide aesthetic benefits, while
            also bolstering community pride.
          </p>
        </Col>
      </Row>
      <Row className="gutter-row" gutter={40}>
        <Col
          className="paragraph paragraph-padding"
          xs={24}
          md={{ span: 12, offset: 6 }}
        >
          <h3 className="section-header-blue">ENVIRONMENTAL ACTION</h3>
          <p>
            Our dedication to land preservation is unparalleled among industry
            competitors. We see it as our responsibility to more efficiently
            utilize developed lands as a means for accommodating population
            growth. Our collaboration with certified 501(c)(3) land preservation
            trusts and local officials help protect and preserve New Jersey’s
            viewsheds and natural resources for future generations to enjoy.
          </p>
        </Col>
      </Row>
      <Row className="gutter-row" gutter={40}>
        <Col
          className="paragraph paragraph-padding"
          xs={24}
          md={{ span: 12, offset: 6 }}
        >
          <h3 className="section-header-blue">CORPORATE ALIGNMENT</h3>
          <p>
            We provide our clients with total investment continuity, linking our
            investment directive with the overall vision. Each capital
            investment is governed independently through a series of internal
            procedures and controls allowing for client and management to
            function harmoniously.
          </p>
        </Col>
      </Row>
      <Row className="gutter-row" gutter={40}>
        <Col
          className="paragraph paragraph-padding"
          xs={24}
          md={{ span: 12, offset: 6 }}
        >
          <h3 className="section-header-blue">SUSTAINABLE GROWTH</h3>
          <p>
            It is projected that two-thirds of the world’s population will be
            living in urban areas by 2050. Concentrated population growth of
            this magnitude will most certainly present numerous challenges,
            including pollution, strains on existing infrastructure, and
            socioeconomic inequality. We believe urban planning will be crucial
            to ameliorating these consequences, and combined with regulation
            reform and advancements in technology can offer the opportunity for
            long term sustainability.
          </p>
        </Col>
      </Row>
      <Row style={{ top: -300, zIndex: -1 }}>
        <HeroImage height={150} background={Landscape} fadeOnScroll={true} />
      </Row>
    </div>
  );
}
