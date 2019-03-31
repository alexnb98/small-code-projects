import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

export default function ProductCard() {
	return (
		<div className="card shadow">
			<Link to="/product/4">
				<img className="card-img-top" src="http://lorempixel.com/640/480/business" alt="Card-Id" />
			</Link>
			<div className="card-body position-relative">
				<div className={styles.Price + ' bg-primary text-white px-3 py-1 rounded shadow text-center'}>
					<p className="mb-0">25$</p>
				</div>
				<h4 className="card-title">Product Title</h4>
				<p className="card-text">Omnis adipisci consequuntur illum inventore id esse sit id fugit.</p>
			</div>
		</div>
	);
}
