import React from "react";
import { Row, Col } from "antd";
import { NavLink } from "react-router-dom";
import PeapackGladstoneMap from "../assets/maps/gladstone/Melillo-Equities-intro-map-peapack-gladstone.jpg";
import FarHillsMap from "../assets/maps/farhills/Melillo-Equities-intro-map-farhills.jpg";
import BernardsvilleMap from "../assets/maps/bernadsville/Melillo-Equities-intro-map-bernardsville.jpg";
import windowSize from "react-window-size";

const PortfolioSection = props => {
  return (
    <div>
      <Row>
        <NavLink to="/portfolio/peapack-gladstone">
          <Col
            className="portfolio-block portfolio-map"
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundImage: `url(${PeapackGladstoneMap})`
            }}
            xs={{ span: 24, order: 1 }}
            md={{ span: 12, order: 1 }}
          />
        </NavLink>
        <Col
          className="portfolio-block portfolio-text-block"
          xs={{ span: 24, order: 1 }}
          md={{ span: 12, order: 1 }}
        >
          <div className="portfolio-block-outer center">
            <h3 className="portfolio-section-header">THE TOWN OF</h3>
            <h3 className="portfolio-callout">Peapack & Gladstone</h3>
            <h4 className="portfolio-learn">
              <button
                style={{
                  color: "#72736e"
                }}
              >
                <NavLink to="/portfolio/peapack-gladstone">
                  <div className="home-hero-arrow home-hero-arrow-center arrow-left">
                    <span className="arrow arrow-hide">
                      <span className="arrow-before" />
                      <span className="arrow-after" />
                    </span>
                  </div>
                </NavLink>
              </button>
            </h4>
          </div>
        </Col>
      </Row>
      <Row>
        {props.windowWidth < 991 ? (
          <NavLink to="/portfolio/farhills">
            <Col
              className="portfolio-block portfolio-map"
              style={{
                backgroundColor: "white",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url(${FarHillsMap})`
              }}
              xs={{ span: 24, order: 1 }}
              md={{ span: 12, order: 1 }}
            />
          </NavLink>
        ) : null}

        <Col
          className="portfolio-block portfolio-text-block"
          xs={{ span: 24, order: 1 }}
          md={{ span: 12, order: 1 }}
        >
          <div className="portfolio-block-outer center">
            <h3 className="portfolio-section-header">THE TOWN OF</h3>
            <h3 className="portfolio-callout">Far Hills</h3>
            <h4 className="portfolio-learn">
              <button
                style={{
                  color: "#72736e"
                }}
              >
                <NavLink to="/portfolio/farhills">
                  <div className="home-hero-arrow home-hero-arrow-center">
                    <span className="arrow arrow-hide">
                      <span className="arrow-before" />
                      <span className="arrow-after" />
                    </span>
                  </div>
                </NavLink>
              </button>
            </h4>
          </div>
        </Col>

        {props.windowWidth > 991 ? (
          <NavLink to="/portfolio/farhills">
            <Col
              className="portfolio-block portfolio-map"
              style={{
                backgroundColor: "white",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url(${FarHillsMap})`
              }}
              xs={{ span: 24, order: 1 }}
              md={{ span: 12, order: 1 }}
            />
          </NavLink>
        ) : null}
      </Row>
      <Row>
        <NavLink to="/portfolio/bernardsville">
          <Col
            className="portfolio-block portfolio-map"
            style={{
              backgroundColor: "white",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundImage: `url(${BernardsvilleMap})`
            }}
            xs={{ span: 24, order: 1 }}
            md={{ span: 12, order: 1 }}
          />
        </NavLink>
        <Col
          className="portfolio-block portfolio-text-block"
          xs={{ span: 24, order: 1 }}
          md={{ span: 12, order: 1 }}
        >
          <div className="portfolio-block-outer center">
            <h3 className="portfolio-section-header">THE TOWN OF</h3>
            <h3 className="portfolio-callout">Bernardsville</h3>
            <h4 className="portfolio-learn">
              <button
                style={{
                  color: "#72736e"
                }}
              >
                <NavLink to="/portfolio/bernardsville">
                  <div className="home-hero-arrow home-hero-arrow-center arrow-left">
                    <span className="arrow arrow-hide">
                      <span className="arrow-before" />
                      <span className="arrow-after" />
                    </span>
                  </div>
                </NavLink>
              </button>
            </h4>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default windowSize(PortfolioSection);
