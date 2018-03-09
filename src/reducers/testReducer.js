// Get action list
import {DB_FETCH_TEST_DATA, DB_RECEIVE_TEST_DATA} from '../actions/allActions';

// Handle some actions
export default function settings(state = null, action) {
	switch(action.type) {
		case DB_FETCH_TEST_DATA:
			return state;
		case DB_RECEIVE_TEST_DATA:
			return Object.assign({}, state, action.data);
		default:
			return state;
	}
}
