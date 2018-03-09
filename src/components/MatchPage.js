// Library imports
import React from 'react';
import {connect} from 'react-redux';
import {Table} from 'react-bootstrap';
import {bindActionCreators} from 'redux';

// Actions
import {fetchMatchData} from '../actions/matchActions';

function ScoutPreview(props) {
	console.log(props);
	return (
		<tr key={props.matchNumber + ':' + props.matchNumber + ':' + props.username}>
			<td>{props.username}</td>
			<td>{props.matchNumber}</td>
			<td>{props.teamNumber}</td>
		</tr>
	);
}

class MatchPage extends React.Component {
	componentWillMount() {
		this.props.fetchMatchData({
			selector: {
				matchNumber: {
					'$exists': true,
				},
				matchNumber: this.props.match.params[0],
			},
			'limit': 500,
		});
	}

	render() {
		if(!this.props.matchData || !this.props.matchData.matchData) {
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
								this.props.matchData.matchData.docs.map((matchData, index) => {
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
		matchData: state.matchData,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		fetchMatchData: bindActionCreators(fetchMatchData, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MatchPage);
