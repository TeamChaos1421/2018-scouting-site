// Library imports
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

// Actions
import * as allActions from '../actions/allActions';

// Reducers
import teamList from './teamListReducer';
import matchData from './matchDataReducer';
import settings from './settingsReducer';
import scouting from './scoutingReducer';
import testData from './testReducer';

// Combine our reducers together
const rootReducer = combineReducers({
	teamList,
	matchData,
	settings,
	scouting,
	testData,
	form: formReducer.plugin({
		scoutingForm: (state, action) => {
			switch(action.type) {
				case allActions.SUBMITTED_SCOUTING_DATA:
					return undefined;
				default:
					return state;
			}
		}
	})
});

export default rootReducer;
