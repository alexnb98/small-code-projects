import React from 'react';
import styles from './BurgerControl.module.css';

export default function BurgerControl(props) {
	return (
		<div className={styles.BuildControl}>
			<div className={styles.Label}>{props.label}</div>
			<button className={styles.Less} onClick={props.remove} disabled={props.disabled}>
				Less
			</button>
			<button className={styles.More} onClick={props.add}>
				More
			</button>
		</div>
	);
}
