import * as actionTypes from './actionTypes';

export const fetchProducts = () => ({
	type: actionTypes.FETCH_PRODUCTS
});

export const addItem = (item) => ({
	type: actionTypes.ADD_ITEM,
	item
});

export const removeItem = (id) => ({
	type: actionTypes.REMOVE_ITEM,
	id
});
