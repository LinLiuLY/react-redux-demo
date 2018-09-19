import React, { Component } from 'react';

class AddTodoForm extends Component {
  state = {
    content: ''
  };

  handleChange = event => {
    this.setState({
      content: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.addTodo({
      content: this.state.content,
      id: Math.random()
    });

    this.setState({
      content: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

export default AddTodoForm;
