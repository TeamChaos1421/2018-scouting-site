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
		return (match.comp_level === 'qm' && match.match_number == matchNumber)
	});
}

function UserPrompt(props) {
	return (
		<tr>
			<td>{props.user.name}</td>
			<td>{props.team}</td>
		</tr>
	)
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

					<table>
						<tbody>
							<UserPrompt user={this.props.settings.users[0]} team={match.alliances.blue.teams[0].substring(3)} />
							<UserPrompt user={this.props.settings.users[1]} team={match.alliances.blue.teams[1].substring(3)} />
							<UserPrompt user={this.props.settings.users[2]} team={match.alliances.blue.teams[2].substring(3)} />
							<UserPrompt user={this.props.settings.users[3]} team={match.alliances.red.teams[0].substring(3)} />
							<UserPrompt user={this.props.settings.users[4]} team={match.alliances.red.teams[1].substring(3)} />
							<UserPrompt user={this.props.settings.users[5]} team={match.alliances.red.teams[2].substring(3)} />
						</tbody>
					</table>

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
