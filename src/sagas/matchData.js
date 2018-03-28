import {call, put, takeLatest} from 'redux-saga/effects';
import {DB_AUTH_TOKEN} from '../actions/allActions';
import {MATCH_DATA_FETCH_REQUESTED, MATCH_DATA_FETCH_SUCCEEDED, MATCH_DATA_FETCH_FAILED} from '../actions/allActions';
import {MATCH_LIST_FETCH_REQUESTED, MATCH_LIST_FETCH_SUCCEEDED, MATCH_LIST_FETCH_FAILED} from '../actions/allActions';

function* fetchMatchList(action) {
	let url = 'http://chaos.mlaga97.space:5984/chaos2018_scouting_data/_find';

	let query = {
		selector: {
			matchNumber: {
				'$exists': true,
			},
			regional: {
				'$eq': action.regional,
			},
		},
		fields: ['matchNumber'],
		limit: 500,
	};

	try {
		const data = yield call(() => {
			return fetch(url, {
					method: 'POST',
					headers: {
						'Authorization': 'Basic ' + DB_AUTH_TOKEN,
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(query),
				})
				.then(response => response.json())
				.then(data => data)
				.catch(error => {
					throw error
				});
		})

		yield put({
			type: MATCH_LIST_FETCH_SUCCEEDED,
			data: data,
		});
	} catch(e) {
		yield put({
			type: MATCH_LIST_FETCH_FAILED,
			message: e.message,
		});
	}
}

function* fetchMatchData(action) {
	let url = 'http://chaos.mlaga97.space:5984/chaos2018_scouting_data/_find';

	let query = {
		selector: {
			matchNumber: {
				'$exists': true,
			},
			regional: action.regional,
			matchNumber: action.matchNumber,
		},
		'limit': 1000,
	};

	try {
		const data = yield call(() => {
			return fetch(url, {
					method: 'POST',
					headers: {
						'Authorization': 'Basic ' + DB_AUTH_TOKEN,
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(query),
				})
				.then(response => response.json())
				.then(data => data)
				.catch(error => {
					throw error
				});
		})

		yield put({
			type: MATCH_DATA_FETCH_SUCCEEDED,
			data: data,
		});
	} catch(e) {
		yield put({
			type: MATCH_DATA_FETCH_FAILED,
			message: e.message,
		});
	}
}

function* matchDataSaga() {
	yield takeLatest(MATCH_LIST_FETCH_REQUESTED, fetchMatchList);
	yield takeLatest(MATCH_DATA_FETCH_REQUESTED, fetchMatchData);
}

export default matchDataSaga;
