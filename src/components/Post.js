import React, { Component } from 'react';

class Post extends Component {
  state = {
    id: null
  };

  componentDidMount() {
    console.log(this.props);
    let id = this.props.match.params.post_id;
    this.setState({
      id: id
    });
  }

  render() {
    const { id } = this.state;
    return (
      <div className="container">
        <h4>This is Id {id}</h4>
      </div>
    );
  }
}

export default Post;
