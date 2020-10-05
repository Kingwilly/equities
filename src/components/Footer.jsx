import React from "react";
import { Row, Col } from "antd";
import MellioEquitiesLargeLogo from "../assets/images/footer-logo.svg";
import { Link } from "react-router-dom";
import Instagram from "../assets/images/ig-color-icon.png";
import Linkedin from "../assets/images/icon-linkedin.svg";

const INVESTOR_LOGIN_URL = "https://investors.melilloequities.com/login";

const CallOut = () => {
  return (
    <div>
      <br />
      <br />
      <Row>
        <Col
          className="portfolio-block portfolio-text-block portfolio-block-left"
          xs={24}
          md={8}
        >
          <div className="portfolio-block-outer">
            <div className="footer-left">
              <br />
              <a
                href={INVESTOR_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="portfolio-callout left">Login</h3>
              </a>
            </div>
          </div>
        </Col>
        <Col
          className="portfolio-block portfolio-text-block py-4"
          xs={24}
          md={8}
        >
          <div className="portfolio-block-outer">
            <Link to="/">
              <img
                src={MellioEquitiesLargeLogo}
                className="footer-logo"
                alt="Mellio Equities Footer Logo"
              />
            </Link>
            <div className="footer-text">
              27 ROUTE 202, SUITE 6,
              <br className="visible-mobile" /> FAR HILLS, NJ 07931{" "}
              <br className="visible-mobile" />
              <div>1+908 234 9561</div>
            </div>
            <div className="text-center mx-auto py-3">
              <a
                className="footer-icon mx-3"
                href="https://www.linkedin.com/company/melillo-equities/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="footer-icon" src={Linkedin} alt="Linkedin" />
              </a>
              <a
                className="footer-icon mx-3"
                href="https://www.instagram.com/melilloequities/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="footer-icon" src={Instagram} alt="Instagram" />
              </a>
              <br />
              <br />
            </div>
          </div>
        </Col>
        <Col className="portfolio-block portfolio-text-block" xs={24} md={8}>
          <div className="portfolio-block-outer">
            <div className="footer-right">
              <br />
              <Link to={"/contact"}>
                <h3 className="portfolio-callout right">Contact</h3>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <br />
    </div>
  );
};

export default CallOut;
