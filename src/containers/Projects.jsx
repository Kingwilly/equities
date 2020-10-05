import React from "react";
import DocumentTitle from "react-document-title";
import Loader from '../components/ui/Loader';
import { Row, Col, Anchor, Collapse, Modal } from "antd";
import { HashLink } from "react-router-hash-link";
import DOMPurify from 'dompurify';
import client from '../contentfulClient';
// eslint-disable-next-line
const Panel = Collapse.Panel;
const Carousel = require("react-responsive-carousel").Carousel;
const showdown = require("showdown");
const moment = require("moment");
// eslint-disable-next-line
const { Link } = Anchor;
const converter = new showdown.Converter();

export default class Projects extends React.PureComponent {
  
  state = { 
    project: null,
    news: [],
    error: null,
    modalShown: false,
  };

  componentDidMount() {
    const slug = this.props.match.params.project;
    client.getEntries({
      content_type: "projects",
      "fields.slug[in]": slug,
    })
    .then(entries => {
        console.log(entries)
      if (!entries) this.setState({error: {message: "No entry was found for " + slug}});
      else this.setState({project: entries.items[0]});
    })
    .catch(error => this.setState({ error }));

    client.getEntries({
      content_type: "inTheNews",
      "fields.project.sys.contentType.sys.id": "projects",
      "fields.project.fields.slug[match]": slug,
      order: "-fields.publishDate",
    })
    .then(entries => this.setState({ news: entries.items }))
    .catch(error => this.setState({ error }));
  }

  renderNavigation() {
    let nav = [];

    nav.push(
      <div key={"project"} className="pt-3 px-3">
        <h3 className="location" style={{ paddingLeft: "8px" }}>
          {this.state.project.fields.title.toUpperCase()}
        </h3>
        <h3 className="title" style={{ paddingLeft: "8px" }}>
          IN THE NEWS
        </h3>
      </div>
    );

    // eslint-disable-next-line
    this.state.news.forEach((entry) => {
        nav.push(
          <div className="news-articles-entry" key={entry.sys.id}>
            <hr />
            <Link
              key={entry.fields.title}
              href={"/news/" + this.state.project.fields.slug + "/" + entry.fields.slug + "/" + entry.sys.id}
              title={<span className="news-articles-date">
                {moment(entry.fields.publishDate)
                .format("MMMM DD, Y")
                .toUpperCase()}</span>
              }
            >
              <HashLink to={"/news/" + this.state.project.fields.slug + "/" + entry.fields.slug + "/" + entry.sys.id}>
                {entry.fields.title.toUpperCase()}
              </HashLink>
            </Link>
          </div>
        );
      }
    );

    return nav;
  }

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
    if (!this.state.project) {
      return <Loader />;
    }

    const nav = this.state.news && this.state.news.length > 0 ? this.renderNavigation() : null;

