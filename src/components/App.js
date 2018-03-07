// Library imports
import React from 'react';
import {Route, Link} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';

// Pages
import Home from './Home';
import TeamList from './TeamList';
import TeamPage from './TeamPage';
import MatchList from './MatchList';
import AdminPage from './AdminPage';
import ScoutingPage from './ScoutingPage';

// The main layout for the application
function App(props) {
	return (
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
					<LinkContainer to='/teams'>
						<NavItem eventKey={2}>Teams</NavItem>
					</LinkContainer>
					<LinkContainer to='/matches'>
						<NavItem eventKey={2}>Matches</NavItem>
					</LinkContainer>
					<LinkContainer to='/administration'>
						<NavItem eventKey={2}>Administration</NavItem>
					</LinkContainer>
				</Nav>
			</Navbar>
			
			<Route exact path='/' component={ScoutingPage} />
			<Route path='/teams' component={TeamList} />
			<Route path='/team/*' component={TeamPage} />
			<Route path='/matches' component={MatchList} />
			<Route path='/administration' component={AdminPage} />
		</div>
	);
}

export default App;
