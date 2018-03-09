// Get action list

import {DB_FETCH_MATCH_DATA, DB_RECEIVE_MATCH_DATA, DB_FETCH_MATCH_LIST, DB_RECEIVE_MATCH_LIST} from '../actions/allActions';

// Handle some actions
export default function settings(state = null, action) {
	switch(action.type) {
		case DB_FETCH_MATCH_DATA:
			return state;
		case DB_FETCH_MATCH_LIST:
			return state;
		case DB_RECEIVE_MATCH_DATA:
			return Object.assign({}, state, {
				matchData: action.data,
			});
		case DB_RECEIVE_MATCH_LIST:
			return Object.assign({}, state, {
				matchList: action.data,
			});
		default:
			return state;
	}
}
