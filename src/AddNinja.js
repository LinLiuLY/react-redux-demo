import React, { Component } from 'react';

export default class AddNinja extends Component {
  state = {
    name: null,
    age: null,
    belt: null
  };

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNinja({ ...this.state, id: Math.random() });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">name:</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="age">age</label>
          <input type="text" id="age" onChange={this.handleChange} />
          <label htmlFor="belt">belt:</label>
          <input type="text" id="belt" onChange={this.handleChange} />
          <button>submit</button>
        </form>
      </div>
    );
  }
}
