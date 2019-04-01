import React, { Component } from 'react';
import axios from '../../axios-orders';
import Burger from './../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import Modal from './../../components/UI/Modal/Modal';
import OrderSummary from './../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class BurgerBuilder extends Component {
	state = {
		purchasing: false,
		loading: false
	};

	componentDidMount() {
		this.props.onSetIngredient();
	}

	purchaseHandler = () => {
		this.setState({ purchasing: true });
	};

	closeModalHandler = () => {
		this.setState({ purchasing: false });
	};

	purchaseContinueHandler = () => {
		this.props.history.push('/checkout');
	};

	updatePurchesable = () => {
		const sum = Object.keys(this.props.ingredients)
			.map((igKey) => {
				return this.props.ingredients[igKey];
			})
			.reduce((cur, el) => cur + el, 0);
		return sum > 0;
	};

	render() {
		const disabledInfo = {
			...this.props.ingredients
		};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		let order = null;

		let burger = this.props.error ? <p>Can't load ingredients</p> : <Spinner />;
		if (this.props.ingredients) {
			burger = (
				<React.Fragment>
					<Burger ingredients={this.props.ingredients} />
					<BurgerControls
						add={this.props.onAddIngredient}
						remove={this.props.onRemoveIngredient}
						disabled={disabledInfo}
						price={this.props.price}
						purchesable={this.updatePurchesable()}
						ordered={this.purchaseHandler}
					/>
				</React.Fragment>
			);
			order = (
				<OrderSummary
					price={this.props.price}
					purchaseCancel={this.closeModalHandler}
					purchaseContinue={this.purchaseContinueHandler}
					ingredients={this.props.ingredients}
				/>
			);
		}

		return (
			<React.Fragment>
				<Modal closeModal={this.closeModalHandler} show={this.state.purchasing}>
					{order}
				</Modal>
				{burger}
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		ingredients: state.burgerBuilder.ingredients,
		price: state.burgerBuilder.totalPrice,
		error: state.burgerBuilder.error
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAddIngredient: (ingName) => dispatch(actions.addIngredient(ingName)),
		onRemoveIngredient: (ingName) => dispatch(actions.removeIngredient(ingName)),
		onSetIngredient: () => dispatch(actions.initIngredients())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
