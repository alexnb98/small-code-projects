import * as actionTypes from '../actions/actionTypes';
import data from '../../data/products-data';

const initialState = {
	products: data,
	cart: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_PRODUCTS:
			const products = data;
			return {
				...state,
				products
			};
		case actionTypes.ADD_ITEM:
			return {
				...state,
				cart: state.cart.concat(action.item)
			};
		case actionTypes.REMOVE_ITEM:
			const cart = state.cart.filter((item) => item.id !== action.id);
			return {
				...state,
				cart
			};
		default:
			return state;
	}
};

export default reducer;
