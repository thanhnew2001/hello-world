import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {combineReducers} from 'redux'

function orderReducers(state = [], action){
	switch(action.type){
		case 'LOAD_ORDERS':
			return [
		{id: '001', customer: 'David'},
		{id: '002', customer: 'Petter'},
		{id: '003', customer: 'Jorn'},
		{id: '004', customer: 'Sahay'},
		]

		default: 
			return state;
	}
}
const orderApp = combineReducers({
	orderReducers,
	//you can put other reducers here later
})

const store = createStore(orderApp)

ReactDOM.render(

<Provider store={store}>
	<App />
</Provider>

	, document.getElementById('app'))



