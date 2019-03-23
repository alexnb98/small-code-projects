import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

export default function burger(props) {
	let transIng = Object.keys(props.ingredients) // Array of Key values
		.map((igKey) => {
			// map over the values
			return [ ...Array(props.ingredients[igKey]) ].map((_, i) => {
				// create Array with length of number of ingredients
				return <BurgerIngredients key={igKey + i} type={igKey} />;
			});
		})
		.reduce((arr, el) => arr.concat(el), []);
	if (transIng.length === 0) {
		transIng = <p>Please start adding ingredients!</p>;
	}
	return (
		<div className={styles.Burger}>
			<BurgerIngredients type="bread-top" />
			{transIng}
			<BurgerIngredients type="bread-bottom" />
		</div>
	);
}
