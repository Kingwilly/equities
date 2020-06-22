import React from "react";
import { Row, Col } from "antd";
import DocumentTitle from "react-document-title";
import { HashLink } from "react-router-hash-link";
import client from '../contentfulClient';
import Loader from '../components/ui/Loader';
const moment = require("moment");

export default class MarketPulse extends React.PureComponent {
  state = {
    entries: null,
    error: null,
  };

  componentDidMount() {
    client.getEntries({
        content_type: "marketPulse",
        order: "-fields.publishDate",
      })
      .then(entries => {
        this.setState({ entries: entries.items });
      })
      .catch(error => this.setState({ error }));
  }

  getNewsContent = () => {
    let block = [];

    if (this.state.entries) {
      // eslint-disable-next-line
      this.state.entries.map(entry => {
        block.push({
          className: "block",
          md: 7,
          xs: 24,
          children: {
            wrapper: { className: "news-block-content" },
            img: {
              children: entry.fields.mainImage.fields.file.url
            },
            content: {
              title: entry.fields.title,
              date: entry.fields.publishDate,
              summary: entry.fields.summary,
              slug: entry.fields.slug,
              sysId: entry.sys.id
            }
          }
        });
      });
    }

    block.sort((a, b) =>
      a.children.content.date < b.children.content.date ? 1 : -1
    );

    const NewsContent = {
      wrapper: {
        className: "home-page-wrapper news-wrapper"
      },
      title: { className: "home-page-wrapper news-wrapper" },
      page: { className: "home-page news" },

      block: {
        className: "news-img-wrapper flex-wrap",
        gutter: 8,
        children: block
      }
    };

    return NewsContent;
  };

  getChildrenToRender = data =>
    data.map(item => {
      return (
        <Col key={item.children.content.children} {...item}>
          <div {...item.children.wrapper}>
            <span {...item.children.img}>
              <div className="header0">
                <span className="news-project-pday">
                  {moment(item.children.content.date).format("DD")}
                </span>
                <span className="news-project-pmonth">
                  {moment(item.children.content.date).format("MMM YYYY")}
                </span>
                <HashLink to={"/marketarticle/" + item.children.content.sysId}>
                  <img
                    src={item.children.img.children}
                    alt={item.children.content.title}
                    className="header0-logo"
                  />
                </HashLink>
              </div>
              <div className="p-1 text-left news-project-status">
                <span className="news-project-headline">
                  {item.children.content.title.toUpperCase()}
                </span>
                <br />
                <span className="news-project-summary">
                  {item.children.content.summary}
                </span>
              </div>
            </span>
          </div>
        </Col>
      );
    });

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
    if (!this.state.entries) {
      return <Loader />;
    }


    const dataSource = this.getNewsContent();
    const childrenToRender = this.getChildrenToRender(
      dataSource.block.children
    );

    return (
      <React.Fragment>
        <div {...dataSource.wrapper}>
          <div {...dataSource.page}>
            <Row className="hero text-center pb-5">
              <h1>MARKET PULSE</h1>
            </Row>
            <Row className="pt-5">
              <div {...dataSource.block}>
                {this.state.entries !== null ? childrenToRender : ""}
              </div>
            </Row>
          </div>
        </div>
        <DocumentTitle title={"Market Pulse | Melillo Equities"} />
      </React.Fragment>
    );
  }
}
