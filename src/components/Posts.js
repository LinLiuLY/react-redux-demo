import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';

class Posts extends Component {
  render() {
    const { posts } = this.props;
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
const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Posts);
