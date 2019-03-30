import * as actionType from '../actions/actionTypes';
import { access } from 'fs';

const initialState = {
	ingredients: null,
	totalPrice: 4,
	purchesable: false,
	error: false
};

const ING_COST = {
	cheese: 0.6,
	bacon: 0.8,
	salad: 0.5,
	meat: 1.3
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.ADD_INGREDIENT:
			return {
				...state,
				ingredients: {
					...state.ingredients,
					[action.ingredientName]: state.ingredients[action.ingredientName] + 1
				},
				totalPrice: +(state.totalPrice + ING_COST[action.ingredientName]).toFixed(2)
			};
		case actionType.REMOVE_INGREDIENT:
			return {
				...state,
				ingredients: {
					...state.ingredients,
					[action.ingredientName]: state.ingredients[action.ingredientName] - 1
				},
				totalPrice: +(state.totalPrice - ING_COST[action.ingredientName]).toFixed(2)
			};
		case actionType.SET_INGREDIENTS:
			return {
				...state,
				ingredients: action.ingredients,
				error: false
			};
		case actionType.FETCH_INGREDIENTS_FAILED:
			return {
				...state,
				error: true
			};
		default:
			return state;
	}
};

export default reducer;
