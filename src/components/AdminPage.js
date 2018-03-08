// Library imports
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Field, reduxForm} from 'redux-form';
import {FormGroup, FormControl, ControlLabel, Checkbox, Radio, Button, ToggleButton, ToggleButtonGroup} from 'react-bootstrap';

// Actions
import {fetchSettings, updateSettings} from '../actions/settingsActions';

// Components
import AdminForm from './AdminForm';

class AdminPage extends React.Component {
	submit(values, dispatch) {
		let newSettings = {
			_rev: this.props.settings._rev,
			regional: values.regional,
			matchNumber: parseInt(values.matchNumber),
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

		console.log(newSettings);

		dispatch(updateSettings(newSettings));
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
