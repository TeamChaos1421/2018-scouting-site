// Library imports
import {combineReducers} from 'redux';

// Reducers
import teamList from './teamListReducer';
import matchData from './matchDataReducer';
import settings from './settingsReducer';

// Combine our reducers together
const rootReducer = combineReducers({
	teamList,
	matchData,
	settings,
});

export default rootReducer;
