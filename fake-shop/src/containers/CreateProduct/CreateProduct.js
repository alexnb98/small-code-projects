import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { createProduct } from '../../store/actions/authActions';
import Spinner from '../../components/UI/Spinner/Spinner';

class CreateProduct extends Component {
	state = {
		title: '',
		description: '',
		price: 0
	};

	inputChangeHandler = (e) => {
		this.setState({ [e.target.id]: e.target.value });
	};

	submitHandler = (e) => {
		e.preventDefault();
		this.props.onCreateProduct(this.state);
	};
	render() {
		let loading = this.props.loading ? <Spinner /> : null;
		return (
			<div className="container my-5">
				<div className="row justify-content-center">
					<div className="col-md-6 rounded shadow p-5">
						{loading}
						<h1>Create New Product</h1>
						<hr />
						<form>
							<div className="form-group">
								<label htmlFor="title">Title</label>
								<input
									onChange={this.inputChangeHandler}
									value={this.state.title}
									type="text"
									placeholder="Title"
									id="title"
									className="form-control"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="price">Price</label>
								<input
									onChange={this.inputChangeHandler}
									value={this.state.price}
									type="number"
									placeholder="Price"
									id="price"
									className="form-control"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="description">Description</label>
								<textarea
									onChange={this.inputChangeHandler}
									value={this.state.description}
									name="description"
									id="description"
									className="form-control"
								/>
							</div>
							<button onClick={this.submitHandler} className="btn btn-success">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.auth.loading
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		// onCreateProduct: (product) => dispatch(createProduct(product))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);
