import React, { Component } from 'react';
import ShopingCartProduct from '../components/ShopingCartProduct/ShopingCartProduct';

export default class ShopingCart extends Component {
	render() {
		return (
			<div className="container my-5">
				<div className="position-absolute" />
				<div className="jumbotron">
					<h1 className="display-4">Your Shoping Cart</h1>
				</div>

				<ShopingCartProduct />
			</div>
		);
	}
}
