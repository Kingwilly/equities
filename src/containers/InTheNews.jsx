import React from "react";
import { Row, Col } from "antd";
import DocumentTitle from "react-document-title";
import { HashLink } from "react-router-hash-link";
import client from '../contentfulClient';
import Loader from '../components/ui/Loader';

export default class InTheNews extends React.PureComponent {

  state = {
    entries: null,
    error: null,
  }

  componentDidMount() {
    client.getEntries({
      content_type: "projects",
      order: "-fields.publishDate",
    })
    .then((entries) => {
      this.setState({ entries: entries.items });
    })
    .catch(err => this.setState({error: err}));
  }

  static getNewsContent(entries) {
    const block = entries.map(entry => ({
        className: "block",
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: "news-block-content" },
          img: {
            children: entry
              ? entry.fields.mainImage.fields.file.url
              : null,
          },
          content: {
            title: entry.fields.title,
            date: entry.publishDate,
            status: entry.fields.status,
            location: entry.fields.location,
            attributes: entry.fields.attributes.join(", "),
            slug: entry.fields.slug,
            sysId: entry.sys.id,
          },
        },
      }));

      const NewsContent = {
        wrapper: { className: "home-page-wrapper news-wrapper" },
        title: { className: "home-page-wrapper news-wrapper" },
        page: { className: "home-page news" },
  
        block: {
          className: "news-img-wrapper flex-wrap padding-nav",
          gutter: 8,
          children: block,
        },
      };
  
      return NewsContent;
  }

  static getChildrenToRender(data) {
    return data.map((item) => (
      <Col key={item.children.content.title} {...item}>
        <div {...item.children.wrapper}>
          <span {...item.children.img}>
            <div className="header0 ">
              <HashLink
                to={"/inthenews/" + item.children.content.slug}
              >
                <img
                  src={item.children.img.children}
                  alt={item.children.content.title}
                  className="header0-logo"
                />
              </HashLink>
            </div>
            <div className="p-1 text-left news-project-status">
              
            <div className="news-project-name" style={{float: 'unset'}}>
              {item.children.content.title.toUpperCase()}
            </div>
              <div>
                <span>{item.children.content.location}</span>
              </div>{" "}
              <div>
                <span>{item.children.content.attributes}</span>
              </div>{" "}
            </div>
          </span>
        </div>
      </Col>
    ));
  }

  render() {
    if (this.state.error) {
      return <p>Something went wrong! Try refreshing the page.</p>
    }
    if (!this.state.entries) {
      return <Loader />;
    }

    const dataSource = InTheNews.getNewsContent(this.state.entries);
    const childrenToRender = InTheNews.getChildrenToRender(
      dataSource.block.children
    );

    return (
      <React.Fragment>
        <div {...dataSource.wrapper}>
          <div {...dataSource.page}>
            <Row className="hero text-center pb-5">
              <h1>IN THE NEWS</h1>
            </Row>
            <Row className="pt-5">
              <div {...dataSource.block}>
                {childrenToRender}
              </div>
            </Row>
          </div>
        </div>
        <DocumentTitle title={"In the News | Melillo Equities"} />
      </React.Fragment>
    );
  }
}
