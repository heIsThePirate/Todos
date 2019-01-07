import React, { Component } from 'react';
import List from './List';

export default class Todos extends Component {
	constructor() {
		super();
		this.state = {
			text: '',
			todos: [],
		}
	}

	handleChange = (event) => {
		this.setState({text: event.target.value});
	}

	addToList = () => {
		if(this.state.text.length) {
			this.setState(state => state.todos.push(state.text));
			this.setState({text: ''});
		}
	}

	render() {
		return(
			<div>
				<input type='text' value={this.state.text} placeholder='Enter text' onChange={this.handleChange} />
				<button onClick={this.addToList}>Add</button>
				 <List todos={this.state.todos} />
			</div>
			);
	}
}