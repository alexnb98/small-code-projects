import React, { Component } from 'react';
import Pill from '../components/Pills/Pill';
import { connect } from 'react-redux';
import ColorPill from '../components/Pills/ColorPill';
import SelectPill from '../components/Pills/SelectPill';
import * as actions from '../store/actions/actions';

class Product extends Component {
	state = {
		product: {
			id: null,
			color: '',
			number: 1
		}
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

	colorSelectHandler = (color) => {
		this.setState((state) => {
			return { product: { ...state.product, color } };
		});
	};

	render() {
		const productId = +this.props.match.params.id;
		const product = this.props.products.find((item) => {
			return productId === item.id;
		});
		const purchesable = !!this.state.product.color;
		let productComponent = <div className="my-5">FAIL</div>;
		if (product) {
			productComponent = (
				<React.Fragment>
					<div className="col-md-6">
						<img className="img-fluid rounded shadow" src={product.image} alt="Card-Id" />
					</div>
					<div className="col-md-6">
						<Pill content={'Review Stars: ' + product.stars} />
						<Pill content={'Price: ' + product.price + '$'} />
						<div className="d-flex mb-3">
							{product.colors.map((item, i) => {
								return (
									<ColorPill
										isSelected={item === this.state.product.color}
										click={this.colorSelectHandler.bind(this, item)}
										color={item}
										key={i}
									/>
								);
							})}
						</div>
						<div className="d-flex flex-wrap">
							<div className="col-8 pl-0">
								<button
									disabled={!purchesable}
									onClick={() => this.props.onAddItem({ ...this.state.product, ...product })}
									className="btn btn-primary btn-lg btn-block"
								>
									BUY
								</button>
							</div>
							<div className="col-4">
								{/* <button
									onClick={() => this.props.onRemoveItem(product.id)}
									className="btn btn-danger btn-lg btn-block"
								>
									REMOVE
								</button> */}
								<SelectPill
									change={this.numberChangeHandler}
									value={this.state.number}
									numbers={[ 1, 2, 3, 4, 5 ]}
								/>
							</div>
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
		products: state.products
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAddItem: (item) => dispatch(actions.addItem(item)),
		onRemoveItem: (id) => dispatch(actions.removeItem(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
