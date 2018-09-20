import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
  state = {
    post: null
  };

  componentDidMount() {
    let id = this.props.match.params.post_id;
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
      this.setState({
        post: res.data
      });
    });
  }

  render() {
    const { post } = this.state;
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

export default Post;
