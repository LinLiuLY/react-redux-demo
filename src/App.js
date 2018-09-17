import React, { Component } from 'react';
import { Todos } from './Todos';
import AddTodoForm from './AddForm';

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

  addTodo = todo => {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  };

  render() {
    return (
      <div>
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
