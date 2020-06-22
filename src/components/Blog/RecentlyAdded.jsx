import React from "react";
import { Link } from "react-router-dom";

export default class RecentlyAdded extends React.PureComponent {
  renderRecentEntries() {
    return this.props.entries.map(function(post) {
      return (
        <Link
          to={"/press/" + post.sys.id + "/" + post.fields.slug}
          className="related-article"
          style={{ marginBottom: "30px" }}
        >
          <p className="title">{post.fields.title}</p>
        </Link>
      );
    });
  }
  render() {
    if (!this.props.entries) {
      return null;
    }
    return (
      <div className="related-articles-content">
        <p className="title">RECENTLY POSTED</p>
        {this.renderRecentEntries()}
      </div>
    );
  }
}
