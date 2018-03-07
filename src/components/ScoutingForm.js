// Library imports
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {FormGroup, FormControl, ControlLabel, Checkbox, Radio, Button, ToggleButton, ToggleButtonGroup} from 'react-bootstrap';

function ReduxFormControl({input, meta, ...props}) {
	return <FormControl {...props} {...input} />;
}

function ReduxCheckbox({input, meta, ...props}) {
	return <Checkbox {...props} {...input} />;
}

function ReduxRadio({input, meta, ...props}) {
	return <Radio {...props} {...input} />;
}

function ReduxToggleButtonGroup({input, meta, ...props}) {
	return <ToggleButtonGroup {...props} {...input} />
}

let ScoutingForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<FormGroup>
				<ControlLabel>Username</ControlLabel>
				<Field component={ReduxFormControl} name='username' type='text'/>
			</FormGroup>

			<FormGroup>
				<ControlLabel>Match Number</ControlLabel>
				<Field component={ReduxFormControl} name='matchNumber' type='text'/>
			</FormGroup>

			<FormGroup>
				<ControlLabel>Team Number</ControlLabel>
				<Field component={ReduxFormControl} name='teamNumber' type='text'/>
			</FormGroup>

			<hr/>

			<h3>Autonomous</h3>

			<FormGroup>
				<ControlLabel>Moves During Autonomous</ControlLabel>
				<br/>
				<Field component={ReduxToggleButtonGroup} name='autoMoves' type='radio'>
					<ToggleButton value='1'>Yes</ToggleButton>
					<ToggleButton value='0'>No</ToggleButton>
				</Field>
			</FormGroup>

			<FormGroup>
				<ControlLabel>Crosses auto-line</ControlLabel>
				<br/>
				<Field component={ReduxToggleButtonGroup} name='autoCrosses' type='radio'>
					<ToggleButton value='1'>Yes</ToggleButton>
					<ToggleButton value='0'>No</ToggleButton>
				</Field>
			</FormGroup>

			<FormGroup>
				<ControlLabel><em>Attempts</em> to place a cube on the scale</ControlLabel>
				<br/>
				<Field component={ReduxToggleButtonGroup} name='autoScaleAttempt' type='radio'>
					<ToggleButton value='1'>Yes</ToggleButton>
					<ToggleButton value='0'>No</ToggleButton>
				</Field>
			</FormGroup>

			<FormGroup>
				<ControlLabel><em>Attempts</em> to place a cube on the switch</ControlLabel>
				<br/>
				<Field component={ReduxToggleButtonGroup} name='autoSwitchAttempt' type='radio'>
					<ToggleButton value='1'>Yes</ToggleButton>
					<ToggleButton value='0'>No</ToggleButton>
				</Field>
			</FormGroup>
				
			<FormGroup>
				<ControlLabel>Number of cubes <em>scored</em> on scale during autonomous</ControlLabel>
				<br/>
				<Field component={ReduxToggleButtonGroup} name='autoScaleScore' type='radio'>
					<ToggleButton value='0'>0</ToggleButton>
					<ToggleButton value='1'>1</ToggleButton>
					<ToggleButton value='2'>2</ToggleButton>
					<ToggleButton value='3'>3</ToggleButton>
					<ToggleButton value='4'>4</ToggleButton>
					<ToggleButton value='5'>5+</ToggleButton>
				</Field>
			</FormGroup>

			<FormGroup>
				<ControlLabel>Number of cubes <em>scored</em> on switch during autonomous</ControlLabel>
				<br/>
				<Field component={ReduxToggleButtonGroup} name='autoSwitchScore' type='radio'>
					<ToggleButton value='0'>0</ToggleButton>
					<ToggleButton value='1'>1</ToggleButton>
					<ToggleButton value='2'>2</ToggleButton>
					<ToggleButton value='3'>3</ToggleButton>
					<ToggleButton value='4'>4</ToggleButton>
					<ToggleButton value='5'>5+</ToggleButton>
				</Field>
			</FormGroup>

			<hr/>

			<h3>Teleop</h3>

			<FormGroup>
				<ControlLabel>Moves During Teleop</ControlLabel>
				<br/>
				<Field component={ReduxToggleButtonGroup} name='teleopMoves' type='radio'>
					<ToggleButton value='1'>Yes</ToggleButton>
					<ToggleButton value='0'>No</ToggleButton>
				</Field>
			</FormGroup>

			<FormGroup>
				<ControlLabel><em>Attempts</em> to place a cube on the scale</ControlLabel>
				<br/>
				<Field component={ReduxToggleButtonGroup} name='teleopScaleAttempt' type='radio'>
					<ToggleButton value='1'>Yes</ToggleButton>
					<ToggleButton value='0'>No</ToggleButton>
				</Field>
			</FormGroup>

			<FormGroup>
				<ControlLabel><em>Attempts</em> to place a cube on the switch</ControlLabel>
				<br/>
				<Field component={ReduxToggleButtonGroup} name='teleopSwitchAttempt' type='radio'>
					<ToggleButton value='1'>Yes</ToggleButton>
					<ToggleButton value='0'>No</ToggleButton>
				</Field>
			</FormGroup>
				
			<FormGroup>
				<ControlLabel>Number of cubes <em>scored</em> on scale during teleop</ControlLabel>
				<br/>
				<Field component={ReduxToggleButtonGroup} name='teleopScaleScore' type='radio'>
					<ToggleButton value='0'>0</ToggleButton>
					<ToggleButton value='1'>1</ToggleButton>
					<ToggleButton value='2'>2</ToggleButton>
					<ToggleButton value='3'>3</ToggleButton>
					<ToggleButton value='4'>4</ToggleButton>
					<ToggleButton value='5'>5+</ToggleButton>
				</Field>
			</FormGroup>

			<FormGroup>
				<ControlLabel>Number of cubes <em>scored</em> on switch during teleop</ControlLabel>
				<br/>
				<Field component={ReduxToggleButtonGroup} name='teleopSwitchScore' type='radio'>
					<ToggleButton value='0'>0</ToggleButton>
					<ToggleButton value='1'>1</ToggleButton>
					<ToggleButton value='2'>2</ToggleButton>
					<ToggleButton value='3'>3</ToggleButton>
					<ToggleButton value='4'>4</ToggleButton>
					<ToggleButton value='5'>5+</ToggleButton>
				</Field>
			</FormGroup>

			<hr/>

			<h3>Endgame</h3>

			<FormGroup>
				<ControlLabel><em>Attempts</em> to climb</ControlLabel>
				<br/>
				<Field component={ReduxToggleButtonGroup} name='climbs' type='radio'>
					<ToggleButton value='1'>Yes</ToggleButton>
					<ToggleButton value='0'>No</ToggleButton>
				</Field>
			</FormGroup>

			<FormGroup>
				<ControlLabel><em>Successfully</em> climbs</ControlLabel>
				<br/>
				<Field component={ReduxToggleButtonGroup} name='climbs' type='radio'>
					<ToggleButton value='1'>Yes</ToggleButton>
					<ToggleButton value='0'>No</ToggleButton>
				</Field>
			</FormGroup>

			<hr/>

			<h3>Notes</h3>

			<FormGroup>
				<Field component={ReduxFormControl} name='notes' rows='4' componentClass='textarea'/>
			</FormGroup>

			<Button type='submit'>Submit</Button>
		</form>
	)
};

ScoutingForm = reduxForm({
	form: 'scoutingForm'
})(ScoutingForm);

export default ScoutingForm;
