import React from 'react';

const Counter = ({ counter, clickAdd, clickSub }) => {
		return (
			<div>
			<h2>{counter}</h2><br/>
			<button onClick={clickAdd}>+</button>
			<button onClick={clickSub}>-</button>
			</div>
			);
}

export default Counter;