// Library imports
import React from 'react';
import _ from 'lodash';
import {Table} from 'react-bootstrap';
import {CSVLink} from 'react-csv';

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

	let headers = [
		{label: 'User', key: 'username'},
		{label: 'Match', key: 'matchNumber'},
		{label: 'Team', key: 'teamNumber'},

		{label: 'Moves During Auto', key: 'autoMoves'},
		{label: 'Crosses Auto Line', key: 'autoCrosses'},
		{label: 'Attempts Scale', key: 'autoScaleAttempt'},
		{label: 'Attempts Switch', key: 'autoSwitchAttempt'},
		{label: 'Attempts Exchange', key: 'autoExchangeAttempt'},

		{label: 'Cubes Scored on Scale (auto)', key: 'autoScaleScore'},
		{label: 'Cubes Scored on Switch (auto)', key: 'autoSwitchScore'},
		{label: 'Cubes Scored in Exchange (auto)', key: 'autoExchange'},

		{label: 'Moves During Auto', key: 'teleopMoves'},
		{label: 'Crosses Auto Line', key: 'teleopCrosses'},
		{label: 'Attempts Scale', key: 'teleopScaleAttempt'},
		{label: 'Attempts Switch', key: 'teleopSwitchAttempt'},
		{label: 'Attempts Exchange', key: 'teleopExchangeAttempt'},

		{label: 'Cubes Scored on Scale (teleop)', key: 'teleopScaleScore'},
		{label: 'Cubes Scored on Switch (teleop)', key: 'teleopSwitchScore'},
		{label: 'Cubes Scored in Exchange (teleop)', key: 'teleopExchange'},

		{label: 'Attempts to Climb', key: 'attemptsClimb'},
		{label: 'Climbs', key: 'climbs'},
		{label: 'Notes', key: 'notes'},
	]

	// Spit it out!
	return (
		<div>
			<CSVLink data={matchData} headers={headers}>Download as CSV</CSVLink>
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
