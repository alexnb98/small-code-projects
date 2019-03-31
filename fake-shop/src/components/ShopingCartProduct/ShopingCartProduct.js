import React from 'react';
import styles from './ShopingCartProduct.module.css';

export default function ShopingCartProduct(props) {
	return (
		<div className="d-flex flex-wrap my-5 shadow-sm position-relative">
			<div onClick={props.click} className={styles.Close} />
			<div className="col-3 pl-0">
				<img className="img-fluid rounded shadow" src={props.image} alt={props.title} />
			</div>
			<div className="col-6 py-3">
				<h4 className="mb-2">{props.title}</h4>
				<hr />
				<div className="d-flex align-items-center">
					<p>Color</p>
					<div className="rounded ml-3" style={{ width: '3rem', height: '3rem', background: '#d92583' }} />
				</div>
			</div>
			<div className="col-3 d-flex flex-column justify-content-around pr-5">
				<div className="rounded border p-3">
					<p className="mb-0">Quantity: 3</p>
				</div>
				<div className="rounded border p-3">
					<p className="mb-0">Price: {props.price}$</p>
				</div>
			</div>
		</div>
	);
}
