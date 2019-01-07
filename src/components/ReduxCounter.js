import React from 'react';
import Counter from './Counter';
import { createStore } from 'redux';

const reducer = (state=0, action) => {
	switch(action.type){
		case 'INCREMENT':
			return state+1;
		case 'DECREMENT':
			return state-1;
		default:
			return state;
	}
}

const store = createStore(reducer);

const ReduxCounter = () => {
	return <Counter counter={store.getState()}
	 clickAdd={() => store.dispatch({type:'INCREMENT'})}
	 clickSub={() => store.dispatch({type:'DECREMENT'})} />
}

store.subscribe(ReduxCounter);
export default ReduxCounter;