// Get action list

import {DB_FETCH_TEAM_DATA, DB_RECEIVE_TEAM_DATA, DB_FETCH_TEAM_LIST, DB_RECEIVE_TEAM_LIST} from '../actions/allActions';

// Handle some actions
export default function settings(state = null, action) {
	switch(action.type) {
		case DB_FETCH_TEAM_DATA:
			return state;
		case DB_FETCH_TEAM_LIST:
			return state;
		case DB_RECEIVE_TEAM_DATA:
			return Object.assign({}, state, {
				teamData: action.data,
			});
		case DB_RECEIVE_TEAM_LIST:
			return Object.assign({}, state, {
				teamList: action.data,
			});
		default:
			return state;
	}
}
