import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
	return {
		type: actionTypes.PURCHASE_BURGER_SUCCESS,
		orderId: id,
		orderData
	};
};

export const purchaseBurgerFail = (error) => {
	return {
		type: actionTypes.PURCHASE_BURGER_FAIL,
		error
	};
};

export const purchaseBurgerStart = () => {
	return {
		type: actionTypes.PURCHASE_BURGER_START
	};
};

export const purchaseBurger = (order) => {
	purchaseBurgerStart();
	return (dispatch) => {
		axios
			.post('/orders.json', order)
			.then((res) => {
				dispatch(purchaseBurgerSuccess(res.data, order));
			})
			.catch((error) => {
				dispatch(purchaseBurgerFail(error));
			});
	};
};
