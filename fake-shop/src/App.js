import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Products from './containers/Products';
import Product from './containers/Product';
import ShopingCart from './containers/ShopingCart';
import Navbar from './components/Navbar';
import { connect } from 'react-redux';
import Login from './containers/login/Login';
import SignUp from './containers/signup/SignUp';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar items={this.props.inCartItems} />
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/signup" component={SignUp} />
						<Route path="/product/:id" component={Product} />
						<Route path="/cart" component={ShopingCart} />
						<Route path="/" component={Products} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state) => ({
	inCartItems: state.orders.cart.length
});

export default connect(mapStateToProps)(App);
