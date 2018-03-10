// Library imports
import React from 'react';
import _ from 'lodash';
import {Table} from 'react-bootstrap';

export function renderMatchJSON(match) {
	return (
		<div>
			<pre>{JSON.stringify(match, null, 2)}</pre>
		</div>
	);
}

export function MatchHeader() {
	return (
		<tr>
			<th>User</th>
			<th>Match</th>
			<th>Team</th>

			<th>Moves (Auto)</th>
			<th>Crosses Line (Auto)</th>
			<th>Tries Scale (Auto)</th>
			<th>Tries Switch (Auto)</th>
			<th>Tries Exchange (Auto)</th>

			<th>Scale Scored (Auto)</th>
			<th>Switch Scored (Auto)</th>
			<th>Exchange Scored (Auto)</th>

			<th>Moves (Teleop)</th>
			<th>Tries Scale (Teleop)</th>
			<th>Tries Switch (Teleop)</th>
			<th>Tries Exchange (Teleop)</th>

			<th>Scale Scored (Teleop)</th>
			<th>Switch Scored (Teleop)</th>
			<th>Exchange Scored (Teleop)</th>

			<th>Attempts Climb</th>
			<th>Climbs</th>
			<th>Notes</th>
		</tr>
	);
}

export function renderMatchRow(match) {
	return (
		<tr key={match._id}>
			<td>{match.username}</td>
			<td>{match.matchNumber}</td>
			<td>{match.teamNumber}</td>

			<td>{(match.autoMoves) ? 'Yes' : 'No'}</td>
			<td>{(match.autoCrosses) ? 'Yes' : 'No'}</td>
			<td>{(match.autoScaleAttempt) ? 'Yes' : 'No'}</td>
			<td>{(match.autoSwitchAttempt) ? 'Yes' : 'No'}</td>
			<td>{(match.autoExchangeAttempt) ? 'Yes' : 'No'}</td>

			<td>{match.autoScaleScore}</td>
			<td>{match.autoSwitchScore}</td>
			<td>{match.autoExchange}</td>

			<td>{(match.teleopMoves) ? 'Yes' : 'No'}</td>
			<td>{(match.teleopScaleAttempt) ? 'Yes' : 'No'}</td>
			<td>{(match.teleopSwitchAttempt) ? 'Yes' : 'No'}</td>
			<td>{(match.teleopExchangeAttempt) ? 'Yes' : 'No'}</td>

			<td>{match.teleopScaleScore}</td>
			<td>{match.teleopSwitchScore}</td>
			<td>{match.teleopExchange}</td>

			<td>{(match.attemptsClimb) ? 'Yes' : 'No'}</td>
			<td>{(match.climbs) ? 'Yes' : 'No'}</td>
			<td>{match.notes}</td>
		</tr>
	);
}

export function MatchDetail(props) {
	let matchData = props.matchData;
	let flipped = [];

	// Spit it out!
	return (
		<div>
			<Table bordered condensed>
				<thead>
					<MatchHeader />
				</thead>
				<tbody>
					{
						props.matchData.map((match, index) => {
							return renderMatchRow(match);
						})
					}
				</tbody>
			</Table>
		</div>
	);
}

export default MatchDetail;
