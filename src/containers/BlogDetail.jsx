import React, { Component } from "react";
import DocumentTitle from "react-document-title";
import { Row, Col, Anchor, Collapse } from "antd";
import BackAndForth from "../components/Blog/BackAndForth";
import client from '../contentfulClient';
import Loader from '../components/ui/Loader';
import DOMPurify from 'dompurify';
// eslint-disable-next-line
const Panel = Collapse.Panel;
const showdown = require("showdown");
const moment = require("moment");
// eslint-disable-next-line
const { Link } = Anchor;

export default class BlogDetail extends Component {

  state = { 
    post: null, 
    entries: null, 
    allEntries: null,
    error: null,
  };

  componentDidMount() {
    client.getEntries({
        content_type: "blogPost",
        "sys.id": this.props.match.params.id,
        include: 2
      })
      .then((project) => {
        this.setState({ post: project.items[0] });
      })
      .catch(error => this.setState({ error }));
    this.client
      .getEntries({
        content_type: "blogPost",
        order: "fields.publishDate",
        limit: 5
      })
      .then((entries) => {
        this.setState({ entries: entries.items });
      })
      .catch(error => this.setState({ error }));
    this.client
      .getEntries({
        content_type: "blogPost",
        order: "fields.publishDate"
      })
      .then((entries) => {
        this.setState({ allEntries: entries.items });
      })
      .catch(error => this.setState({ error }));
  }

  converter = new showdown.Converter();
  render() {
    if (this.state.error) {
      return (
        <DocumentTitle title={"Melillo Equities"}>
          <div
            className="about-wrapper portfolio-detail-wrapper"
            style={{ minHeight: "100vh" }}
          >Something went wrong. Try refreshing the page.</div>
        </DocumentTitle>
      );
    }
    if (!this.state.post) {
      return <Loader />;
    }

    return (
      <DocumentTitle
        title={this.state.post.fields.title + " | Melillo Equities"}
      >
        <div className="blog-detail-wrapper">
          <Row className="gutter-row" id="a1" gutter={45}>
            <Col
              className="paragraph-emphasis"
              xs={24}
              md={{ span: 16, offset: 4 }}
              style={{ paddingBottom: 30 }}
            >
              <div
                id="blog1"
                className="post py-5 mt-5 text-center mx-auto"
              >
                <h5 className="post-title">
                  <b>{this.state.post.fields.title.toUpperCase()}</b>
                </h5>
                <h3 className="section-header-blue date my-5">
                  {moment(this.state.post.fields.publishDate).format(
                    "MMMM DD, Y"
                  )}
                </h3>
                <div className="description my-5 text-left">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        this.converter.makeHtml(
                          this.state.post.fields.content
                        )
                      ),
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
  }
}
