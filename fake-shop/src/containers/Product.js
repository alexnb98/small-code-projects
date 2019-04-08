import React, { Component } from 'react';
import Pill from '../components/Pills/Pill';
import { connect } from 'react-redux';
import SelectPill from '../components/Pills/SelectPill';
import * as actions from '../store/actions/actions';
import { Link } from 'react-router-dom';

class Product extends Component {
	state = {
		product: {
			id: null,
			number: 1
		},
		inCart: false
	};

	componentDidMount() {
		const product = { ...this.state.product };
		product.id = this.props.match.params.id;
		this.setState({ product });
	}

	numberChangeHandler = (event) => {
		const number = Number(event.target.value);
		this.setState((state) => {
			return { product: { ...state.product, number } };
		});
	};

	ifInCartIndex = (id) => {
		return this.props.cart.findIndex((item) => item.id === id);
	};

	render() {
		const productId = +this.props.match.params.id;
		const product = this.props.products.find((item) => {
			return productId === item.id;
		});
		let productComponent = (
			<div className="my-5 alert alert-danger w-100 p-3" role="alert">
				<p>Something went wrong.</p>
				<Link className="alert-link" to="/">
					Go to Home Page
				</Link>
			</div>
		);

		if (product) {
			const cartIndex = this.ifInCartIndex(product.id);
			let itemInCart = <div className="alert alert-secondary">This item is not in your cart</div>;
			if (cartIndex !== -1) {
				itemInCart = (
					<div className="alert alert-success">
						This item is {this.props.cart[cartIndex].number}{' '}
						{this.props.cart[cartIndex].number > 1 ? 'times' : 'time'} in your Cart
					</div>
				);
			}

			productComponent = (
				<React.Fragment>
					<div className="col-md-6">
						<img className="img-fluid rounded shadow" src={product.image} alt="Card-Id" />
					</div>
					<div className="col-md-6">
						<Pill content={'Review Stars: ' + product.stars} />
						<Pill content={'Price: ' + product.price + '$'} />
						<div className="d-flex flex-wrap">
							<div className="col-4 pl-0">
								<button
									onClick={() => this.props.onAddItem({ ...this.state.product, ...product })}
									className="btn btn-primary btn-lg btn-block"
								>
									BUY
								</button>
							</div>
							<div className="col-4">
								<SelectPill
									change={this.numberChangeHandler}
									value={this.state.number}
									numbers={[ 1, 2, 3, 4, 5 ]}
								/>
							</div>
							<div className="col-4">
								<button
									onClick={() => this.props.onRemoveItem(product.id)}
									className="btn btn-danger btn-lg btn-block"
								>
									REMOVE
								</button>
							</div>
							<div className="col-12 my-3 px-0">{itemInCart}</div>
						</div>
					</div>
					<div className="col-12 my-3 mx-3 p-3 shadow">
						<h1>{product.title}</h1>
						<p>{product.description}</p>
					</div>
				</React.Fragment>
			);
		}
		return (
			<div>
				<div className="container my-5">
					<div className="row">{productComponent}</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		products: state.orders.products,
		cart: state.orders.cart
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAddItem: (item) => dispatch(actions.addItem(item)),
		onRemoveItem: (id) => dispatch(actions.removeItem(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
