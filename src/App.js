import React, { Component } from 'react';
import './App.css';
import Heading from './components/Heading';
import Counter from './components/Counter';
import Countercomp from './components/Countercomp';

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
        <div>
          <Heading content="Counter" />
          <Counter 
           counter={this.state.counter} 
           clickAdd={this.handleClickAdd} 
           clickSub={this.handleClickSub} 
          />
        </div>
        <div>
          <Heading content="Render Counter Component" />
          <Countercomp />
        </div>
      </div>
    );
  }
}

export default App;
