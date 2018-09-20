import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

    const postContent = ({ id, title, body }) => (
      <div className="post card" key={id}>
        <div className="card-content">
          <Link to={`/${id}`}>
            <span className="card-title">{title}</span>
          </Link>
          <p>{body}</p>
        </div>
      </div>
    );

    return posts.map(post => postContent(post));
  }
}

export default Home;
