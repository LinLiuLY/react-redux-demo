import React, { Component } from 'react';
import { Todos } from './Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: 'buy some milk'
      },
      {
        id: 2,
        content: 'play mario kart'
      }
    ]
  };

  deleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    return (
      <div>
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
