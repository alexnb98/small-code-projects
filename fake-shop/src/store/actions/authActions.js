import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => ({
	type: actionTypes.AUTH_START
});

export const authSuccess = (token, user) => ({
	type: actionTypes.AUTH_SUCCESS,
	token,
	user
});

export const authError = (error) => ({
	type: actionTypes.AUTH_ERROR,
	error
});

export const authSignUp = (email, password) => {
	const apiKey = 'AIzaSyCyMhILBQK1TROVATd0z66jtlYEnh6IlLs';
	let postUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${apiKey}`;
	return (dispatch) => {
		dispatch(authStart());
		const authData = {
			email,
			password,
			returnSecureToken: true
		};
		axios
			.post(postUrl, authData)
			.then((response) => {
				console.log('[authActions] response', response);
				dispatch(authSuccess(response.data.idToken, response.data.localId));
			})
			.catch((error) => {
				console.log('[authActions] error', error);
				dispatch(authError(error));
			});
	};
};

export const authLogin = (email, password) => {
	const apiKey = 'AIzaSyCyMhILBQK1TROVATd0z66jtlYEnh6IlLs';
	let postUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${apiKey}`;
	return (dispatch) => {
		dispatch(authStart());
		const authData = {
			email,
			password,
			returnSecureToken: true
		};
		axios
			.post(postUrl, authData)
			.then((response) => {
				console.log('[authActions] response', response);
				dispatch(authSuccess(response.data.idToken, response.data.localId));
			})
			.catch((error) => {
				console.log('[authActions] error', error);
				dispatch(authError(error));
			});
	};
};
