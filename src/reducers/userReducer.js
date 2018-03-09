// Get action list

import {DB_FETCH_USER_DATA, DB_RECEIVE_USER_DATA, DB_FETCH_USER_LIST, DB_RECEIVE_USER_LIST} from '../actions/allActions';

// Handle some actions
export default function settings(state = null, action) {
	switch(action.type) {
		case DB_FETCH_USER_DATA:
			return state;
		case DB_FETCH_USER_LIST:
			return state;
		case DB_RECEIVE_USER_DATA:
			return Object.assign({}, state, {
				userData: action.data,
			});
		case DB_RECEIVE_USER_LIST:
			return Object.assign({}, state, {
				userList: action.data,
			});
		default:
			return state;
	}
}
