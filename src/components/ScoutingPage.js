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
	constructor(props) {
		super(props);
		this.state = {};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount() {
		// TODO; Get regional from DB
		this.props.allActions.fetchSettings();
		this.props.tbaActions.fetchMatchData('2018mxmo');
	}

	handleChange(event) {
		let target = event.target;
		let name = target.name;
		let value = (target.type === 'checkbox') ? target.checked : target.value;

		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		console.log(this.state);
		event.preventDefault();
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

					<form onSubmit={this.handleSubmit}>
						<h3>Match Info</h3>
						Username: <input name='username' type='text' value={this.state.username} onChange={this.handleChange} /><br/>
						Match Number: <input name='matchNumber' type='text' value={this.state.matchNumber} onChange={this.handleChange} /><br/>
						Team Number: <input name='teamNumber' type='text' value={this.state.value} onChange={this.handleChange} /><br/>

						<h3>Autonomous</h3>
						<input name='crossesAuto' type='checkbox' checked={this.state.crossesAuto} onChange={this.handleChange} /> Crosses auto line<br/>
						<input name='autoScaleAttempt' type='checkbox' checked={this.state.autoScaleAttempt} onChange={this.handleChange} /> Attempts to place cube on scale<br/>
						<input name='autoSwitchAttempt' type='checkbox' checked={this.state.autoSwitchAttempt} onChange={this.handleChange} /> Attempts to place cube on switch<br/>
						<br/>
						How many cubes scored on scale during autonomous? <input name='autoScaleScore' value={this.autoScaleScore} onChange={this.handleChange} /><br/>
						How many cubes scored on switch during autonomous? <input name='autoSwitchScore' value={this.autoSwitchScore} onChange={this.handleChange} /><br/>

						<h3>Teleop</h3>
						<input name='teleopScaleAttempt' type='checkbox' checked={this.state.telopScaleAttempt} onChange={this.handleChange} /> Attempts to place cube on scale<br/>
						<input name='teleopSwitchAttempt' type='checkbox' checked={this.state.teleopSwitchAttempt} onChange={this.handleChange} /> Attempts to place cube on switch<br/>
						<br/>
						How many cubes scored on scale during teleop? <input name='teleopScaleScore' type='number' value={this.teleopScaleScore} onChange={this.handleChange} /><br/>
						How many cubes scored on switch during teleop? <input name='teleopSwitchScore' type='number' value={this.teleopSwitchScore} onChange={this.handleChange} /><br/>

						<h3>Endgame</h3>
						Does the robot climb?
						<input name='climbs' type='radio' checked={this.state.climbs === '1'} value='1' onChange={this.handleChange} /> Yes
						<input name='climbs' type='radio' checked={this.state.climbs === '0'} value='0' onChange={this.handleChange} /> No

						<h3>Notes</h3>
						<textarea name='notes' cols='40' rows='5' value={this.state.notes} onChange={this.handleChange} />

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