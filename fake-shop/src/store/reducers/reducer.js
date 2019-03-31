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
			const productIndex = state.cart.findIndex((obj) => obj.id === action.item.id);
			if (productIndex !== -1) {
				const cart = [ ...state.cart ];
				cart[productIndex].number++;
				return {
					...state,
					cart
				};
			}
			const item = { ...action.item, number: 1 };
			return {
				...state,
				cart: state.cart.concat(item)
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
