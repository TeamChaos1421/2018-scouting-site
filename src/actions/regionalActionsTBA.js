import {TBA_AUTH_TOKEN_V3, TBA_RECEIVE_MATCH_DATA} from './allActions';

export function receiveMatchData(data) {
	return {
		type: TBA_RECEIVE_MATCH_DATA,
		data: data,
	}
}

export function fetchMatchData(regional) {
	let url = 'http://www.thebluealliance.com/api/v3/event/' + regional + '/matches';

	return (dispatch) => {
		fetch(url, {
			headers: {
				'x-tba-auth-key': TBA_AUTH_TOKEN_V3,
			},
		})
		.then(response =>
			response.json().then(data => ({
				data: data,
				status: response.status
			}))
		)
		.then(response => {
			if(response.status === 200) {
				dispatch(receiveMatchData(response.data));
			} else {
				var flash = {
					type: 'error',
					title: 'Error getting match list',
					content: 'There was an error getting the match list. Please try again.',
				}
				dispatch({
					type: 'DISPLAY_FLASH',
					data: flash
				});
			}
		});
	};
}
