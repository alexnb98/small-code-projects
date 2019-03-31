import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Products from './containers/Products';
import Product from './containers/Product';
import ShopingCart from './containers/ShopingCart';
import Navbar from './components/Navbar';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<Switch>
						<Route path="/product/:id" component={Product} />
						<Route path="/cart" component={ShopingCart} />
						<Route path="/" component={Products} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
