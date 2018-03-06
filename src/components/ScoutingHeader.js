// Library imports
import React from 'react'

function UserPromptElement(props) {
	return (
		<tr>
			<td>{props.user.name}</td>
			<td>{props.team}</td>
		</tr>
	);
}

function ScoutingHeader(props) {
	return (
		<table>
			<tbody>
				<UserPromptElement user={props.users[0]} team={props.alliances.blue.teams[0].substring(3)} />
				<UserPromptElement user={props.users[1]} team={props.alliances.blue.teams[1].substring(3)} />
				<UserPromptElement user={props.users[2]} team={props.alliances.blue.teams[2].substring(3)} />
				<UserPromptElement user={props.users[3]} team={props.alliances.red.teams[0].substring(3)} />
				<UserPromptElement user={props.users[4]} team={props.alliances.red.teams[1].substring(3)} />
				<UserPromptElement user={props.users[5]} team={props.alliances.red.teams[2].substring(3)} />
			</tbody>
		</table>
	);
}

export default ScoutingHeader;
