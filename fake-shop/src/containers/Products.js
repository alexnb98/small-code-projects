import React, { Component } from 'react';
import ProductCard from './../components/ProductCard/ProductCard';

export default class Products extends Component {
	render() {
		return (
			<div>
				<div className="jumbotron">
					<div className="container">
						<h1 className="display-4">All Products</h1>
						<p className="lead">
							This is a simple hero unit, a simple jumbotron-style component for calling extra attention
							to featured content or information.
						</p>
					</div>
				</div>

				<div className="container my-5">
					<div className="row">
						<div className="col-md-4">
							<ProductCard />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
