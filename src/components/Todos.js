import React, { Component } from 'react';
import List from './List';

export default class Todos extends Component {
	render() {
		return(
			<div>
				<input type='text' placeholder='Enter text' />
				<button>Add</button>
				<ul>
				 <List />
				</ul>
			</div>
			);
	}
}