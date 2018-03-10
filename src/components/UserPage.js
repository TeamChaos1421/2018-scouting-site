// Library imports
import React from 'react';
import {connect} from 'react-redux';
import {Table} from 'react-bootstrap';
import {bindActionCreators} from 'redux';

// Actions
import {fetchUserData} from '../actions/userActions';

// Components
import MatchOverview from './MatchOverview';
import MatchDetail from './MatchDetail';

class UserPage extends React.Component {
	componentWillMount() {
		this.props.fetchUserData({
			selector: {
				matchNumber: {
					'$exists': true,
				},
				username: this.props.match.params[0],
			},
			'limit': 1000,
		});
	}

	render() {
		if(!this.props.userData || !this.props.userData.userData) {
			return (
				<div>
					Running query...
				</div>
			);
		} else {
			return (
				<MatchDetail matchData={this.props.userData.userData.docs} />
			);
		}
	}
}

function mapStateToProps(state) {
	return {
		userData: state.userData,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		fetchUserData: bindActionCreators(fetchUserData, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserPage);
