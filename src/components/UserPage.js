// Library imports
import React from 'react';
import {connect} from 'react-redux';
import {Table} from 'react-bootstrap';
import {bindActionCreators} from 'redux';

// Actions
import {fetchTestData} from '../actions/analysisActions';

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

class UserPage extends React.Component {
	componentWillMount() {
		this.props.fetchTestData({
			selector: {
				matchNumber: {
					'$exists': true,
				},
				username: this.props.match.params[0],
			},
			'limit': 500,
		});
	}

	render() {
		if(!this.props.testData) {
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
								this.props.testData.docs.map((matchData, index) => {
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
		testData: state.testData,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		fetchTestData: bindActionCreators(fetchTestData, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserPage);
