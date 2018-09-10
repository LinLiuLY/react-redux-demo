import React, { Component } from 'react';
import './App.css';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas: [
      { name: 'A', age: 1, belt: 'black', id: 1 },
      { name: 'B', age: 2, belt: 'black', id: 2 },
      { name: 'C', age: 3, belt: 'black', id: 3 }
    ]
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">Hello</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
