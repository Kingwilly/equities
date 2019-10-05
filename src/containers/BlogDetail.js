import React, { Component } from "react";
import DocumentTitle from "react-document-title";
import { Row, Col, Anchor, Collapse } from 'antd';
import Press from "../assets/images/press-main-image.jpg";
import HeroImage from '../components/HeroImage';
import { HashLink } from 'react-router-hash-link';
import BackAndForth from "../components/Blog/BackAndForth";

const Panel = Collapse.Panel;
var contentful = require("contentful");
var showdown = require("showdown");
var moment = require('moment');
const { Link } = Anchor;


class BlogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { post: null, entries: null, allEntries: null };
  }

  client = contentful.createClient({
    space: "h6j5qaecf4bi",
    accessToken:
      "60b882d2e141112b676c9446202ad4afb29121fab9b9e62ce5efe5ed01a964cf"
  });
  componentWillMount() {
    var that = this;
    this.client
      .getEntries({
        content_type: "blogPost",
        "sys.id": this.props.match.params.id,
        include: 2
      })
      .then(function(project) {
        that.setState({ post: project.items[0] });
      });
    this.client
      .getEntries({
        content_type: "blogPost",
        order: "fields.publishDate",
        limit: 5
      })
      .then(function(entries) {
        that.setState({ entries: entries.items });
      });
    this.client
      .getEntries({
        content_type: "blogPost",
        order: "fields.publishDate"
      })
      .then(function(entries) {
        that.setState({ allEntries: entries.items });
      });
  }
  scrollDown() {
    window.scroll({
      top: 850,
      left: 0,
      behavior: "smooth"
    });
  }
  converter = new showdown.Converter();
  render() {
    if (this.state.post) {
      return (
        <DocumentTitle
          title={
            this.state.post.fields.title + " | Melillo Equities"
          }
        >
          <div className="blog-detail-wrapper">


         <Row className="gutter-row" id="a1" gutter={45} >
          <Col className="paragraph-emphasis" xs={24} md={{ span: 16, offset: 4 }} style={{paddingBottom: 30}}>
            <div id="blog1" className="post p-5 mt-5 text-center mx-auto">
              <h5 className="post-title"><b>{ this.state.post.fields.title.toUpperCase()}</b></h5>
              <h3 className="section-header-blue my-5">{moment(this.state.post.fields.publishDate).format('MMMM DD, Y')}</h3>
              <div className="description my-5 text-left">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: this.converter.makeHtml(
                          this.state.post.fields.content
                        )
                      }}
                    />
              </div>

            </div>
              </Col>

            </Row>
            <BackAndForth
              entries={this.state.allEntries}
              post={this.state.post}
            />
          </div>
        </DocumentTitle>
      );
    } else {
      return (
        <DocumentTitle title={"Melillo Equities"}>
          <div
            className="about-wrapper portfolio-detail-wrapper"
            style={{ minHeight: "100vh" }}
          />
        </DocumentTitle>
      );
    }
  }
}

export default BlogDetail;
