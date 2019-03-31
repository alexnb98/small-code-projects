import React, { Component } from 'react';
import ShopingCartProduct from '../components/ShopingCartProduct/ShopingCartProduct';
import { connect } from 'react-redux';
import * as actions from '../store/actions/actions';

class ShopingCart extends Component {
	render() {
		let inCartProducts = this.props.cartItems.map((item) => {
			return (
				<ShopingCartProduct
					key={item.id}
					title={item.title}
					click={() => this.props.onRemoveItem(item.id)}
					price={item.price}
					image={item.image}
				/>
			);
		});
		return (
			<div className="container my-5">
				<div className="position-absolute" />
				<div className="jumbotron">
					<h1 className="display-4">Your Shoping Cart</h1>
				</div>
				{inCartProducts}
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
