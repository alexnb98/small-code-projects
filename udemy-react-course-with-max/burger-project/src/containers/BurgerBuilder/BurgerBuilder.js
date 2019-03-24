import React, { Component } from 'react';
import Burger from './../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import Modal from './../../components/UI/Modal/Modal';
import OrderSummary from './../../components/Burger/OrderSummary/OrderSummary';

const ING_COST = {
	cheese: 0.6,
	bacon: 0.8,
	salad: 0.5,
	meat: 1.3
};

export default class BurgerBuilder extends Component {
	state = {
		ingredients: {
			cheese: 0,
			bacon: 0,
			salad: 0,
			meat: 0
		},
		totalPrice: 4,
		purchesable: false,
		purchasing: false
	};

	purchaseHandler = () => {
		this.setState({ purchasing: true });
	};

	closeModalHandler = () => {
		this.setState({ purchasing: false });
	};

	purchaseContinueHandler = () => {
		alert('You continue!');
	};

	updatePurchesable = (ingredients) => {
		const sum = Object.keys(ingredients)
			.map((igKey) => {
				return ingredients[igKey];
			})
			.reduce((cur, el) => cur + el, 0);
		this.setState({ purchesable: sum > 0 });
	};

	addIng = (type) => {
		const ingCount = this.state.ingredients[type] + 1;
		const updatedIng = { ...this.state.ingredients };
		updatedIng[type] = ingCount;
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + ING_COST[type];
		this.setState({ ingredients: updatedIng, totalPrice: newPrice });
		this.updatePurchesable(updatedIng);
	};

	removeIng = (type) => {
		if (this.state.ingredients[type] <= 0) {
			return;
		}
		const ingCount = this.state.ingredients[type] - 1;
		const updatedIng = { ...this.state.ingredients };
		updatedIng[type] = ingCount;
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - ING_COST[type];
		this.setState({ ingredients: updatedIng, totalPrice: newPrice });
		this.updatePurchesable(updatedIng);
	};

	render() {
		const disabledInfo = {
			...this.state.ingredients
		};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		return (
			<React.Fragment>
				<Modal closeModal={this.closeModalHandler} show={this.state.purchasing}>
					<OrderSummary
						price={this.state.totalPrice}
						purchaseCancel={this.closeModalHandler}
						purchaseContinue={this.purchaseContinueHandler}
						ingredients={this.state.ingredients}
					/>
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<BurgerControls
					add={this.addIng}
					remove={this.removeIng}
					disabled={disabledInfo}
					price={this.state.totalPrice}
					purchesable={this.state.purchesable}
					ordered={this.purchaseHandler}
				/>
			</React.Fragment>
		);
	}
}
