import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import burgerReducer from './store/reducers/burgerBuilder';
import orderReducer from './store/reducers/order';

// const logger = (store) => {
// 	return (next) => {
// 		return (action) => {
// 			console.log('[Middleware] Dispatching', action);
// 			const result = next(action);
// 			console.log('[Middleware], next state', store.getState());
// 			return result;
// 		};
// 	};
// };

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const rootReducer = combineReducers({
	burgerBuilder: burgerReducer,
	order: orderReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
