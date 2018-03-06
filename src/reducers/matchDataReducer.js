// Get action list
import {TBA_FETCH_MATCH_DATA, TBA_RECEIVE_MATCH_DATA} from '../actions/allActions';

// Handle some actions
export default function matchData(state = null, action) {
	switch(action.type) {
		case TBA_FETCH_MATCH_DATA:
			return state;
		case TBA_RECEIVE_MATCH_DATA:
			return action.data.slice();
		default:
			return state;
	}
}
