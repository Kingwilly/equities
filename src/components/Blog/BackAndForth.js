import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import Arrow_Button from "../../assets/images/scroll_down_arrow.svg";

class BackAndForth extends Component {
  renderPreviousPost() {
    var currentPostID = this.props.post.sys.id;
    var location = 0;
    var totalPosts = 0;
    var found = false;
    this.props.entries.map(function(post) {
      totalPosts += 1;
      if (post.sys.id == currentPostID) {
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
        to={
          "/our-journal/" + previousPost.sys.id + "/" + previousPost.fields.slug
        }
      >
        <div
          className="previous-article"
        >
          <div className="previous-content">
            <p className="previous-title">PREVIOUS</p>
            <p className="previous-article-title">
              {previousPost.fields.title}
            </p>
          </div>
        </div>
      </Link>
    );
  }
  renderNextPost() {
    var currentPostID = this.props.post.sys.id;
    var location = 0;
    var totalPosts = 0;
    var found = false;
    this.props.entries.map(function(post) {
      totalPosts += 1;
      if (post.sys.id == currentPostID) {
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
    var previousPost = this.props.entries[nextPostLocation];
    return (
      <Link
        to={
          "/our-journal/" + previousPost.sys.id + "/" + previousPost.fields.slug
        }
      >
        <div
          className="next-article"
s        >
          <div className="next-content">
            <p className="next-title">NEXT</p>
            <p className="next-article-titlenormalizenormalize">{previousPost.fields.title}</p>
          </div>
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
        <Row gutter={16}>
          <Col
            md={{ span: 24 }}
            lg={{ span: 12 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            {this.renderPreviousPost()}
          </Col>
          <Col
            md={{ span: 24 }}
            lg={{ span: 12 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            {this.renderNextPost()}
          </Col>
        </Row>
      </div>
    );
  }
}

export default BackAndForth;
