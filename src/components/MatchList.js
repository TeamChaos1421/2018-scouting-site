// Library imports
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

// Actions
import {MATCH_LIST_FETCH_REQUESTED} from '../actions/allActions';

class MatchList extends React.Component {
	componentWillMount() {
		this.props.dispatch({
			type: MATCH_LIST_FETCH_REQUESTED,
			regional: this.props.settings.regional,
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
		dispatch: dispatch,
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MatchList);
