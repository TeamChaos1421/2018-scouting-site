// Library imports
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

// Actions
import {fetchUserList} from '../actions/userActions';

class UserList extends React.Component {
	componentWillMount() {
		this.props.fetchUserList({
			selector: {
				username: {
					'$exists': true,
				},
			},
			fields: ['username'],
			'limit': 500,
		});
	}

	render() {
		if(!this.props.userData) {
			return (
				<div>
					Running query...
				</div>
			);
		} else {
			let users = this.props.userData.userList.docs.reduce((acc, cur) => {
				if(acc.includes(cur.username)) {
					return acc;
				} else {
					acc.push(cur.username)
					return acc;
				}
			}, []);
			return (
				<div className='matchList'>
					{
						users.map((user, index) => {
							return (
								<div key={user}>
									<Link to={'/user/' + user}>{user}</Link>
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
		userData: state.userData,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		fetchUserList: bindActionCreators(fetchUserList, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserList);
