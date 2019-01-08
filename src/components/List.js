import React from 'react';

const List = ({ todos, toggle }) => {
	return(
		<ul>
			{todos.map((obj,index) => {
				if (obj.toggle){
				return <li key={index} value={index} onClick={toggle}>{obj.item}</li>
			} else {
				return <del key={index}><li value={index} onClick={toggle}>{obj.item}</li></del>
			}
			})}
		</ul>
		);
}

export default List;