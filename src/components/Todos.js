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
		
	}

	render() {
		return(
			<div>
				<input type='text' placeholder='Enter text' onChange={this.handleChange} />
				<button onClick={this.addToList}>Add</button>
				<ul>
				 <List todos={this.state.todos}/>
				</ul>
			</div>
			);
	}
}