import { throttle } from 'lodash';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reducer from './reducers/orderReducer';
import authReducer from './reducers/authReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	orders: reducer,
	auth: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer);

export default store;
