import React from 'react';
import styles from './NavigationItems.module.css';

export default function NavigationItems() {
	return (
		<div>
			<ul className={styles.NavigationItems}>
				<li className={styles.NavigationItem}>
					<a className={styles.active} href="/">
						Burger Builder
					</a>
				</li>
				<li className={styles.NavigationItem}>
					<a href="/">Checkout</a>
				</li>
			</ul>
		</div>
	);
}
