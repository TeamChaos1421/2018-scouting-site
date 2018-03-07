// Library imports
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

function ReduxFormControl({input, meta, ...props}) {
	return <FormControl {...props} {...input} />;
}

let ScoutingForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<h3>Match Info</h3>

			<FormGroup>
				<ControlLabel>Username</ControlLabel>
				<Field component={ReduxFormControl} name='username' type='text'/>
			</FormGroup>
				
			Match Number: <Field name='matchNumber' component='input' type='text' /><br/>
			Team Number: <Field name='teamNumber' component='input' type='text' /><br/>

			<h3>Autonomous</h3>
			<Field name='crossesAuto' component='input' type='checkbox' /> Crosses auto line<br/>
			<Field name='autoScaleAttempt' component='input' type='checkbox' /> Attempts to place cube on scale<br/>
			<Field name='autoSwitchAttempt' component='input' type='checkbox' /> Attempts to place cube on switch<br/>
			<br/>
			How many cubes scored on scale during autonomous? <Field name='autoScaleScore' component='input' type='text' /><br/>
			How many cubes scored on switch during autonomous? <Field name='autoSwitchScore' component='input' type='text' /><br/>

			<h3>Teleop</h3>
			<Field name='teleopScaleAttempt' component='input' type='checkbox' /> Attempts to place cube on scale<br/>
			<Field name='teleopSwitchAttempt' component='input' type='checkbox' /> Attempts to place cube on switch<br/>
			<br/>
			How many cubes scored on scale during teleop? <Field name='teleopScaleScore' component='input' type='number' /><br/>
			How many cubes scored on switch during teleop? <Field name='teleopSwitchScore' component='input' type='number' /><br/>

			<h3>Endgame</h3>
			Does the robot climb?
			<Field name='climbs' component='input' type='radio' value='1' /> Yes
			<Field name='climbs' component='input' type='radio' value='0' /> No

			<h3>Notes</h3>
			<Field name='notes' component='textarea' cols='40' rows='5' />

			<br/><br/>
			<input type='submit' />
		</form>
	)
};

ScoutingForm = reduxForm({
	form: 'scoutingForm'
})(ScoutingForm);

export default ScoutingForm;
