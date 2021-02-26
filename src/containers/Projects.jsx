import React from "react";
import DocumentTitle from "react-document-title";
import Loader from '../components/ui/Loader';
import { Row, Col, Anchor, Collapse } from "antd";
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
    modalShown: 0,
  };

  componentDidMount() {
    const slug = this.props.match.params.project;
    client.getEntries({
      content_type: "projects",
      "fields.slug[in]": slug,
    })
    .then(entries => {
    
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
                { this.state.project.fields.thumbnails
                  ? <Carousel className="carousel-thumbs-below" showThumbs={true} selectedItem={this.state.modalShown}>
                      <img src={this.state.project.fields.mainImage.fields.file.url} alt="Main Project" />
                      { this.state.project.fields.thumbnails.map(tn => (
                        <img 
                          src={tn.fields.file.url}
                          alt="Project"
                        />
                      ))}
                    </Carousel>
                  :  <img
                    src={ this.state.project.fields.mainImage.fields.file.url }
                    alt={"Melillo Equities"}
                    className={"project-hero-img" + ( this.state.project.fields.thumbnails ? " showPointer" : "" )}
                    onClick={() => this.setState({sliderIdx: 0})}
                  />
                }
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
                { this.state.project.fields.thumbnails
                  ? <Carousel className="carousel-thumbs-below" showThumbs={true} selectedItem={this.state.modalShown}>
                      <img src={this.state.project.fields.mainImage.fields.file.url} alt="Main Project" />
                      { this.state.project.fields.thumbnails.map(tn => (
                        <img 
                          src={tn.fields.file.url}
                          alt="Project"
                        />
                      ))}
                    </Carousel>
                  :  <img
                    src={ this.state.project.fields.mainImage.fields.file.url }
                    alt={"Melillo Equities"}
                    className={"project-hero-img" + ( this.state.project.fields.thumbnails ? " showPointer" : "" )}
                    onClick={() => this.setState({sliderIdx: 0})}
                  />
                }
              </Col>
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
      </React.Fragment>
    );
  }
}