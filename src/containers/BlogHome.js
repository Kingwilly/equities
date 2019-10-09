import React, { Component } from "react";
import DocumentTitle from "react-document-title";
import { Row, Col, Anchor, Collapse } from 'antd';
import Press from "../assets/images/press-main-image.jpg";
import HeroImage from '../components/HeroImage';
import { HashLink } from 'react-router-hash-link';
import Instagram from "../assets/images/ig-color-icon.png";

// eslint-disable-next-line 
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
            "/press/" +
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
  UNSAFE_componentWillMount() {
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
  renderPress() {
    return this.state.entries.map(entry => 

      <Col key={entry.fields.publishDate} className="paragraph-emphasis" xs={24} md={{ span: 16, offset: 4 }} style={{paddingBottom: 30}}>
        <div id={entry.fields.title} className="post p-5 pt-0 text-center ml-auto mr-auto">
          <h3 className="section-header-blue date">{moment(entry.fields.publishDate).format('MMMM DD, Y')}</h3>
          <h5 className="post-title my-4"><b>{entry.fields.title.toUpperCase()}</b></h5>
          <p>{entry.fields.content.split(" ").splice(0, 50).join(" ") + "..."}</p>
          <HashLink
              to={
              "/press/" +
            entry.sys.id +
            "/" +
            entry.fields.slug
            }
          >
          <button className="read-more btn btn-lg py-3 px-5 mt-3"><i>read more</i></button>
          </HashLink>
        </div>
      </Col>
      );
  }

  renderNavigation() {

    return this.state.entries.map(entry => 
      
      <Link key={entry.fields.title} href={'#' + entry.fields.title} title={entry.fields.title.toUpperCase()} />
      )
  }
  
  render() {


    if (this.state.entries) {
      return (
        <div>
          <DocumentTitle title={"Press | Melillo Equities"}>
            <div>
              <HeroImage
                    className="hero-bottom-header" 
                    height={100}
                    background={Press}
                    bottomHeader={'PRESS'} />
                    
                    <Row className="gutter-row" gutter={45} style={{paddingTop: 30}}>
                      <Col
                          md={{ span: 4 }}
                          style={{ zIndex: 9999}}
                  className="anchor-menu float-right ml-auto">

                  

                      </Col>
                    </Row>
                    <Row className="gutter-row" id="a3" gutter={45}>
                      <Col
                          md={{ span: 4 }}
                          style={{ zIndex: 9999 }}
                          className="anchor-menu float-right ml-auto">

                        <a className="follow-us btn float-right ml-auto px-3" href="https://www.instagram.com/melilloequities/" target="_blank" rel="noopener noreferrer">
                        <span className="float-right ml-auto m-0"><span className="follow-text">Follow us on Instagram </span><img className="footer-icon img-fluid" src={Instagram} alt="Instagram" /></span></a>
                      </Col>
                  </Row>
                  <Row className="gutter-row" id="a3" gutter={45}>

                  <Col
                  md={{ span: 4 }}
                  style={{ zIndex: 9999 }}
                  className="anchor-menu float-right ml-auto">
                  <Anchor affix={true} offsetTop={223} showInkInFixed={true} style={{marginTop: 60}}>
                    
                    {this.renderNavigation()}
                  </Anchor>
                </Col>
                <Col xs={24} md={{ span: 16, offset: 4 }}>

                <div className="follow-mobile text-center ml-auto mr-auto">

                    <a className="follow-us btn px-3" href="https://www.instagram.com/melilloequities/" target="_blank" rel="noopener noreferrer">
                    <span className="float-right ml-auto m-0 pt-2"><span className="follow-text pt-1">Follow us on Instagram </span><img className="footer-icon img-fluid" src={Instagram} alt="Instagram" /></span></a>
                </div>
                </Col>
                {this.renderPress()}
              </Row>
            </div>
          </DocumentTitle>
      </div>
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

export default BlogHome;
