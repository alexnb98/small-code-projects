import React, { Component } from 'react';
import ShopingCartProduct from '../components/ShopingCartProduct/ShopingCartProduct';
import { connect } from 'react-redux';
import * as actions from '../store/actions/actions';
import { Link } from 'react-router-dom';
import OrderCheckout from '../components/OrderCheckout/OrderCheckout';

class ShopingCart extends Component {
	render() {
		let inCartProducts = (
			<div className="p-5 shadow rounded text-center">
				<p className="display-4">Your Cart is Empty</p>
				<Link to="/" className="btn btn-outline-primary btn-lg">
					Start Shoping
				</Link>
			</div>
		);
		let order = null;
		if (this.props.cartItems.length) {
			const totalPrice = this.props.cartItems.reduce((acc, cur) => {
				return acc + cur.price * cur.number;
			}, 0);
			order = <OrderCheckout totalPrice={totalPrice} />;
			inCartProducts = this.props.cartItems.map((item) => {
				return (
					<ShopingCartProduct
						key={item.id}
						title={item.title}
						click={() => this.props.onRemoveItem(item.id)}
						price={item.price}
						image={item.image}
						color={item.color}
						number={item.number}
					/>
				);
			});
		}
		return (
			<div className="container my-5">
				<div className="position-absolute" />
				<div className="jumbotron">
					<h1 className="display-4">Your Shoping Cart</h1>
				</div>
				{inCartProducts}
				{order}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		cartItems: state.cart
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onRemoveItem: (id) => dispatch(actions.removeItem(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopingCart);
