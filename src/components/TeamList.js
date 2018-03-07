// Library imports
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Actions
import {fetchTeamList} from '../actions/teamActionsTBA';

// TODO: More comments





function TeamPreview(props) {
	return (
		<tr key={props.team_number}>
			<td><a href={'/team/' + props.team_number}>{props.team_number}</a></td>
			<td>{props.nickname}</td>
		</tr>
	);
}

class TeamList extends React.Component {
	componentWillMount() {
		this.props.fetchTeamList('2018mxmo');
	}

	render() {
		if(!this.props.teamList || this.props.teamList == null) {
			return (
				<div>
					Loading team list...
				</div>
			);
		} else {
			return (
				<div className='teamList'>
					<table>
						<tbody>
							{
								this.props.teamList.map((team, index) => {
									return TeamPreview(team);
								})
							}
						</tbody>
					</table>
				</div>
			);
		}
	}
}

function mapStateToProps(state) {
	return {
		teamList: state.teamList,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		fetchTeamList: bindActionCreators(fetchTeamList, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TeamList);
