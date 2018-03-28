// Library imports
import React from 'react';
import {connect} from 'react-redux';
import {Table} from 'react-bootstrap';
import {bindActionCreators} from 'redux';

// Actions
import {MATCH_DATA_FETCH_REQUESTED} from '../actions/allActions';

// Components
import MatchOverview from './MatchOverview';
import MatchDetail from './MatchDetail';

class MatchPage extends React.Component {
	componentWillMount() {
		this.props.dispatch({
			type: MATCH_DATA_FETCH_REQUESTED,
			regional: this.props.settings.regional,
			matchNumber: this.props.match.params[0],
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
)(MatchPage);
