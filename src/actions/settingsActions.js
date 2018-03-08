import {DB_RECEIVE_SETTINGS, DB_UPDATED_SETTINGS, DB_AUTH_TOKEN} from './allActions';

export function receiveSettings(data) {
	return {
		type: DB_RECEIVE_SETTINGS,
		data: data,
	}
}

export function fetchSettings() {
	return (dispatch) => {
		fetch('http://chaos.mlaga97.space:5984/chaos2018_scouting_config/config')
		.then(response =>
			response.json().then(data => ({
				data: data,
				status: response.status
			}))
		)
		.then(response => {
			if(response.status === 200) {
				dispatch(receiveSettings(response.data));
			} else {
				var flash = {
					type: 'error',
					title: 'Error getting settings',
					content: 'There was an error getting the settings. Please try again.',
				}
				dispatch({
					type: 'DISPLAY_FLASH',
					data: flash
				});
			}
		});
	};
}

export function updatedSettings(data) {
	return {
		type: DB_UPDATED_SETTINGS,
		data: data,
	}
}
	

export function updateSettings(data) {
	let url = 'http://chaos.mlaga97.space:5984/chaos2018_scouting_config/config';

	return (dispatch) => {
		fetch(url, {
			method: 'PUT',
			headers: {
				'Authorization': 'Basic ' + DB_AUTH_TOKEN,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
		.then(response => 
			response.json().then(data => ({
				data: data,
				status: response.status,
			}))
		)
		.then(response => {
			if(response.status === 201) {
				dispatch(updatedSettings(response.data));
			} else {
				var flash = {
					type: 'error',
					title: 'Error submitting scouting data',
					content: 'There was an error submitting the scouting data. Please try again.',
				}
				dispatch({
					type: 'DISPLAY_FLASH',
					data: flash
				});
			}
		});
	};
}

