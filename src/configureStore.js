// Library imports
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

// Reducers
import rootReducer from './reducers/allReducers';

// Sagas
import fetchSettings from './sagas/fetchSettings';
import updateSettings from './sagas/updateSettings';

// Configure the store to use thunk, saga, and devtool extensions
export default function configureStore() {
	const sagaMiddleware = createSagaMiddleware();

	const store = createStore(
		rootReducer,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		applyMiddleware(sagaMiddleware, thunk),
	);

	sagaMiddleware.run(fetchSettings);
	sagaMiddleware.run(updateSettings);

	return store;
}

