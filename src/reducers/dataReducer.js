// Get action list

import {DB_FETCH_DATA_DATA, DB_RECEIVE_DATA_DATA, DB_FETCH_DATA_LIST, DB_RECEIVE_DATA_LIST} from '../actions/allActions';

// Handle some actions
export default function settings(state = null, action) {
	switch(action.type) {
		case DB_FETCH_DATA_DATA:
			return state;
		case DB_FETCH_DATA_LIST:
			return state;
		case DB_RECEIVE_DATA_DATA:
			return Object.assign({}, state, {
				dataData: action.data,
			});
		case DB_RECEIVE_DATA_LIST:
			return Object.assign({}, state, {
				dataList: action.data,
			});
		default:
			return state;
	}
}
