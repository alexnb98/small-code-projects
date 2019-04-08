import * as actionTypes from '../actions/actionTypes';

const initialState = {
	token: null,
	user: null,
	loading: true
};

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.AUTH_START:
			return { ...state, loading: true };
		case actionTypes.AUTH_SUCCESS:
			return { ...state, token: action.token, user: action.user, loading: false };
		case actionTypes.AUTH_ERROR:
			return { ...state, error: action.error, loading: false };
		default:
			return state;
	}
};
