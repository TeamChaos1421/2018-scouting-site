// Library imports
import React from 'react';
import {connect} from 'react-redux';
import {Table} from 'react-bootstrap';
import {bindActionCreators} from 'redux';

// Actions
import {fetchTeamData} from '../actions/teamActions';

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
			'limit': 500,
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
				<div className='matchList'>
					<Table bordered condensed>
						<thead>
							<th>User</th>
							<th>Match Number</th>
							<th>Team Number</th>
						</thead>
						<tbody>
							{
								this.props.teamData.teamData.docs.map((matchData, index) => {
									return ScoutPreview(matchData);
								})
							}
						</tbody>
					</Table>
				</div>
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
