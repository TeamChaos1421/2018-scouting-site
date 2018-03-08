// Library imports
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// Bootstrap Stuff
import 'bootstrap/dist/css/bootstrap.min.css';

// Configuration stuff
import configureStore from './configureStore';

// Components
import App from './components/App';

// Actions
import {fetchSettings} from './actions/settingsActions.js';

// Redux Store
let store = configureStore();

// Get stuff from the server
store.dispatch(fetchSettings());

// Do the routing and then render
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	,
	document.getElementById('root')
);
