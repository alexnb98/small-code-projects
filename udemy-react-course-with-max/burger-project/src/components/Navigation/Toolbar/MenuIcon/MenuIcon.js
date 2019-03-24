import React from 'react';
import styles from './MenuIcon.module.css';

export default function MenuIcon(props) {
	return (
		<div onClick={props.clicked} className={styles.DrawerToggle}>
			<div />
			<div />
			<div />
		</div>
	);
}
