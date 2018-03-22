// Library imports
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

// Actions
import {fetchMatchList} from '../actions/matchActions';

class MatchList extends React.Component {
	componentWillMount() {
		this.props.fetchMatchList({
			selector: {
				matchNumber: {
					'$exists': true,
				},
				regional: {
					'$eq': this.props.settings.regional,
				},
			},
			fields: ['matchNumber'],
			'limit': 500,
		});
	}

	render() {
		if(!this.props.matchData || !this.props.matchData.matchList) {
			return (
				<div>
					Running query...
				</div>
			);
		} else {
			let matches = this.props.matchData.matchList.docs.reduce((acc, cur) => {
				if(acc.includes(cur.matchNumber)) {
					return acc;
				} else {
					acc.push(cur.matchNumber)
					return acc;
				}
			}, []);

			matches.sort();

			return (
				<div className='matchList'>
					{
						matches.map((match, index) => {
							return (
								<div>
								<Link to={'/match/' + match}>{match}</Link>
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
		matchData: state.matchData,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		fetchMatchList: bindActionCreators(fetchMatchList, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MatchList);
