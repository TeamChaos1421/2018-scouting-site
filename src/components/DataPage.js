// Library imports
import React from 'react';
import {connect} from 'react-redux';
import {Table} from 'react-bootstrap';
import {bindActionCreators} from 'redux';

// Actions
import {fetchDataData} from '../actions/dataActions';

// Components
import MatchOverview from './MatchOverview';
import MatchDetail from './MatchDetail';

function ScoutPreview(props) {
	console.log(props);
	return (
		<tr key={props.matchNumber + ':' + props.dataNumber + ':' + props.username}>
			<td>{props.username}</td>
			<td>{props.matchNumber}</td>
			<td>{props.dataNumber}</td>
		</tr>
	);
}

class DataPage extends React.Component {
	componentWillMount() {
		this.props.fetchDataData({
			selector: {
				matchNumber: {
					'$exists': true,
				},
				dataNumber: this.props.match.params[0],
			},
			'limit': 1000,
		});
	}

	render() {
		if(!this.props.dataData || !this.props.dataData.dataData) {
			return (
				<div>
					Running query...
				</div>
			);
		} else {
			return (
				<MatchDetail matchData={this.props.dataData.dataData.docs} />
			);
		}
	}
}

function mapStateToProps(state) {
	return {
		dataData: state.dataData,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		fetchDataData: bindActionCreators(fetchDataData, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DataPage);