    return (
      <React.Fragment>
        <DocumentTitle
          title={this.state.project.fields.title + " | Melillo Equities"}
        >
          <div className="blog-detail-wrapper">
            <Row className="hero text-center gutter-row" id="a1" gutter={45}>
              <Col md={{ span: 18, offset: 2 }}>
                <span className="news-wrapper">
                  {/* eslint-disable-next-line */}
                  <h2 className="text-left news-project-title">{this.state.project.fields.title.toUpperCase()}</h2>
                </span>
              </Col>
              <Col
                className="paragraph-emphasis"
                xs={0}
                sm={0}
                md={{ span: 18, offset: 2 }}
              >
                <img
                  src={ this.state.project.fields.mainImage.fields.file.url }
                  alt={"Melillo Equities"}
                  className={"project-hero-img" + ( this.state.project.fields.thumbnails ? " showPointer" : "" )}
                  onClick={() => this.setState({modalShown: 0})}
                />
              </Col>
              <Col
                xs={0}
                md={{ span: 4 }}
                style={{ zIndex: 9999 }}
                className="float-right ml-auto news-wrapper news-project-nav px-2"
              >
                <div className="news-project-nav">
                  <Anchor affix={false} showInkInFixed={false}>
                    { nav }
                  </Anchor>
                  { this.state.project.fields.pdf && this.state.project.fields.readMoreButtonLabel ? (
                    <a
                        href={this.state.project.fields.pdf.fields.file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="read-more btn py-3 px-5 mt-3"
                    >
                        <i>{this.state.project.fields.readMoreButtonLabel}</i>
                    </a>
                  ) : null }
                </div>
              </Col>
              <Col
                className="paragraph-emphasis mt-4"
                xs={24}
                sm={24}
                md={0}
                lg={0}
                xl={0}
              >
                <img
                  src={ this.state.project.fields.mainImage.fields.file.url }
                  alt={"Melillo Equities"}
                  className={"project-hero-img" + ( this.state.project.fields.thumbnails ? " showPointer" : "" )}
                  onClick={() => this.setState({modalShown: 0})}
                />
              </Col>
              { this.state.project.fields.thumbnails &&
                <Col xs={24} md={{ span: 18, offset: 2 }}>
                  <div className="project-img-thumbnail-area">
                    { this.state.project.fields.thumbnails.map((tn, idx) => (
                      <img 
                        src={tn.fields.file.url} 
                        onClick={() => this.setState({modalShown: 1+idx})}
                      />
                    ))}
                  </div>
                </Col>
              }
              <Col xs={24} md={{ span: 18, offset: 2 }}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                        converter.makeHtml(
                        this.state.project.fields.summary
                      )
                    ),
                  }}
                />
              </Col>
              <Col
                className="news-wrapper"
                xs={24}
                md={0}
                lg={0}
                xl={0}
              >
                <div className="news-project-nav">
                  <Anchor
                    affix={false}
                    showInkInFixed={false}
                    className="text-center"
                    style={{ borderLeft: "none" }}
                  >
                    { nav }
                  </Anchor>{" "}
                  { this.state.project.fields.pdf && this.state.project.fields.readMoreButtonLabel ? (
                  <a
                    href={this.state.project.fields.pdf.fields.file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more btn py-3 px-5 mt-3"
                  >
                    <i>{this.state.project.fields.readMoreButtonLabel}</i>
                  </a>
                  ) : null }
                </div>
              </Col>
            </Row>
          </div>
        </DocumentTitle>
        { this.state.project.fields.thumbnails &&
          <Modal
            closable={true}
            style={{
              top: 50,
              width: 95 + "%"
            }}
            visible={this.state.modalShown !== false}
            onOk={() => this.setState({modalShown: false})}
            onCancel={() => this.setState({modalShown: false})}
            footer={false}
            maskClosable={true}
          >
            <div
              onClick={() => this.setState({modalShown: false})}
              style={{
                float: "right",
                padding: 20 + "px",
                borderLeft: "1px solid #b3b3b3",
                cursor: "pointer"
              }}
            >
              <div className="modal-close">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 25 25"
                  className="modal-close-svg"
                  style={{ enableBackground: "new 0 0 25 25" }}
                >
                  <path
                    d="M13.2,12.5L24.4,1.2c0.2-0.2,0.2-0.5,0-0.7c-0.2-0.2-0.5-0.2-0.7,0L12.5,11.8L1.2,0.5C1,0.4,0.7,0.4,0.5,0.5S0.4,1,0.5,1.2
                    l11.3,11.3L0.5,23.7c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1s0.2,0,0.3-0.1l11.3-11.3l11.3,11.3c0.1,0.1,0.2,0.1,0.3,0.1
                    s0.2,0,0.3-0.1c0.2-0.2,0.2-0.5,0-0.7L13.2,12.5z"
                  />
                </svg>
              </div>
            </div>

            <br />
              <div>
                <Carousel showThumbs={true} selectedItem={this.state.modalShown}>
                  <img src={this.state.project.fields.mainImage.fields.file.url} />
                  { this.state.project.fields.thumbnails.map(tn => (
                    <img 
                      src={tn.fields.file.url}
                    />
                  ))}
                </Carousel>
              </div>
            {/* <br />
            <h1
              style={{
                color: "#1d4a63",
                textAlign: "center",
                fontSize: 26 + "px",
                fontFamily: "kepler-std-display"
              }}
            >
              {this.state.project.fields.title.toUpperCase()}
            </h1>
            <br /> */}
          </Modal>
        }
      </React.Fragment>
    );
  }
}