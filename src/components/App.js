// Library imports
import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {BrowserRouter} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';

// Actions
import {fetchSettings} from '../actions/settingsActions';

// Pages
import TeamList from './TeamList';
import TeamPage from './TeamPage';
import UserList from './UserList';
import UserPage from './UserPage';
import MatchList from './MatchList';
import AdminPage from './AdminPage';
import ScoutingPage from './ScoutingPage';

let divStyle = {
	'padding-left': '15px',
	'padding-right': '15px',
}
	
// The main layout for the application
class App extends React.Component {
	componentWillMount() {
		// Do stuff that the entire application needs
		this.props.fetchSettings();
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
								<NavItem eventKey={2}>Scout</NavItem>
							</IndexLinkContainer>
							{/*
							<LinkContainer to='/teams'>
								<NavItem eventKey={2}>Teams</NavItem>
							</LinkContainer>
							<LinkContainer to='/matches'>
								<NavItem eventKey={2}>Matches</NavItem>
							</LinkContainer>
							*/}
							<IndexLinkContainer to='/users'>
								<NavItem eventKey={4}>Users</NavItem>
							</IndexLinkContainer>
							<LinkContainer to='/administration'>
								<NavItem eventKey={2}>Administration</NavItem>
							</LinkContainer>
						</Nav>
					</Navbar>
					
					<div style={divStyle}>
						<Route exact path='/' component={ScoutingPage} />
						<Route path='/teams' component={TeamList} />
						<Route exact path='/users' component={UserList} />
						<Route exact path='/user' component={UserPage} />
						<Route path='/user/*' component={UserPage} />
						<Route path='/team/*' component={TeamPage} />
						<Route path='/matches' component={MatchList} />
						<Route path='/administration' component={AdminPage} />
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
		fetchSettings: bindActionCreators(fetchSettings, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

