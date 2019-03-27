import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
	state = {
		ingredients: null
	};

	componentWillMount() {
		const query = new URLSearchParams(this.props.location.search);
		const ingredients = {};
		for (let param of query.entries()) {
			ingredients[param[0]] = +param[1];
		}
		this.setState({ ingredients });
	}

	continueCheckoutHandler = () => {
		this.props.history.replace('/checkout/contact-data');
	};

	cancelCheckoutHandler = () => {
		this.props.history.goBack();
	};

	render() {
		return (
			<div>
				<CheckoutSummary
					continue={this.continueCheckoutHandler}
					cancel={this.cancelCheckoutHandler}
					ingredients={this.state.ingredients}
				/>
				<Route
					path={this.props.match.path + '/contact-data'}
					render={(props) => <ContactData {...props} ingredients={this.state.ingredients} />}
				/>
			</div>
		);
	}
}

export default Checkout;
