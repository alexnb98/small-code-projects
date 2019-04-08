import React, { Component } from 'react';

export default class Login extends Component {
	render() {
		return (
			<div className="container my-5">
				<div className="row justify-content-center">
					<div className="col-md-6 shadow p-5 rounded">
						<h1>Login</h1>
						<hr />
						<form>
							<div className="form-group">
								<label htmlFor="email">Email</label>
								<input type="email" placeholder="Email" id="email" className="form-control" />
							</div>
							<div className="form-group">
								<label htmlFor="password">Email</label>
								<input type="password" placeholder="Password" id="password" className="form-control" />
							</div>
							<button className="btn btn-success">Submit</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
