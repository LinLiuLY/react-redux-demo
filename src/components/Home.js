import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';

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

    const postContent = ({ id, title, body }) => (
      <div className="post card" key={id}>
        <img src={Pokeball} alt="Pokeball" />
        <div className="card-content">
          <Link to={`/${id}`}>
            <span className="card-title">{title}</span>
          </Link>
          <p>{body}</p>
        </div>
      </div>
    );

    const postList =
      posts.length > 0 ? (
        posts.map(post => postContent(post))
      ) : (
        <div className="container">
          <h4 className="center">Home page</h4>
        </div>
      );

    return (
      <div>
        <div className="container home">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      </div>
    );
  }
}

export default Home;
