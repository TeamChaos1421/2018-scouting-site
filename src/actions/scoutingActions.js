import * as allActions from './allActions';

export function submittedScoutingData(data) {
	return {
		type: allActions.SUBMITTED_SCOUTING_DATA,
		data: data,
	}
}

export function submitScoutingData(data) {
	let url = 'http://chaos.mlaga97.space:5984/chaos2018_scouting_data/';

	return (dispatch) => {
		fetch(url, {
			method: 'POST',
			headers: {
				'Authorization': 'Basic ' + allActions.AUTH_TOKEN,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				data: data
			}),
		})
		.then(response => 
			response.json().then(data => ({
				data: data,
				status: response.status,
			}))
		)
		.then(response => {
			if(response.status === 201) {
				dispatch(submittedScoutingData(response.data));
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

