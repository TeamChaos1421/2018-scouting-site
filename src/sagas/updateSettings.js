import {call, put, takeEvery, takeLatest, all, fork} from 'redux-saga/effects';
import {SETTINGS_PUT_REQUESTED, SETTINGS_PUT_SUCCEEDED, SETTINGS_PUT_FAILED, DB_AUTH_TOKEN} from '../actions/allActions.js';

function* updateSettings(action) {
	try {
		const data = yield call(() => {
			return fetch('http://chaos.mlaga97.space:5984/chaos2018_scouting_config/config', {
					method: 'PUT',
					headers: {
						'Authorization': 'Basic ' + DB_AUTH_TOKEN,
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(action.data),
				})
				.then(response => response.json())
				.then(data => data)
				.catch(error => {
					throw error
				});
		})

		yield put({
			type: SETTINGS_PUT_SUCCEEDED,
			data: data,
		});
	} catch(e) {
		yield put({
			type: SETTINGS_PUT_FAILED,
			message: e.message,
		});
	}
}

function* updateSettingsSaga() {
	yield takeLatest(SETTINGS_PUT_REQUESTED, updateSettings);
}

/**************************************************************
Change to update instead of fetch
**************************************************************/

export default updateSettingsSaga;

