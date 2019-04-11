import { throttle } from 'lodash';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reducer from './reducers/orderReducer';
import authReducer from './reducers/authReducer';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore, firestoreReducer } from 'redux-firestore';
import firebaseConfig from '../config/firebaseConfig';

export const loadStateFromLocalStorage = () => {
	try {
		const serializedState = localStorage.getItem('state');
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};

export const saveStateToLocalStorage = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('state', serializedState);
	} catch (error) {
		console.log(error);
	}
};

const persistedState = loadStateFromLocalStorage();

const rootReducer = combineReducers({
	orders: reducer,
	auth: authReducer,
	firestore: firestoreReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	compose(
		composeEnhancers(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))),
		reactReduxFirebase(firebaseConfig),
		reduxFirestore(firebaseConfig)
	)
);

store.subscribe(
	throttle(() => {
		saveStateToLocalStorage(store.getState());
	}, 1000)
);

export default store;
