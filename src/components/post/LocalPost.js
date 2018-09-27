import React, { Component } from 'react';
import { connect } from 'react-redux';

class LocalPost extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/posts');
  };

  render() {
    const { post } = this.props;
    if (!post) return <div className="center">Loading post ...</div>;

    const { title, body } = post;
    return (
      <div className="post">
        <h4 className="center">This is Title {title}</h4>
        <p>{body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            delete post
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => String(post.id) === String(id))
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      dispatch({ type: 'DELETE_POST', id: id });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocalPost);
