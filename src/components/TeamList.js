// Library imports
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

// Actions
import {fetchTeamList} from '../actions/teamActions';

class TeamList extends React.Component {
	componentWillMount() {
		this.props.fetchTeamList({
			selector: {
				teamNumber: {
					'$exists': true,
				},
			},
			fields: ['teamNumber'],
			'limit': 500,
		});
	}

	render() {
		if(!this.props.teamData || !this.props.teamData.teamList) {
			return (
				<div>
					Running query...
				</div>
			);
		} else {
			let teams = this.props.teamData.teamList.docs.reduce((acc, cur) => {
				if(acc.includes(cur.teamNumber)) {
					return acc;
				} else {
					acc.push(cur.teamNumber)
					return acc;
				}
			}, []);

			teams.sort();

			return (
				<div className='matchList'>
					{
						teams.map((team, index) => {
							return (
								<div>
								<Link to={'/team/' + team}>{team}</Link>
								</div>
							);
						})
					}
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
		fetchTeamList: bindActionCreators(fetchTeamList, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TeamList);
