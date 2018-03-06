// Library imports
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// Get our reducer
import rootReducer from './reducers/allReducers';

// Configure the store to use thunk and devtool extensions
export default function configureStore() {
	return createStore(
		rootReducer,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		applyMiddleware(thunk)
	);
}
