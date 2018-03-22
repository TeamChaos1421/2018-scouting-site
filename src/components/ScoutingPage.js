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
	}

	componentDidMount() {
		let timer = setInterval(this.tick.bind(this), 1500);
		this.setState({timer});
	}

	componentWillUnmount() {
		clearInterval(this.state.timer);
	}

	tick() {
		this.props.fetchSettings();

		// TODO: This currently lags behind by 2 cycles, but how often do regionals change
		this.props.fetchMatchData(this.props.settings.regional);
	}

	submit(values, dispatch, regional) {
		// Add in some metadata
		values.regional = regional;
		values.timestamp = Date.now();

		dispatch(submitScoutingData(values));
	}

	render() {
		if(!this.props.settings) {
			return (
				<div>
					Loading settings...
				</div>
			);
		} else if(!this.props.matchDataTBA) {
			return (
				<div>
					Loading match list...
				</div>
			);
		} else {
			let match = getMatch(this.props.matchDataTBA, this.props.settings.matchNumber);
			if(!match) {
				match = {
					alliances: {
						blue: {
							team_keys: ['   the', '   settings', '   administration']
						},
						red: {
							team_keys: ['   Fix', '   match', '   in']
						}
					}
				}
			}

			return (
				<div className='matchList'>
					<div style={{'textAlign': 'center'}}>
						<h1>Match {this.props.settings.matchNumber}</h1>
						<ScoutingHeader style={{'text-align': 'center'}} users={this.props.settings.users} alliances={match.alliances} />
					</div>
					<ScoutingForm onSubmit={(values, dispatch) => {this.submit(values, dispatch, this.props.settings.regional)}} />
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
