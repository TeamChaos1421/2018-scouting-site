// Get action list
import {SETTINGS_FETCH_SUCCEEDED} from '../actions/allActions';

// Handle some actions
export default function settings(state = null, action) {
	switch(action.type) {
		case SETTINGS_FETCH_SUCCEEDED:
			return Object.assign({}, state, action.data);
		default:
			return state;
	}
}
