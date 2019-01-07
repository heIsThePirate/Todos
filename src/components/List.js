import React from 'react';

const List = ({ todos }) => {
	return(
		<ul>
			{todos.map((item,index) => <li key={index}>{item}</li>)}
		</ul>
		);
}

export default List;