import * as allActions from './allActions';

export function receiveTeamList(data) {
	return {
		type: allActions.TBA_RECEIVE_TEAM_LIST,
		data: data,
	};
}

export function fetchTeamList(regional) {
	let url = 'http://www.thebluealliance.com/api/v2/event/' + regional + '/teams';

	return (dispatch) => {
		fetch(url, {
			headers: {
				'X-TBA-APP-Id': 'frc1421:scouting-site:v3',
			}
		})
		.then(response =>
			response.json().then(data => ({
				data: data,
				status: response.status
			}))
		)
		.then(response => {
			if(response.status === 200) {
				dispatch(receiveTeamList(response.data));
			} else {
				var flash = {
					type: 'error',
					title: 'Error getting team list',
					content: 'There was an error getting the team list. Please try again.',
				}
				dispatch({
					type: 'DISPLAY_FLASH',
					data: flash
				});
			}
		});
	};
}
