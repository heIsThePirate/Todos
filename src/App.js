import React, { Component } from 'react';
import './App.css';
import Heading from './components/Heading';
import Todos from './components/Todos';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Heading />
        <Todos />
      </div>
    );
  }
}

export default App;
