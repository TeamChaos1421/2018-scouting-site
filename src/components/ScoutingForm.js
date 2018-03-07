// Library imports
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {FormGroup, FormControl, ControlLabel, Checkbox, Radio, Button, ToggleButton, ToggleButtonGroup} from 'react-bootstrap';

// The reason for the next 3 functions is described here:
// https://github.com/erikras/redux-form/issues/1397
// Why it is mapped to props.input is anyone's guess.
function ReduxFormControl({input, meta, ...props}) {
	return <FormControl {...props} {...input} />;
}

function YesNoQuestion(props) {
	return (
		<FormGroup>
			<ControlLabel>{props.label}</ControlLabel>
			<br/>
			<Field name={props.name} component={(props) => (
				<ToggleButtonGroup name={props.input.name} onChange={props.input.onChange} type='radio' value={props.input.value}>
					<ToggleButton value={true}>Yes</ToggleButton>
					<ToggleButton value={false}>No</ToggleButton>
				</ToggleButtonGroup>
			)} />
		</FormGroup>
	)
}

function Scale(props) {
	return (
		<FormGroup>
			<ControlLabel>{props.label}</ControlLabel>
			<br/>
			<Field name={props.name} component={(props) => (
				<ToggleButtonGroup name={props.input.name} onChange={props.input.onChange} type='radio' value={props.input.value}>
					<ToggleButton value={0}>0</ToggleButton>
					<ToggleButton value={1}>1</ToggleButton>
					<ToggleButton value={2}>2</ToggleButton>
					<ToggleButton value={3}>3</ToggleButton>
					<ToggleButton value={4}>4</ToggleButton>
					<ToggleButton value={5}>5</ToggleButton>
					<ToggleButton value={6}>6</ToggleButton>
					<ToggleButton value={7}>7</ToggleButton>
					<ToggleButton value={8}>8</ToggleButton>
					<ToggleButton value={9}>9</ToggleButton>
					<ToggleButton value={10}>10+</ToggleButton>
				</ToggleButtonGroup>
			)} />
		</FormGroup>
	)
}

// cubes in exchange

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

			<YesNoQuestion label='Moves During Autonomous' name='autoMoves' />
			<YesNoQuestion label='Crosses auto-line' name='autoCrosses' />
			<YesNoQuestion label='Attempts to place a cube on the scale' name='autoScaleAttempt' />
			<YesNoQuestion label='Attempts to place a cube on the switch' name='autoSwitchAttempt' />
			<YesNoQuestion label='Attempts to place a cube in exchange' name='autoExchangeAttempt' />

			<Scale label='Number of cubes scored on scale during autonomous' name='autoScaleScore' />
			<Scale label='Number of cubes scored on switch during autonomous' name='autoSwitchScore' />
			<Scale label='Number of cubes placed in exchange during autonomous' name='autoExchange' />

			<hr/>

			<h3>Teleop</h3>

			<YesNoQuestion label='Moves during teleop' name='teleopMoves' />
			<YesNoQuestion label='Attempts to place a cube on the scale' name='telopScaleAttempt' />
			<YesNoQuestion label='Attempts to place a cube on the switch' name='telopSwitchAttempt' />
			<YesNoQuestion label='Attempts to place a cube in exchange' name='telopExchangeAttempt' />

			<Scale label='Number of cubes scored on scale during teleop' name='teleopScaleScore' />
			<Scale label='Number of cubes scored on switch during teleop' name='teleopSwitchScore' />
			<Scale label='Number of cubes placed in exchange during teleop' name='teleopExchange' />
			
			<hr/>

			<h3>Endgame</h3>

			<YesNoQuestion label='Attempts to climb' name='attemptsClimb' />
			<YesNoQuestion label='Successfully climbs' name='climbs' />
				
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
