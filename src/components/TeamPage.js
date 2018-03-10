// Library imports
import React from 'react';
import {connect} from 'react-redux';
import {Table} from 'react-bootstrap';
import {bindActionCreators} from 'redux';

// Actions
import {fetchTeamData} from '../actions/teamActions';

// Components
import MatchOverview from './MatchOverview';
import MatchDetail from './MatchDetail';

function ScoutPreview(props) {
	console.log(props);
	return (
		<tr key={props.matchNumber + ':' + props.teamNumber + ':' + props.username}>
			<td>{props.username}</td>
			<td>{props.matchNumber}</td>
			<td>{props.teamNumber}</td>
		</tr>
	);
}

class TeamPage extends React.Component {
	componentWillMount() {
		this.props.fetchTeamData({
			selector: {
				matchNumber: {
					'$exists': true,
				},
				teamNumber: this.props.match.params[0],
			},
			'limit': 1000,
		});
	}

	render() {
		if(!this.props.teamData || !this.props.teamData.teamData) {
			return (
				<div>
					Running query...
				</div>
			);
		} else {
			return (
				<MatchDetail matchData={this.props.teamData.teamData.docs} />
			);
		}
	}
}

function mapStateToProps(state) {
	return {
		teamData: state.teamData,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		fetchTeamData: bindActionCreators(fetchTeamData, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TeamPage);
