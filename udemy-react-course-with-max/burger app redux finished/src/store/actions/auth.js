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
	const apiKey = '';
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
				const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
				localStorage.setItem('token', response.data.idToken);
				localStorage.setItem('expirationDate', expirationDate);
				localStorage.setItem('userId', response.data.localId);
				dispatch(authSuccess(response.data.idToken, response.data.localId));
				dispatch(logoutUser(response.data.expiresIn));
			})
			.catch((error) => {
				dispatch(authFail(error.response.data.error));
			});
	};
};

export const logout = () => {
	localStorage.removeItem('token');
	localStorage.removeItem('expirationDate');
	localStorage.removeItem('userId');
	return { type: actionTypes.AUTH_LOGOUT };
};

export const logoutUser = (expireTime) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(logout());
		}, expireTime * 1000);
	};
};

export const authCheckState = () => {
	return (dispatch) => {
		const token = localStorage.getItem('token');
		if (!token) {
			dispatch(logout());
		} else {
			const expirationDate = new Date(localStorage.getItem('expirationDate'));
			if (expirationDate <= new Date()) {
				dispatch(logout());
			} else {
				const userId = localStorage.getItem('userId');
				dispatch(authSuccess(token, userId));
				dispatch(logoutUser((expirationDate.getTime() - new Date().getTime()) / 1000));
			}
		}
	};
};
