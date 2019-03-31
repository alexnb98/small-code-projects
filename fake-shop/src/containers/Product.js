import React, { Component } from 'react';

export default class Product extends Component {
	render() {
		return (
			<div>
				<div className="container my-5">
					<div className="row">
						<div className="col-md-6">
							<img
								className="img-fluid rounded shadow"
								src="http://lorempixel.com/640/480/business"
								alt="Card-Id"
							/>
						</div>
						<div className="col-md-6">
							<div className="mb-3 p-3 shadow-sm bg-light">
								<h2>Reviews: 4.5</h2>
							</div>

							<div className="mb-3 p-3 shadow-sm bg-light">
								<h2>Price: 25$</h2>
							</div>

							<div className="d-flex mb-3">
								<div
									className="rounded mr-3"
									style={{ width: '3rem', height: '3rem', background: '#32ee8a' }}
								/>
								<div
									className="rounded mr-3"
									style={{ width: '3rem', height: '3rem', background: '#d92583' }}
								/>
							</div>

							<div className="d-flex flex-wrap">
								<div className="col-8 pl-0">
									<div className="btn btn-primary btn-lg btn-block">BUY</div>
								</div>
								<div className="col-4">
									<select className="form-control h-100">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
								</div>
							</div>
						</div>
						<div className="col-12 my-3 mx-3 p-3 shadow">
							<h1 className="">Product Title</h1>
							<p className="">Omnis adipisci consequuntur illum inventore id esse sit id fugit.</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
