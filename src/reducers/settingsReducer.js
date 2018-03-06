// Get action list
import {DB_FETCH_SETTINGS, DB_RECEIVE_SETTINGS} from '../actions/allActions';

// Handle some actions
export default function settings(state = null, action) {
	switch(action.type) {
		case DB_FETCH_SETTINGS:
			return state;
		case DB_RECEIVE_SETTINGS:
			return Object.assign({}, state, action.data);
		default:
			return state;
	}
}
