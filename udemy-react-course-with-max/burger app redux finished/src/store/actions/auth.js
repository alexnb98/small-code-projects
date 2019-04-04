import * as actionTypes from './actionTypes';
import axios from 'axios';

const authStart = () => {
	return { type: actionTypes.AUTH_START };
};

const authSuccess = (token, userId) => {
	return { type: actionTypes.AUTH_SUCCESS, idToken: token, userId };
};

const authFail = (error) => {
	return { type: actionTypes.AUTH_FAIL, error };
};

export const auth = (email, password, isSignUp) => {
	const apiKey = 'AIzaSyAHKleKX14d5p2OUTsN2afndMpC_TWLeM0';
	let postUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${apiKey}`;
	if (!isSignUp) {
		postUrl = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${apiKey}`;
	}
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
				console.log('[Auth] response', response);
				dispatch(authSuccess(response.data.idToken, response.data.localId));
				dispatch(logoutUser(response.data.expiresIn));
			})
			.catch((error) => {
				console.log('[Auth] error', error);
				dispatch(authFail(error.response.data.error));
			});
	};
};

export const logout = () => {
	return { type: actionTypes.AUTH_LOGOUT };
};

export const logoutUser = (expireTime) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(logout());
		}, expireTime * 1000);
	};
};
