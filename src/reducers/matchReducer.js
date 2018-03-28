// Get action list
import {MATCH_LIST_FETCH_SUCCEEDED, MATCH_DATA_FETCH_SUCCEEDED} from '../actions/allActions';

// Handle some actions
export default function settings(state = null, action) {
	switch(action.type) {
		case MATCH_LIST_FETCH_SUCCEEDED:
			return Object.assign({}, state, {
				matchList: action.data,
			});
		case MATCH_DATA_FETCH_SUCCEEDED:
			return Object.assign({}, state, {
				matchData: action.data,
			});
		default:
			return state;
	}
}
