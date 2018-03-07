import {TBA_AUTH_TOKEN_V3, TBA_RECEIVE_TEAM_LIST} from './allActions';

export function receiveTeamList(data) {
	return {
		type: TBA_RECEIVE_TEAM_LIST,
		data: data,
	};
}

export function fetchTeamList(regional) {
	let url = 'http://www.thebluealliance.com/api/v3/event/' + regional + '/teams';

	return (dispatch) => {
		fetch(url, {
			headers: {
				'x-tba-auth-key': TBA_AUTH_TOKEN_V3,
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
