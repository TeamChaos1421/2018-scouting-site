// Library imports
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// Actions
import {fetchMatchData} from '../actions/regionalActionsTBA';

// TODO: More comments





function MatchPreview(props) {
	return (
		<tr key={props.match_number}>
			<td><a href={'/match/' + props.match_number}>{props.match_number}</a></td>
		</tr>
	);
}

class MatchList extends React.Component {
	componentWillMount() {
		this.props.fetchMatchData('2018flor');
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
)(MatchList);
