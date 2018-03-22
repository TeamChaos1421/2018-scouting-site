// Library imports
import React from 'react';
import {connect} from 'react-redux';

// Actions
import {SETTINGS_PUT_REQUESTED} from '../actions/allActions';

// Components
import AdminForm from './AdminForm';

class AdminPage extends React.Component {
	submit(values, dispatch) {
		// TODO: Make invalid values not break everything
		let newSettings = {
			_rev: this.props.settings._rev,
			regional: values.regional,
			users: [
				{
					'name': values.name0,
				},
				{
					'name': values.name1,
				},
				{
					'name': values.name2,
				},
				{
					'name': values.name3,
				},
				{
					'name': values.name4,
				},
				{
					'name': values.name5,
				},
			],
		};

		// Make match settings not break things
		let matchNumber = parseInt(values.matchNumber, 10);
		if(!isNaN(matchNumber) && (matchNumber > 0) && (matchNumber < 90)) {
			newSettings.matchNumber = matchNumber;
		}

		// Send the new settings
		dispatch({
			type: SETTINGS_PUT_REQUESTED,
			data: newSettings,
		});
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
				<div>
					<AdminForm onSubmit={this.submit.bind(this)} />
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
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AdminPage);
