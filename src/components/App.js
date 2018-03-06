// Library imports
import React from 'react';
import {Route, Link} from 'react-router-dom';

// Pages
import Home from './Home';
import TeamList from './TeamList';
import TeamPage from './TeamPage';
import MatchList from './MatchList';
import ScoutingPage from './ScoutingPage';

// The main layout for the application
class App extends React.Component {
	render() {
		return (
			<div>
				<ul>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/teams'>Teams</Link></li>
					<li><Link to='/matches'>Matches</Link></li>
					<li><Link to='/scouting'>Scouting</Link></li>
				</ul>

				<hr/>

				<Route exact path='/' component={Home} />
				<Route path='/teams' component={TeamList} />
				<Route path='/team/*' component={TeamPage} />
				<Route path='/matches' component={MatchList} />
				<Route path='/scouting' component={ScoutingPage} />
			</div>
		);
	}
}

export default App;
