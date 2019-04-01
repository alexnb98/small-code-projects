import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';

class Checkout extends Component {
	continueCheckoutHandler = () => {
		this.props.history.replace('/checkout/contact-data');
	};

	cancelCheckoutHandler = () => {
		this.props.history.goBack();
	};

	render() {
		let summary = <Redirect to="/" />;
		if (this.props.ingredients) {
			summary = (
				<div>
					<CheckoutSummary
						continue={this.continueCheckoutHandler}
						cancel={this.cancelCheckoutHandler}
						ingredients={this.props.ingredients}
					/>
					<Route path={this.props.match.path + '/contact-data'} component={ContactData} />
				</div>
			);
		}
		return summary;
	}
}

const mapStateToProps = (state) => {
	return { ingredients: state.burgerBuilder.ingredients };
};

export default connect(mapStateToProps)(Checkout);
