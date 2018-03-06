// Library imports
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Actions
import * as tbaActions from '../actions/regionalActionsTBA';

// TODO: More comments





function MatchPreview(props) {
	return (
		<tr>
			<td><a href={'/match/' + props.match_number}>{props.match_number}</a></td>
		</tr>
	);
}

class MatchList extends React.Component {
	componentWillMount() {
		this.props.tbaActions.fetchMatchData('2018mxmo');
	}

	render() {
		if(!this.props.matchData) {
			return (
				<div>
					Loading match list...
				</div>
			);
		} else {
			return (
				<div className='matchList'>
					<table>
						<tbody>
							{
								this.props.matchData.map((match, index) => {
									if(match.comp_level === 'qm') {
										return MatchPreview(match);
									} else {
										return null;
									}
								})
							}
						</tbody>
					</table>
				</div>
			);
		};
	}
}

function mapStateToProps(state) {
	return {
		matchData: state.matchData,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		tbaActions: bindActionCreators(tbaActions, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MatchList);
