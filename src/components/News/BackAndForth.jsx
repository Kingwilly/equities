import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

export default class BackAndForth extends React.PureComponent {
  renderPreviousPost() {
    var currentPostID = this.props.post;
    var location = 0;
    var totalPosts = 0;
    var found = false;
    this.props.entries.map(function (post) {
      totalPosts += 1;
      if (post.sys.id === currentPostID) {
        found = true;
      }
      if (!found) {
        location += 1;
      }
      return location;
    });
    var previousPostLocation = location - 1;
    if (previousPostLocation < 0) {
      previousPostLocation = totalPosts - 1;
    }
    var previousPost = this.props.entries[previousPostLocation];
    return (
      <Link
        to={"/news/" + previousPost.fields.project + "/" + previousPost.sys.id}
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
    var currentPostID = this.props.post;
    var location = 0;
    var totalPosts = 0;
    var found = false;
    this.props.entries.map(function (post) {
      totalPosts += 1;
      if (post.sys.id === currentPostID) {
        found = true;
      }
      if (!found) {
        location += 1;
      }
      return location;
    });
    var nextPostLocation = location + 1;
    if (nextPostLocation === totalPosts) {
      nextPostLocation = 0;
    }
    var nextPost = this.props.entries[nextPostLocation];
    return (
      <Link to={"/news/" + nextPost.fields.project + "/" + nextPost.sys.id}>
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
    if (!this.props.entries || !this.props.post) {
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
                  {this.renderPreviousPost()}
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
                  {this.renderNextPost()}
                </h3>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
