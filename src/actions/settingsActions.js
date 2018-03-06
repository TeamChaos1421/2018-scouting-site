import * as allActions from './allActions';

export function receiveSettings(data) {
	return {
		type: allActions.DB_RECEIVE_SETTINGS,
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

