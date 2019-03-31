import React from 'react';
import { NavLink } from 'react-router-dom';

export default function navbar() {
	return (
		<div className="py-2 bg-primary">
			<div className="container">
				<nav className="d-flex align-items-center justify-content-between">
					<div>
						<NavLink className="navbar-brand text-white" to="/">
							Fake Shop
						</NavLink>
					</div>
					<div>
						<NavLink to="/cart" className="btn btn-light">
							Cart <span className="badge badge-danger">4</span>
						</NavLink>
					</div>
				</nav>
			</div>
		</div>
	);
}
