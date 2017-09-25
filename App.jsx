import React from 'react'
import {connect} from 'react-redux'

class App extends React.Component{

	componentWillMount(){
		this.props.dispatch({type: 'LOAD_ORDERS'});
	}

	render(){
		return(
			<div>
			<h1>List of orders</h1>

			<ul>
				{this.props.orders.map((order, i)=>
					<li key={i}>{order.customer}</li>
				)
				}
			</ul>

			<h1>Add/Update an order</h1>

			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		orders: state.orderReducers
	}	
}

export default connect(mapStateToProps)(App)