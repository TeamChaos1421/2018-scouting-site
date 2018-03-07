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

function ReduxToggleButton({input, meta, ...props}) {
	return <ToggleButton {...props} {...input} />
}

class YesNoQuestion extends React.Component {
	render() {
		const { column, input, ...props } = this.props;
		return (
			<FormGroup>
				<ControlLabel>{props.label}</ControlLabel>
				<br/>
				<ToggleButtonGroup name={props.name}>
					<Field component={ReduxToggleButton} value={true}>Yes</Field>
					<Field component={ReduxToggleButton} value={false}>No</Field>
				</ToggleButtonGroup>
			</FormGroup>
		);
	}
}

class Scale extends React.Component {
	render() {
		const { column, input, ...props } = this.props;
		return (
			<FormGroup>
				<ControlLabel>{props.label}</ControlLabel>
				<br/>
				<ToggleButtonGroup name={props.name}>
					<Field component={ReduxToggleButton} value={0}>0</Field>
					<Field component={ReduxToggleButton} value={1}>1</Field>
					<Field component={ReduxToggleButton} value={2}>2</Field>
					<Field component={ReduxToggleButton} value={3}>3</Field>
					<Field component={ReduxToggleButton} value={4}>4</Field>
					<Field component={ReduxToggleButton} value={5}>5</Field>
					<Field component={ReduxToggleButton} value={6}>6</Field>
					<Field component={ReduxToggleButton} value={7}>7</Field>
					<Field component={ReduxToggleButton} value={8}>8</Field>
					<Field component={ReduxToggleButton} value={9}>9</Field>
					<Field component={ReduxToggleButton} value={10}>10+</Field>
				</ToggleButtonGroup>
			</FormGroup>
		);
	}
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
