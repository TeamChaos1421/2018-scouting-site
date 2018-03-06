// Get action list
import {TBA_FETCH_TEAM_LIST, TBA_RECEIVE_TEAM_LIST} from '../actions/allActions';

// Handle some actions
export default function teamList(state = null, action) {
	switch(action.type) {
		case TBA_FETCH_TEAM_LIST:
			return state;
		case TBA_RECEIVE_TEAM_LIST:
			return action.data.slice();
		default:
			return state;
	}
}
