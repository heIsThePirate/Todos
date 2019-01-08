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
			this.setState(state => {
				const obj = {item: state.text, toggle: true};
				return state.todos.push(obj);
			});
			this.setState({text: ''});
		}
	}

	toggle = (event) => {
		const index = event.target.value;
		this.setState(state => {
			return state.todos[index].toggle = !state.todos[index].toggle;
		});
	}

	render() {
		return(
			<div>
				<input type='text' value={this.state.text} placeholder='Enter text' onChange={this.handleChange} />
				<button onClick={this.addToList}>Add</button>
				<List todos={this.state.todos} toggle={this.toggle} />
			</div>
			);
	}
}