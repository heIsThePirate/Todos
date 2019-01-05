import React, { Component } from 'react';

export default class extends Component {
	constructor() {
		super();
		this.state = {
			counters: [
				{
					index: 0,
					value: 0,
				}
			],
		};
	}

	displayCounters = () => {
		const counters = this.state.counters.map((counter) => {
			return (
				<div key={counter.index}>
					<h2>{counter.value}</h2>
					<br />
					<button>+</button>
					<button>-</button>
				</div>
				);
		});
		return counters;
	}

	addCounters = () => {
		this.setState((state) => {
			return(
				state.counters.push({
					index: state.counters[state.counters.length - 1].index + 1,
					value: 0,
				})
				);
		})
	}

	render() {
		return(
		<div>
			{this.displayCounters()}
			<br />
			<button onClick={this.addCounters}>Add Counter</button>
		</div>
		);
	}
}