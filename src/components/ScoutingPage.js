// Library imports
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Actions
import {fetchSettings} from '../actions/settingsActions';
import {fetchMatchData} from '../actions/regionalActionsTBA';
import {submitScoutingData} from '../actions/scoutingActions';

// Components
import ScoutingForm from './ScoutingForm';
import ScoutingHeader from './ScoutingHeader';


function getMatch(matches, matchNumber) {
	return matches.find(function(match) {
		return (match.comp_level === 'qm' && match.match_number === matchNumber)
	});
}

class ScoutingPage extends React.Component {
	componentWillMount() {
		// Update settings
		this.props.fetchSettings();

		// TODO; Get regional from DB
		this.props.fetchMatchData('2018flor');
	}

	componentDidMount() {
		let timer = setInterval(this.tick.bind(this), 1500);
		this.setState({timer});
	}

	componentWillUnmount() {
		//this.clearInterval(this.state.timer);
	}

	tick() {
		this.props.fetchSettings();
	}

	submit(values, dispatch) {
		dispatch(submitScoutingData(values));
	}

	render() {
		if(!this.props.settings) {
			return (
				<div>
					Loading settings...
				</div>
			);
		} else if(!this.props.matchData) {
			return (
				<div>
					Loading match list...
				</div>
			);
		} else {
			var match = getMatch(this.props.matchDataTBA, this.props.settings.matchNumber);

			return (
				<div className='matchList'>
					<div style={{'textAlign': 'center'}}>
						<h1>Match {this.props.settings.matchNumber}</h1>
						<ScoutingHeader style={{'text-align': 'center'}} users={this.props.settings.users} alliances={match.alliances} />
					</div>
					<ScoutingForm onSubmit={this.submit} />
				</div>
			);
		}
	}
}

function mapStateToProps(state) {
	return {
		settings: state.settings,
		matchDataTBA: state.matchDataTBA,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		fetchSettings: bindActionCreators(fetchSettings, dispatch),
		fetchMatchData: bindActionCreators(fetchMatchData, dispatch),
		submitScoutingData: bindActionCreators(submitScoutingData, dispatch),
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ScoutingPage);
