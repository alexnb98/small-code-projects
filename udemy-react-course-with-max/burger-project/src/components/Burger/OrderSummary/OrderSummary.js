import React from 'react';
import Button from '../../UI/Button/Button';

export default function orderSummary(props) {
	const ingList = Object.keys(props.ingredients).map((igKey) => {
		return (
			<li key={igKey}>
				<span style={{ textTransform: 'capitalize' }}>{igKey}:</span> {props.ingredients[igKey]}
			</li>
		);
	});
	return (
		<React.Fragment>
			<h3>Your Order</h3>
			<p>You have ordered a burger with this ingredients: </p>
			<ul>{ingList}</ul>
			<Button btnType="Danger" clicked={props.purchaseCancel}>
				CANCEL
			</Button>
			<Button btnType="Success" clicked={props.purchaseContinue}>
				CONTINUE
			</Button>
		</React.Fragment>
	);
}
