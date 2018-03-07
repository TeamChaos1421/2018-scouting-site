// Library imports
import React from 'react';
import {Table} from 'react-bootstrap';

function UserPromptElement(props) {
	return (
		<tr>
			<td>{props.user.name}</td>
			<td>{props.team}</td>
		</tr>
	);
}

function ScoutingHeader(props) {
	let users = props.users.map(user => user.name);
	let redTeams = props.alliances.red.teams.map(teamNumber => teamNumber.substring(3));
	let blueTeams = props.alliances.blue.teams.map(teamNumber => teamNumber.substring(3));

	return (
		<Table bordered condensed style={{width: 'auto'}}>
			<tbody>
				<tr>
					<td>{users[0]}</td>
					<td class='danger'>{redTeams[0]}</td>
					<td class='info'>{blueTeams[0]}</td>
					<td>{users[1]}</td>
				</tr>
				<tr>
					<td>{users[1]}</td>
					<td class='danger'>{redTeams[1]}</td>
					<td class='info'>{blueTeams[1]}</td>
					<td>{users[3]}</td>
				</tr>
				<tr>
					<td>{users[2]}</td>
					<td class='danger'>{redTeams[2]}</td>
					<td class='info'>{blueTeams[2]}</td>
					<td>{users[5]}</td>
				</tr>
			</tbody>
		</Table>
	);
}

export default ScoutingHeader;
