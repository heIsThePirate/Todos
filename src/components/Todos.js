import React from 'react';

const Todos = ({ counter, clickAdd, clickSub }) => {
		return (
			<div>
			<h2>{counter}</h2><br/>
			<button onClick={clickAdd}>+</button>
			<button onClick={clickSub}>-</button>
			</div>
			);
}

export default Todos;