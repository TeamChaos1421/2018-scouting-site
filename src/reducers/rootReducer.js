// Library imports
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

// Actions
import * as allActions from '../actions/allActions';

// Reducers
import teamList from './teamListReducer';
import matchDataTBA from './matchDataReducer';
import settings from './settingsReducer';
import scouting from './scoutingReducer';
import testData from './testReducer';
import userData from './userReducer';
import teamData from './teamReducer';
import matchData from './matchReducer';
import dataData from './dataReducer';

// Combine our reducers together
const rootReducer = combineReducers({
	teamList,
	matchDataTBA,
	settings,
	scouting,
	testData,
	userData,
	teamData,
	matchData,
	dataData,
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
