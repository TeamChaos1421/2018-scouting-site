// Library imports
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Actions
import * as tbaActions from '../actions/regionalActionsTBA';
import * as allActions from '../actions/settingsActions';

// TODO: More comments





function getMatch(matches, matchNumber) {
	return matches.find(function(match) {
		return (match.comp_level === 'qm' && match.match_number === matchNumber)
	});
}

function UserPromptElement(props) {
	return (
		<tr>
			<td>{props.user.name}</td>
			<td>{props.team}</td>
		</tr>
	);
}

function UserPrompt(props) {
	console.log(props);
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

class ScoutingPage extends React.Component {
	componentWillMount() {
		// TODO; Get regional from DB
		this.props.allActions.fetchSettings();
		this.props.tbaActions.fetchMatchData('2018mxmo');
	}

	render() {
		if(!this.props.matchData || !this.props.settings) {
			return (
				<div>
					Loading match list...
				</div>
			);
		} else {
			var match = getMatch(this.props.matchData, this.props.settings.matchNumber);
			console.log(match);

			return (
				<div className='matchList'>
					<h1>Match {this.props.settings.matchNumber}</h1>

					<UserPrompt users={this.props.settings.users} alliances={match.alliances} />

					<form>
						<h3>Match Info</h3>
						Username: <input type='text' name='username' /><br/>
						Match Number: <input type='text' name='matchNumber' /><br/>
						Team Number: <input type='text' name='teamNumber' /><br/>

						<h3>Autonomous</h3>
						<input type='checkbox' name='crossesAuto' /> Crosses auto line<br/>
						<input type='checkbox' name='scoresScale' /> Attempts to place cube on scale<br/>
						<input type='checkbox' name='scoresSwitch' /> Attempts to place cube on switch<br/>
						<br/>
						How many cubes scored on scale during autonomous? <input type='number' name='autoScaleScore' /><br/>
						How many cubes scored on switch during autonomous? <input type='number' name='autoSwitchScore' /><br/>

						<h3>Teleop</h3>
						How many cubes scored on scale during teleop? <input type='number' name='autoScaleScore' /><br/>
						How many cubes scored on switch during teleop? <input type='number' name='autoSwitchScore' /><br/>

						<h3>Endgame</h3>
						Does the robot climb?
						<input type='radio' name='climbs' value='1' /> Yes
						<input type='radio' name='climbs' value='0' /> No

						<h3>Notes</h3>
						<textarea name='notes' cols='40' rows='5'/>

						<br/><br/>
						<input type='submit' />
					</form>
				</div>
			);
		};
	}
}

function mapStateToProps(state) {
	return {
		matchData: state.matchData,
		settings: state.settings,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		tbaActions: bindActionCreators(tbaActions, dispatch),
		allActions: bindActionCreators(allActions, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ScoutingPage);
