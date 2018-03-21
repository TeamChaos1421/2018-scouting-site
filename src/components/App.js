// Library imports
import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {BrowserRouter} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';

// Actions
import {SETTINGS_FETCH_REQUESTED} from '../actions/allActions';

// Pages
import TeamList from './TeamList';
import TeamPage from './TeamPage';
import UserList from './UserList';
import UserPage from './UserPage';
import MatchList from './MatchList';
import MatchPage from './MatchPage';
import AdminPage from './AdminPage';
import ScoutingPage from './ScoutingPage';
import DataPage from './DataPage';

let divStyle = {
	'paddingLeft': '15px',
	'paddingRight': '15px',
	'paddingBottom': '15px',
}
	
// The main layout for the application
class App extends React.Component {
	componentWillMount() {
		// Do stuff that the entire application needs
		this.props.dispatch({type: SETTINGS_FETCH_REQUESTED});
	}

	render() {
		if(!this.props.settings) {
			return (
				<div>
					Loading settings...
				</div>
			);
		} else {
			return (
			<BrowserRouter>
				<div>
					<Navbar inverse>
						<Navbar.Header>
							<Navbar.Brand>
								<a href='/'>Chaos Scouting</a>
							</Navbar.Brand>
						</Navbar.Header>
						<Nav>
							<IndexLinkContainer to='/'>
								<NavItem eventKey={1}>Scout</NavItem>
							</IndexLinkContainer>
							<IndexLinkContainer to='/teams'>
								<NavItem eventKey={2}>Teams</NavItem>
							</IndexLinkContainer>
							<IndexLinkContainer to='/matches'>
								<NavItem eventKey={3}>Matches</NavItem>
							</IndexLinkContainer>
							<IndexLinkContainer to='/users'>
								<NavItem eventKey={4}>Users</NavItem>
							</IndexLinkContainer>
							<IndexLinkContainer to='/data'>
								<NavItem eventKey={4}>Data</NavItem>
							</IndexLinkContainer>
							<LinkContainer to='/administration'>
								<NavItem eventKey={5}>Administration</NavItem>
							</LinkContainer>
						</Nav>
					</Navbar>
					
					<div style={divStyle}>
						<Route exact path='/' component={ScoutingPage} />
						<Route path='/administration' component={AdminPage} />
						<Route path='/data' component={DataPage} />

						<Route exact path='/users' component={UserList} />
						<Route exact path='/user' component={UserPage} />
						<Route path='/user/*' component={UserPage} />

						<Route exact path='/teams' component={TeamList} />
						<Route exact path='/team' component={TeamPage} />
						<Route path='/team/*' component={TeamPage} />

						<Route path='/matches' component={MatchList} />
						<Route exact path='/match' component={MatchPage} />
						<Route path='/match/*' component={MatchPage} />
					</div>
				</div>
			</BrowserRouter>
			);
		}
	}
}

function mapStateToProps(state) {
	return {
		settings: state.settings,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch: dispatch,
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

