import React, { Component } from 'react';
import { connect } from 'react-redux';

class LocalPost extends Component {
  render() {
    const { post } = this.props;
    if (!post) return <div className="center">Loading post ...</div>;

    const { title, body } = post;
    return (
      <div className="post">
        <h4 className="center">This is Title {title}</h4>
        <p>{body}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  };
};

export default connect(mapStateToProps)(LocalPost);
