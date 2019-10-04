import React, { Component } from "react";
import DocumentTitle from "react-document-title";
import { Row, Col, Anchor, Collapse } from 'antd';
import Press from "../assets/images/press-main-image.jpg";
import HeroImage from '../components/HeroImage';
import { HashLink } from 'react-router-hash-link';

const Panel = Collapse.Panel;
var contentful = require("contentful");
var showdown = require("showdown");
var moment = require('moment');
const { Link } = Anchor;

class BlogPostPreview extends Component {
  converter = new showdown.Converter();
  render() {
    return (
      <Col xs={{ span: 24 }} md={{ span: 8 }} key={this.props.post.sys.id}>
        <HashLink
          style={{ textDecoration: "none" }}
          to={
            "/our-journal/" +
            this.props.post.sys.id +
            "/" +
            this.props.post.fields.slug
          }
        >
          <div className="blog-post-preview-wrapper">
            <div
              className="header-image"
            />
            <div className="content">
              <p className="title">{this.props.post.fields.title.toUpperCase()}</p>
              <p className="description">
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.converter.makeHtml(
                      this.state.entries[0].fields.content.split(" ").splice(0, 50).join(" ") + " ..."
                    )
                  }}
                />
              </p>
            </div>
          </div>
        </HashLink>
      </Col>
    );
  }
}

class BlogHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: null,
      edited: false
    };
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
        order: "-fields.publishDate"
      })
      .then(function(entries) {
        that.setState({ entries: entries.items });
      });
  }
  renderEntries() {
    var posts = this.state.entries;
    posts.shift();
    this.setState({ edited: true });
    return posts;
  }
  renderPosts() {
    return this.state.entries.map(function(post) {
      console.log(post.sys.id);
      return <BlogPostPreview post={post} key={post.sys.id} />;
    });
  }
  render() {


    if (this.state.entries) {
      return (
        <div>
          <DocumentTitle title={"Blog | Melillo Equities"}>
          <div>
          <HeroImage
                height={100}
                background={Press}
                bottomHeader={'PRESS'} />
              
          <Row className="gutter-row" id="a1" gutter={45} >
          <Col className="paragraph-emphasis" xs={24} md={{ span: 16, offset: 4 }} style={{paddingBottom: 30}}>
            <div id="blog1" className="post p-5 pt-0 text-center ml-auto mr-auto">
              <h3 className="section-header-blue">{moment(this.state.entries[0].fields.publishDate).format('MMMM DD, Y')}</h3>
              <h5 className="post-title my-5"><b>{ this.state.entries[0].fields.title.toUpperCase()}</b></h5>
              <p>{this.state.entries[0].fields.content.split(" ").splice(0, 50).join(" ") + "..."}</p>
              <HashLink
                  to={
                  "/our-journal/" +
                 this.state.entries[0].sys.id +
                "/" +
                this.state.entries[0].fields.slug
                }
              >
              <button className="read-more btn btn-lg py-3 px-5 mt-3"><i>read more</i></button>
              </HashLink>
            </div>
              </Col>
              <Col
                md={{ span: 4 }}
                style={{ zIndex: 9999, paddingTop: 30 }}
                className="anchor-menu">
						    <Anchor affix={true} offsetTop={223} showInkInFixed={true}>
                  <Link href="#blog1" title={this.state.entries[0].fields.title.toUpperCase()} />
                  <Link href="#blog2" title={this.state.entries[1].fields.title.toUpperCase()} />
                  <Link href="#blog3" title={this.state.entries[2].fields.title.toUpperCase()} />
                </Anchor>
              </Col>
            </Row>
            <Row className="gutter-row" id="a2" gutter={45} style={{paddingTop: 30}}>
              <Col className="paragraph-emphasis" xs={24} md={{ span: 16, offset: 4 }} style={{paddingBottom: 30}}>

            <div id="blog2" className="post p-5 text-center ml-auto mr-auto">
              <h3 className="section-header-blue">{moment(this.state.entries[1].fields.publishDate).format('MMMM DD, Y')}</h3>
              <h5 className="post-title my-5"><b>{ this.state.entries[1].fields.title.toUpperCase()}</b></h5>
              <p>{this.state.entries[1].fields.content.split(" ").splice(0, 50).join(" ") + "..."}</p>
              <HashLink
                  to={
                  "/our-journal/" +
                 this.state.entries[1].sys.id +
                "/" +
                this.state.entries[1].fields.slug
                }
              >
              <button className="read-more btn btn-lg py-3 px-5 mt-3"><i>read more</i></button>
              </HashLink>            
              </div>
            </Col>
          </Row>
          <Row className="gutter-row" id="a3" gutter={45} style={{paddingTop: 30}}>
          <Col className="paragraph-emphasis" xs={24} md={{ span: 16, offset: 4 }} style={{paddingBottom: 30}}>
            <div id="blog3" className="post p-5 text-center ml-auto mr-auto">
              <h3 className="section-header-blue">{moment(this.state.entries[2].fields.publishDate).format('MMMM DD, Y')}</h3>
              <h5 className="post-title my-5"><b>{ this.state.entries[2].fields.title.toUpperCase()}</b></h5>
              <p>{this.state.entries[2].fields.content.split(" ").splice(0, 50).join(" ") + "..."}</p>
              <HashLink
                  to={
                  "/our-journal/" +
                 this.state.entries[2].sys.id +
                "/" +
                this.state.entries[2].fields.slug
                }
              >
              <button className="read-more btn btn-lg py-3 px-5 mt-3"><i>read more</i></button>
              </HashLink>            
              </div>
              </Col>
            </Row>

          </div>
          
        </DocumentTitle>



      </div>
      );
    } else {
      return (
        <DocumentTitle title={"Blog | Melillo Equities"}>
          <div
            className="about-wrapper portfolio-detail-wrapper"
            style={{ minHeight: "100vh" }}
          />
        </DocumentTitle>
      );
    }
  }
}

export default BlogHome;
