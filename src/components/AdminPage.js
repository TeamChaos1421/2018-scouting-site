// Library imports
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Actions
import {fetchSettings} from '../actions/settingsActions';

class AdminPage extends React.Component {
	componentWillMount() {
		// TODO; Get regional from DB
		this.props.fetchSettings();
	}

	submit(values, dispatch) {
		//dispatch(submitScoutingData(values));
	}

	render() {
		if(!this.props.settings) {
			return (
				<div>
					Loading settings...
				</div>
			);
		} else {
			return (
				<div className='matchList'>
					Current Regional: {this.props.settings.regional}<br/>
					Current Match: {this.props.settings.matchNumber}<br/>
				</div>
			);
		}
	}
}

function mapStateToProps(state) {
	return {
		settings: state.settings,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchSettings: bindActionCreators(fetchSettings, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AdminPage);
