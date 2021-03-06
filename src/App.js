import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Post from './components/Post';
import Todo from './components/todo/Todo';
import LocalPosts from './components/post/LocalPosts';
import LocalPost from './components/post/LocalPost';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/posts" component={LocalPosts} />
            <Route path="/posts/:post_id" component={LocalPost} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/todo" component={Todo} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
