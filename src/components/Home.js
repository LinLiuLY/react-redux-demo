import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      console.log(res);
      this.setState({
        posts: res.data.slice(0, 10)
      });
    });
  }

  render() {
    const { posts } = this.state;

    if (posts.length <= 0)
      return (
        <div className="container">
          <h4 className="center">Home page</h4>
        </div>
      );

    const postContent = post => (
      <div className="post card" key={post.id}>
        <div className="card-content">
          <span className="card-title">{post.title}</span>
          <p>{post.body}</p>
        </div>
      </div>
    );

    return posts.map(post => postContent(post));
  }
}

export default Home;
