import React from 'react';
import BurgerControl from './BurgerControl/BurgerControl';
import styles from './BurgerControls.module.css';

const controls = [
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' },
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' }
];

export default function BurgerControls(props) {
	return (
		<div className={styles.BuildControls}>
			<p>
				Price: <strong>{props.price.toFixed(2)}$</strong>
			</p>
			{controls.map((ctrl) => (
				<BurgerControl
					key={ctrl.label}
					label={ctrl.label}
					add={() => props.add(ctrl.type)}
					remove={() => props.remove(ctrl.type)}
					disabled={props.disabled[ctrl.type]}
				/>
			))}
			<button onClick={props.ordered} className={styles.OrderButton} disabled={!props.purchesable}>
				PURCHASE NOW
			</button>
		</div>
	);
}
