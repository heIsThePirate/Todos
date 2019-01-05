import React, { Component } from 'react';
import './App.css';
import Heading from './components/Heading';
import Todos from './components/Todos';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickSub = this.handleClickSub.bind(this);
  }

  handleClickAdd() {
    this.setState((state) => {
      return state.counter++;
    });
  }

  handleClickSub() {
    this.setState((state) => {
      return state.counter--;
    });
  }
  render() {
    return (
      <div className="App">
        <Heading />
        <Todos 
         counter={this.state.counter} 
         clickAdd={this.handleClickAdd} 
         clickSub={this.handleClickSub} 
        />
      </div>
    );
  }
}

export default App;
