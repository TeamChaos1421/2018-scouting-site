import {call, put, takeEvery, takeLatest, all, fork} from 'redux-saga/effects';
import {SETTINGS_FETCH_REQUESTED, SETTINGS_FETCH_SUCCEEDED, SETTINGS_FETCH_FAILED} from '../actions/allActions.js';

function* fetchSettings() {
	try {
		const data = yield call(() => {
			return fetch('http://chaos.mlaga97.space:5984/chaos2018_scouting_config/config')
				.then(response => response.json())
				.then(data => data)
				.catch(error => {
					throw error
				});
		})

		yield put({
			type: SETTINGS_FETCH_SUCCEEDED,
			data: data,
		});
	} catch(e) {
		yield put({
			type: SETTINGS_FETCH_FAILED,
			message: e.message,
		});
	}
}

function* fetchSettingsSaga() {
	yield takeLatest(SETTINGS_FETCH_REQUESTED, fetchSettings);
}

/**************************************************************
Update all the commented out references to fetchSettings
**************************************************************/

export default fetchSettingsSaga;

