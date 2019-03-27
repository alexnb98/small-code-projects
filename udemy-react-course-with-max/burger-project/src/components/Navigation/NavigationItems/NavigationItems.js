import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationItems.module.css';

export default function NavigationItems() {
	return (
		<div>
			<ul className={styles.NavigationItems}>
				<li className={styles.NavigationItem}>
					<NavLink activeClassName={styles.active} to="/" exact>
						Burger Builder
					</NavLink>
				</li>
				<li className={styles.NavigationItem}>
					<NavLink activeClassName={styles.active} to="/orders" exact>
						Orders
					</NavLink>
				</li>
				<li className={styles.NavigationItem}>
					<NavLink activeClassName={styles.active} to="/checkout">
						Checkout
					</NavLink>
				</li>
			</ul>
		</div>
	);
}
