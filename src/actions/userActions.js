import {DB_RECEIVE_USER_DATA, DB_RECEIVE_USER_LIST, DB_AUTH_TOKEN} from './allActions';

export function receiveUserData(data) {
	return {
		type: DB_RECEIVE_USER_DATA,
		data: data
	}
}

export function receiveUserList(data) {
	return {
		type: DB_RECEIVE_USER_LIST,
		data: data
	}
}

export function fetchUserData(data) {
	let url = 'http://chaos.mlaga97.space:5984/chaos2018_scouting_data/_find';

	return (dispatch) => {
		fetch(url,
			{
				method: 'POST',
				headers: {
					'Authorization': 'Basic ' + DB_AUTH_TOKEN,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			}
		)
		.then(response =>
			response.json().then(data => ({
				data: data,
				status: response.status
			}))
		)
		.then(response => {
			if(response.status === 200) {
				dispatch(receiveUserData(response.data));
			} else {
				var flash = {
					type: 'error',
					title: 'Error getting user data',
					content: 'There was an error fulfilling the request. Please try again.',
				}
				dispatch({
					type: 'DISPLAY_FLASH',
					data: flash
				});
			}
		});
	};
}

export function fetchUserList(data) {
	let url = 'http://chaos.mlaga97.space:5984/chaos2018_scouting_data/_find';

	return (dispatch) => {
		fetch(url,
			{
				method: 'POST',
				headers: {
					'Authorization': 'Basic ' + DB_AUTH_TOKEN,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			}
		)
		.then(response =>
			response.json().then(data => ({
				data: data,
				status: response.status
			}))
		)
		.then(response => {
			if(response.status === 200) {
				dispatch(receiveUserList(response.data));
			} else {
				var flash = {
					type: 'error',
					title: 'Error getting user data',
					content: 'There was an error fulfilling the request. Please try again.',
				}
				dispatch({
					type: 'DISPLAY_FLASH',
					data: flash
				});
			}
		});
	};
}
