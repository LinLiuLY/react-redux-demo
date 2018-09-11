import React, { Component } from 'react';
import './App.css';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      { name: 'A', age: 10, belt: 'black', id: 1 },
      { name: 'B', age: 22, belt: 'black', id: 2 },
      { name: 'C', age: 30, belt: 'black', id: 3 }
    ]
  };

  addNinja = ninja => {
    this.setState({
      ninjas: [...this.state.ninjas, ninja]
    });
  };

  deleteNinja = id => {
    this.setState({});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">Hello</p>
        <AddNinja addNinja={this.addNinja} />
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
      </div>
    );
  }
}

export default App;
