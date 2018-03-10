// Library imports
import React from 'react';
import {connect} from 'react-redux';
import {Table} from 'react-bootstrap';
import {bindActionCreators} from 'redux';

// Actions
import {fetchMatchData} from '../actions/matchActions';

// Components
import MatchOverview from './MatchOverview';
import MatchDetail from './MatchDetail';

class MatchPage extends React.Component {
	componentWillMount() {
		this.props.fetchMatchData({
			selector: {
				matchNumber: {
					'$exists': true,
				},
				matchNumber: this.props.match.params[0],
			},
			'limit': 1000,
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
				<MatchDetail matchData={this.props.matchData.matchData.docs} />
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
