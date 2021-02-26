import React from "react";
import HeroImage from "../components/HeroImage";
import StrategyBackground from "../assets/images/strategy-new.jpg";
import LocationBox from "../components/LocationBox";
import InViewMonitor from "react-inview-monitor";
import { Row, Col, Anchor, Collapse } from "antd";
const Panel = Collapse.Panel;
const { Link } = Anchor;

export default function StrategyOverview() {
  return (
    <div>
      <LocationBox
        mainHeader={"OUR"}
        subHeader={"Strategy"}
        start={"Home"}
        end={"Strategy"}
      />
      <HeroImage
        height={100}
        background={StrategyBackground}
        bottomHeader={"STRATEGY"}
      />

      <Row
        className="gutter-row"
        id="strategy-overview"
        gutter={45}
        style={{ paddingTop: 30 }}
      >
        <InViewMonitor
          classNameNotInView="not-in-view"
          classNameInView="in-view"
          intoViewMargin="-20%"
        >
          <Col className="paragraph-emphasis color-fade-in" xs={24} md={{ span: 8, offset: 4 }} style={{ paddingBottom: 30 }}>
            <span>MELILLO EQUITIES</span> pursues investment opportunities
            capitalizing on the development, repositioning and/or recapitalization
            of properties within supply-constrained submarkets.
          </Col>
        </InViewMonitor>
        <Col className="paragraph" xs={24} md={8}>
          <p>
            Within these markets, we source a variety of asset classes across
            the full risk-return spectrum. Once invested, we generate returns
            through unwavering dedication to our investment thesis, which
            integrates leading Urban Planning principles with our comprehensive
            land-use plans.
          </p>
        </Col>
        <Col md={{ span: 4 }} style={{ zIndex: 9999 }} className="anchor-menu">
          <Anchor affix={true} offsetTop={223} showInkInFixed={true}>
            <Link href="#strategy-overview" title="STRATEGY OVERVIEW" />
            <Link href="#acquisition-criteria" title="ACQUISITION CRITERIA" />
            <Link href="#competitive-edge" title="COMPETITIVE EDGE" />
          </Anchor>
        </Col>
      </Row>
      <Row className="gutter-row" gutter={45} style={{ paddingTop: 20 }}>
        <InViewMonitor
          classNameNotInView="not-in-view"
          classNameInView="in-view"
          intoViewMargin="-20%"
        >
          <Col className="paragraph-emphasis color-fade-in" xs={24} md={{ span: 16, offset: 4 }}>
            We have identified two market arbitrage opportunities as our value-add
            propositions.
          </Col>
        </InViewMonitor>
      </Row>
      <Row className="gutter-row" gutter={45}>
        <Col xs={24} md={{ span: 8, offset: 4 }} style={{ paddingTop: 20 }}>
          <Col span={6}>
            <InViewMonitor
              classNameNotInView="not-in-view"
              classNameInView="in-view"
              intoViewMargin="-20%"
            >
              <span className="large-number color-fade-in">1</span>
            </InViewMonitor>
          </Col>
          <Col className="paragraph" span={18}>
            <p>
              The existence of pricing disparities between select markets with
              comparable underlying characteristics.
            </p>
            <Collapse style={{ paddingTop: 20 }} bordered={false}>
              <Panel header="read more">
                <p className="dropdown-content">
                  Within the last decade, revitalization efforts spearheaded by
                  real estate firms have been quite impactful; cities once
                  constrained by inadequate parking, dated infrastructure and
                  limited amenities are now being revitalized into thriving
                  urban centers. This resurgence has led to increased enthusiasm
                  for urban living, further solidifying attractive profit
                  margins for participating firms. However, capital continues to
                  be disproportionately allocated to larger urban centers, while
                  smaller submarkets remain capital-stricken. This is largely
                  due to firms’ inability to identify scalable investments,
                  along with their reluctance to navigate the diverse sets of
                  ordinances that govern each town. The resulting disparity has
                  meant that larger Metropolitan Statistical Areas (MSAs) have
                  become oversaturated while overlooked submarkets with
                  comparable underlying characteristics continue to provide
                  ample investment opportunities.
                </p>
              </Panel>
            </Collapse>
          </Col>
        </Col>
        <Col xs={24} md={{ span: 8 }} style={{ paddingTop: 20 }}>
          <Col span={6}>
            <InViewMonitor
              classNameNotInView="not-in-view"
              classNameInView="in-view"
              intoViewMargin="-20%"
            >
              <span className="large-number color-fade-in delay-1">2</span>
            </InViewMonitor>
          </Col>
          <Col className="paragraph" span={18}>
            <p>
              The existence of synergies upon achieving critical mass within
              supply-constrained submarkets.
            </p>
            <Collapse style={{ paddingTop: 20 }} bordered={false}>
              <Panel header="read more">
                <p className="dropdown-content">
                  At Melillo Equities, we define critical mass as the point at
                  which a firm achieves sufficient market share to realize the
                  benefits derived from economies of scale and economies of
                  scope. Despite the significant competitive advantages that
                  such a position confers, most firms encounter two key
                  challenges that indelibly hinder their progress. First,
                  binding term limits force divestiture upon a fund’s maturity,
                  which ultimately precludes systematic AUM growth. Secondly,
                  real estate firms frequently disregard the importance of
                  geographical concentration, amassing disconnected portfolios
                  that account for a relatively small percentage of the overall
                  supply within any given market. We believe that any viable
                  roadmap for achieving critical mass begins by flouting these
                  two common but counterproductive practices and committing to
                  long-term, open-ended investment structures within
                  supply-constrained submarkets.
                </p>
              </Panel>
            </Collapse>
          </Col>
        </Col>
      </Row>

      <Row style={{ paddingTop: 120 }} id="acquisition-criteria">
        <Col xs={24} md={{ span: 16, offset: 4 }}>
          <InViewMonitor
            classNameNotInView="not-in-view"
            classNameInView="in-view"
            intoViewMargin="-50%"
          >
            <h1 className="blue-main-header color-fade-in">ACQUISITION CRITERIA</h1>
          </InViewMonitor>
        </Col>
      </Row>
      <Row className="gutter-row" gutter={45} style={{ paddingTop: 20 }}>
        <Col className="paragraph-emphasis" xs={24} md={{ span: 8, offset: 4 }}>
          <InViewMonitor
            classNameNotInView="not-in-view"
            classNameInView="in-view"
            intoViewMargin="-45%"
          >
            <div className="color-fade-in"><span>AT MELILLO EQUITIES</span> we actively seek opportunities
            meeting the following general investment criteria:
            </div>
          </InViewMonitor>
        </Col>
        <Col className="paragraph" xs={24} md={8}>
          <ul>
            <li>Geographic Focus: Somerset County</li>
            <li>
              Asset Classes: Commercial, Multifamily and other Emerging Asset
              classes
            </li>
            <li>Lease Form: NN, NNN, Modified Gross</li>
            <li>Tenant: Single or Multiple Tenants</li>
            <li>Transaction Size: Up to $10 million</li>
            <li>Investment Hold Period: Perpetuity</li>
            <li>Target Returns: Core to Opportunistic</li>
          </ul>
        </Col>
        <Col
          xs={24}
          md={{ span: 16, offset: 4 }}
          style={{ paddingTop: 30, paddingBottom: 10 }}
        >
          <hr style={{ border: "0.5px solid #ddd" }} />
        </Col>
      </Row>
      <Row className="gutter-row" gutter={45} style={{ paddingTop: 20 }}>
          <Col className="paragraph-emphasis" xs={24} md={{ span: 8, offset: 4 }}>
        <InViewMonitor
          classNameNotInView="not-in-view"
          classNameInView="in-view"
          intoViewMargin="-45%"
        >
            <div className="color-fade-in"><span>WE ALSO LOOK BEYOND</span> the property line to the community
            itself, assessing fundamental strengths in the following areas:
            </div>
        </InViewMonitor>
          </Col>
        <Col className="paragraph" xs={24} md={8}>
          <ul>
            <li>Demographics Trends</li>
            <li>Workforce (occupational specialization)</li>
            <li>Social Heterogeneity</li>
            <li>Transit Orientation</li>
            <li>Public Infrastructure</li>
          </ul>
        </Col>
        <Col
          xs={24}
          md={{ span: 16, offset: 4 }}
          style={{ paddingTop: 30, paddingBottom: 10 }}
        >
          <hr style={{ border: "0.5px solid #ddd" }} />
        </Col>
      </Row>
      <Row className="gutter-row" gutter={45} style={{ paddingTop: 20 }}>
          <Col className="paragraph-emphasis" xs={24} md={{ span: 8, offset: 4 }}>
        <InViewMonitor
          classNameNotInView="not-in-view"
          classNameInView="in-view"
          intoViewMargin="-45%"
        >
            <div className="color-fade-in">"<span>LASTLY,</span> we closely examine all factors we deem to
            inherently limit supply within a community, such as the following:
            </div>
        </InViewMonitor>
          </Col>
        <Col className="paragraph" xs={24} md={8}>
          <ul>
            <li>Municipal Historic Boards</li>
            <li>Restrictive Zoning Ordinances</li>
            <li>Geographical Constraints (waterways, slopes, etc)</li>
            <li>DEP Jurisdiction</li>
          </ul>
        </Col>
        <Col
          xs={24}
          md={{ span: 16, offset: 4 }}
          style={{ paddingTop: 30, paddingBottom: 10 }}
        >
          <hr style={{ border: "0.5px solid #ddd" }} />
        </Col>
      </Row>

      <Row
        className="gutter-row"
        gutter={45}
        style={{ paddingTop: 120 }}
        id="competitive-edge"
      >
        <Col xs={24} md={{ span: 12, offset: 6 }}>
          <InViewMonitor
            classNameNotInView="not-in-view"
            classNameInView="in-view"
            intoViewMargin="-50%"
          >
            <h1 className="blue-main-header color-fade-in">COMPETITIVE EDGE</h1>
          </InViewMonitor>
        </Col>
      </Row>
      <Row className="gutter-row" gutter={45} style={{ paddingTop: 30 }}>
        <InViewMonitor
          classNameNotInView="not-in-view"
          classNameInView="in-view"
          intoViewMargin="-45%"
        >
          <Col className="paragraph-emphasis color-fade-in" xs={24} md={{ span: 12, offset: 6 }}>
            <span>AS A BOUTIQUE FIRM,</span> we remain unrelenting in our efforts
            to unlock value for our clients. However, our capacity to consistently
            outperform in an ever-changing marketplace is built upon our
            continuous application of the following fundamental principles.
          </Col>
        </InViewMonitor>
      </Row>
      <Row className="gutter-row" gutter={45} style={{ paddingTop: 20 }}>
        <Col xs={24} md={{ span: 2, offset: 6 }}>
            <InViewMonitor
              classNameNotInView="not-in-view"
              classNameInView="in-view"
              intoViewMargin="-20%"
            >
              <span className="large-number color-fade-in">1</span>
            </InViewMonitor>
        </Col>
        <Col className="paragraph" xs={24} md={{ span: 10 }}>
          <h3 className="section-header-blue">STRATEGIC POSITIONING</h3>
          <p>
            We purposefully target smaller, supply-constrained submarkets so as
            to effectively position ourselves in a manner that discourages
            future entrants.
          </p>
        </Col>
        <Col
          xs={24}
          md={{ span: 12, offset: 6 }}
          style={{ paddingTop: 30, paddingBottom: 10 }}
        >
          <hr style={{ border: "0.5px solid #ddd" }} />
        </Col>
      </Row>
      <Row className="gutter-row" gutter={45} style={{ paddingTop: 20 }}>
        <Col xs={24} md={{ span: 2, offset: 6 }}>
          <InViewMonitor
              classNameNotInView="not-in-view"
              classNameInView="in-view"
              intoViewMargin="-20%"
            >
              <span className="large-number color-fade-in">2</span>
            </InViewMonitor>
        </Col>
        <Col className="paragraph" xs={24} md={{ span: 10 }}>
          <h3 className="section-header-blue">COLLABORATIVE PARTNERING</h3>
          <p>
            We actively cultivate relationships with local officials and
            community leaders to provide guidance during all phases of
            development. These collaborative partnerships help ensure a
            harmonious process that engages all stakeholders.
          </p>
        </Col>
        <Col
          xs={24}
          md={{ span: 12, offset: 6 }}
          style={{ paddingTop: 30, paddingBottom: 10 }}
        >
          <hr style={{ border: "0.5px solid #ddd" }} />
        </Col>
      </Row>
      <Row className="gutter-row" gutter={45} style={{ paddingTop: 20 }}>
        <Col xs={24} md={{ span: 2, offset: 6 }}>
          <InViewMonitor
              classNameNotInView="not-in-view"
              classNameInView="in-view"
              intoViewMargin="-20%"
            >
              <span className="large-number color-fade-in">3</span>
            </InViewMonitor>
        </Col>
        <Col className="paragraph" xs={24} md={{ span: 10 }}>
          <h3 className="section-header-blue">RISK MITIGATION</h3>
          <p>
            Our commitment  to a holistic investment approach demands that we
            remain mindful of the many interrelated factors that affect
            long-term profitability. It is our ability to effectively identify
            and manage these factors that ensures our investments are firmly
            entrenched during all periods of market cyclicality.
          </p>
        </Col>
        <Col
          xs={24}
          md={{ span: 12, offset: 6 }}
          style={{ paddingTop: 30, paddingBottom: 10 }}
        >
          <hr style={{ border: "0.5px solid #ddd" }} />
        </Col>
      </Row>
      <Row className="gutter-row" gutter={45} style={{ paddingTop: 20 }}>
        <Col xs={24} md={{ span: 2, offset: 6 }}>
          <InViewMonitor
              classNameNotInView="not-in-view"
              classNameInView="in-view"
              intoViewMargin="-20%"
            >
              <span className="large-number color-fade-in">4</span>
            </InViewMonitor>
        </Col>
        <Col className="paragraph" xs={24} md={{ span: 10 }}>
          <h3 className="section-header-blue">VERTICAL INTEGRATION</h3>
          <p>
            Our vertically integrated platform allows for a seamless flow of
            capital throughout all stages of the investment pipeline. By
            controlling the value chain, we provide our clients with a level of
            reliability and consistency that is unparalleled among our
            competitors.
          </p>
        </Col>
      </Row>

      <Row className="gutter-row" gutter={45} style={{ paddingTop: 30 }}>
        <Col xs={24} md={{ span: 10, offset: 8 }}>
          <InViewMonitor
            classNameNotInView="vis-hidden"
            classNameInView="animated fadeInUp" // fadeInLeft, or fadeInRight
          >
            <div className="strategy-box" style={{ backgroundColor: "#aaa" }}>
              <h1 className="heading">Capital</h1>
            </div>
          </InViewMonitor>
          <div
            className="home-hero-arrow home-hero-arrow-center arrow-down"
            style={{ marginTop: 6, marginBottom: 7 }}
          >
            <span className="arrow" style={{ top: 0 }}>
              <span className="arrow-before-noHov"></span>
              <span className="arrow-after"></span>
            </span>
          </div>
          <InViewMonitor
            classNameNotInView="vis-hidden"
            classNameInView="animated fadeInUp" // fadeInLeft, or fadeInRight
          >
            <div
              className="strategy-box"
              style={{ backgroundColor: "#1d4a63" }}
            >
              <h1 className="sub-heading double-line">
                TRANSACTION STRUCTURING
              </h1>
            </div>
          </InViewMonitor>
          <div
            className="home-hero-arrow home-hero-arrow-center arrow-down"
            style={{ marginTop: 6, marginBottom: 7 }}
          >
            <span className="arrow" style={{ top: 0 }}>
              <span className="arrow-before-noHov"></span>
              <span className="arrow-after"></span>
            </span>
          </div>
          <InViewMonitor
            classNameNotInView="vis-hidden"
            classNameInView="animated fadeInUp" // fadeInLeft, or fadeInRight
          >
            <div
              className="strategy-box"
              style={{ backgroundColor: "#1d4a63" }}
            >
              <h1 className="sub-heading">DEVELOPMENT</h1>
            </div>
          </InViewMonitor>
          <div
            className="home-hero-arrow home-hero-arrow-center arrow-down"
            style={{ marginTop: 6, marginBottom: 7 }}
          >
            <span className="arrow" style={{ top: 0 }}>
              <span className="arrow-before-noHov"></span>
              <span className="arrow-after"></span>
            </span>
          </div>
          <InViewMonitor
            classNameNotInView="vis-hidden"
            classNameInView="animated fadeInUp" // fadeInLeft, or fadeInRight
          >
            <div
              className="strategy-box"
              style={{ backgroundColor: "#1d4a63" }}
            >
              <h1 className="sub-heading double-line">
                CONSTRUCTION OVERSIGHT
              </h1>
            </div>
          </InViewMonitor>
          <div
            className="home-hero-arrow home-hero-arrow-center arrow-down"
            style={{ marginTop: 6, marginBottom: 7 }}
          >
            <span className="arrow" style={{ top: 0 }}>
              <span className="arrow-before-noHov"></span>
              <span className="arrow-after"></span>
            </span>
          </div>
          <InViewMonitor
            classNameNotInView="vis-hidden"
            classNameInView="animated fadeInUp" // fadeInLeft, or fadeInRight
          >
            <div
              className="strategy-box"
              style={{ backgroundColor: "#1d4a63" }}
            >
              <h1 className="sub-heading double-line">
                PROPERTY & ASSET MANAGEMENT
              </h1>
            </div>
          </InViewMonitor>
          <div
            className="home-hero-arrow home-hero-arrow-center arrow-down"
            style={{ marginTop: 6, marginBottom: 7 }}
          >
            <span className="arrow" style={{ top: 0 }}>
              <span className="arrow-before-noHov"></span>
              <span className="arrow-after"></span>
            </span>
          </div>
          <InViewMonitor
            classNameNotInView="vis-hidden"
            classNameInView="animated fadeInUp" // fadeInLeft, or fadeInRight
          >
            <div
              className="strategy-box"
              style={{ backgroundColor: "#aaa", marginBottom: 50 }}
            >
              <h1 className="heading">Stabilization</h1>
            </div>
          </InViewMonitor>
        </Col>
      </Row>
    </div>
  );
}
