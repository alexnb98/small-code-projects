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
				dispatch(purchaseBurgerSuccess(res.data.name, order));
			})
			.catch((error) => {
				dispatch(purchaseBurgerFail(error));
			});
	};
};

export const fetchOrdersSuccess = (orders) => {
	return {
		type: actionTypes.FETCH_ORDERS_SUCCESS,
		orders
	};
};

export const fetchOrdersError = (error) => {
	return {
		type: actionTypes.FETCH_ORDERS_FAIL,
		error
	};
};

export const fetchOrdersStart = () => {
	return { type: actionTypes.FETCH_ORDERS_START };
};

export const fetchOrders = () => {
	fetchOrdersStart();
	return (dispatch) => {
		axios
			.get('/orders.json')
			.then((res) => {
				const fetchedOrders = [];
				for (let key in res.data) {
					fetchedOrders.push({ ...res.data[key], id: key });
				}
				dispatch(fetchOrdersSuccess(fetchedOrders));
			})
			.catch((error) => {
				dispatch(fetchOrdersError(error));
			});
	};
};
