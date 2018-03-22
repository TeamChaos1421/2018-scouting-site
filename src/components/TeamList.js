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
				regional: {
					'$eq': this.props.settings.regional,
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

			let allianceMember1 = 1902;
			let allianceMember2 = 5842;

			return (
				<div className='matchList'>
					<h3>Alliance Partners</h3>
					<div><Link to={'/team/' + allianceMember1}>{allianceMember1}</Link></div>
					<div><Link to={'/team/' + allianceMember2}>{allianceMember2}</Link></div>
					<br/>
					<h3>Other teams</h3>
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
		settings: state.settings,
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
