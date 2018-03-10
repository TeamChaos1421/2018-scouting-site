// Library imports
import React from 'react';

export function MatchOverview(props) {
	return (
		<tr key={props.matchNumber + ':' + props.matchNumber + ':' + props.username}>
			<td>{props.username}</td>
			<td>{props.matchNumber}</td>
			<td>{props.teamNumber}</td>
		</tr>
	);
}

export default MatchOverview;
