// Library imports
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

// Reducers
import teamList from './teamListReducer';
import matchData from './matchDataReducer';
import settings from './settingsReducer';

// Combine our reducers together
const rootReducer = combineReducers({
	teamList,
	matchData,
	settings,
	form: formReducer
});

export default rootReducer;
