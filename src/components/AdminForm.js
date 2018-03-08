// Library imports
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Field, reduxForm} from 'redux-form';
import {FormGroup, FormControl, ControlLabel, Checkbox, Radio, Button, ToggleButton, ToggleButtonGroup} from 'react-bootstrap';

// Actions
import {fetchSettings, updateSettings} from '../actions/settingsActions';

function ReduxFormControl({input, meta, ...props}) {
	return <FormControl {...props} {...input} />;
}

function OptionQuestion(props) {
	return (
		<FormGroup>
			<ControlLabel>{props.label}</ControlLabel>
			<br/>
			<Field name={props.name} component={(props) => (
				<ToggleButtonGroup name={props.input.name} onChange={props.input.onChange} type='radio' value={props.input.value}>
					<ToggleButton value='2018flor'>Orlando</ToggleButton>
					<ToggleButton value='2018lake'>Bayou</ToggleButton>
					<ToggleButton value='2018txda'>Test</ToggleButton>
				</ToggleButtonGroup>
			)} />
		</FormGroup>
	)
}

class AdminForm extends React.Component {
	render() {
		return (
			<form onSubmit={this.props.handleSubmit}>
				<FormGroup>
					<ControlLabel>Current Match Number</ControlLabel>
					<Field component={ReduxFormControl} name='matchNumber' type='number' autocomplete='off' />
				</FormGroup>

				<FormGroup>
					<ControlLabel>Names</ControlLabel>
					<Field component={ReduxFormControl} name='name0' type='text' autocomplete='off' />
					<Field component={ReduxFormControl} name='name1' type='text' autocomplete='off' />
					<Field component={ReduxFormControl} name='name2' type='text' autocomplete='off' />
					<Field component={ReduxFormControl} name='name3' type='text' autocomplete='off' />
					<Field component={ReduxFormControl} name='name4' type='text' autocomplete='off' />
					<Field component={ReduxFormControl} name='name5' type='text' autocomplete='off' />
				</FormGroup>

				<OptionQuestion name='regional' label='Regional' />

				<Button type='submit'>Submit</Button>
			</form>
		)
	}
}

AdminForm = reduxForm({
	form: 'adminForm',
})(AdminForm);

function mapStateToProps(state) {
	return {
		initialValues: {
			matchNumber: state.settings.matchNumber,
			regional: state.settings.regional,
			name0: state.settings.users[0].name,
			name1: state.settings.users[1].name,
			name2: state.settings.users[2].name,
			name3: state.settings.users[3].name,
			name4: state.settings.users[4].name,
			name5: state.settings.users[5].name,
		}
	}
}

function mapDispatchToProps(dispatch) {
	return {
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AdminForm);
