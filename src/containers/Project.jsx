import React from "react";
import DocumentTitle from "react-document-title";
import { Row, Col, Anchor, Collapse } from "antd";
import BackAndForth from "../components/ui/BackAndForth";
import client from '../contentfulClient';
import Loader from '../components/ui/Loader';
import DOMPurify from 'dompurify';
// eslint-disable-next-line
const Panel = Collapse.Panel;
const showdown = require("showdown");
const moment = require("moment");
// eslint-disable-next-line
const { Link } = Anchor;

export default class Projects extends React.PureComponent {
  state = { 
    post: null,
    linkPrev: null,
    linkNext: null,
    error: null,
  };

  componentDidMount() {
    const project = this.props.match.params.project;
    const slug = this.props.match.params.slug;
    const id = this.props.match.params.id;
    client.getEntries({
        content_type: "inTheNews",
        "sys.id": id,
    })
    .then(entries => {
      console.log(entries)
      if (!entries) this.setState({error: {message: "No entry was found for " + slug}});
      else {
        this.setState({post: entries.items[0]});

        // fetch previous and next
        client.getEntries({
          content_type: "inTheNews",
          "fields.project.sys.contentType.sys.id": "projects",
          "fields.project.fields.slug[match]": project,
          "fields.publishDate[gt]": entries.items[0].fields.publishDate,
          order: "fields.publishDate",
          limit: 1,
        })
        .then(entries => {
          if (entries && entries.items.length > 0) {
            this.setState({ linkPrev: `/news/${this.props.match.params.project}/${entries.items[0].fields.slug}/${entries.items[0].sys.id}` });
          }
        })
        client.getEntries({
          content_type: "inTheNews",
          "fields.project.sys.contentType.sys.id": "projects",
          "fields.project.fields.slug[match]": project,
          "fields.publishDate[lt]": entries.items[0].fields.publishDate,
          order: "-fields.publishDate",
          limit: 1,
        })
        .then(entries => {
          if (entries && entries.items.length > 0) {
            this.setState({ linkNext: `/news/${this.props.match.params.project}/${entries.items[0].fields.slug}/${entries.items[0].sys.id}` });
          }
        })
      }
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
      <React.Fragment>
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
                  <h3 className="section-header-blue date my-5">
                    {moment(this.state.post.fields.publishDate).format(
                      "MMMM DD, Y"
                    )}
                  </h3>
                  <h5 className="post-title">
                    <img
                      style={{ maxWidth: "50%" }}
                      className="ml-auto mr-auto mb-5"
                      src={this.state.post.fields.newsHeaderImage.fields.file.url}
                      alt="Courier News"
                    />
                    <b className="section-header-lightblue">
                      {this.state.post.fields.title.toUpperCase()}
                    </b>
                  </h5>

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
              linkPrev={this.state.linkPrev}
              linkNext={this.state.linkNext}
            />
          </div>
        </DocumentTitle>
      </React.Fragment>
    );
  }
}
