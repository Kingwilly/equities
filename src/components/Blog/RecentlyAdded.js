import React, { Component } from "react";
import { Link } from "react-router-dom";

class RecentlyAdded extends Component {
  renderRecentEntries() {
    return this.props.entries.map(function(post) {
      console.log(post);
      return (
        <Link
          to={"/our-journal/" + post.sys.id + "/" + post.fields.slug}
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

export default RecentlyAdded;
