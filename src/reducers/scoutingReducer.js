// Get action list
import {SUBMIT_SCOUTING_DATA, SUBMITTED_SCOUTING_DATA} from '../actions/allActions';

// Handle some actions
export default function scouting(state = null, action) {
	switch(action.type) {
		case SUBMIT_SCOUTING_DATA:
			return state;
		case SUBMITTED_SCOUTING_DATA:
			return state;
		default:
			return state;
	}
}
