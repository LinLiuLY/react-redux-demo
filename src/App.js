import React, { Component } from 'react';
import { Todos } from './Todos';
import AddTodoForm from './AddForm';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Post from './components/Post';

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
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/:post_id" component={Post} />

          <h1 className="center blue-text">Todo's</h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
          <AddTodoForm addTodo={this.addTodo} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
