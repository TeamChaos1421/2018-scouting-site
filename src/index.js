// Library imports
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

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
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
	,
	document.getElementById('root')
);
