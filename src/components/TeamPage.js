// Library imports
import React from 'react';
import {connect} from 'react-redux';

// Actions
import {} from '../actions/teamActionsTBA';

// TODO: More Comments





class TeamPage extends React.Component {
	render() {
		let teamNumber = this.props.match.params[0];
		return (
			<div>
				Loading data for team {teamNumber}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		teamList: state.teamList,
	};
}

function mapDispatchToProps(dispatch) {
	return {
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TeamPage);
