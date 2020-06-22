import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

export default class BackAndForth extends React.PureComponent {

  renderPreviousPost() {
    return (
      <Link
        to={this.props.linkPrev}
      >
        <div className="p-3 m-5">
          <span className="home-hero-arrow-left arrow float-left mr-auto">
            <span className="arrow-before-noHov"></span>
            <span className="arrow-after"></span>
          </span>
          <br />
          <h3 className="float-left mr-auto articles-footer">PREVIOUS</h3>
        </div>
      </Link>
    );
  }

  renderNextPost() {
    return (
      <Link to={this.props.linkNext}>
        <div className="p-3 m-5">
          <span className="home-hero-arrow-right arrow float-right ml-auto">
            <span className="arrow-before-noHov"></span>
            <span className="arrow-after"></span>
          </span>
          <br />
          <h3 className="float-right ml-auto articles-footer">NEXT</h3>
        </div>
      </Link>
    );
  }

  render() {
    if (!this.props.linkPrev && !this.props.linkNext) {
      return null;
    }
    return (
      <div className="next-prev-article">
        <Row>
          <Col
            className="portfolio-block portfolio-text-block portfolio-block-left float-left mr-auto col-4"
            xs={24}
            md={8}
          >
            <div className="portfolio-block-outer">
              <div className="footer-left">
                <h3 className="portfolio-callout left">
                  {this.props.linkPrev && this.renderPreviousPost()}
                </h3>
              </div>
            </div>
          </Col>
          <Col
            className="portfolio-block portfolio-text-block portfolio-block-right float-right ml-auto col-4"
            xs={24}
            md={8}
          >
            <div className="portfolio-block-outer">
              <div className="footer-right">
                <h3 className="portfolio-callout right">
                  {this.props.linkNext && this.renderNextPost()}
                </h3>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
