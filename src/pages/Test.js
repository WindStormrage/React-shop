import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../assets/css/App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<p className="App-intro">
					<li><Link to='/test2'>to test2</Link></li>
					this is test
					<li><Link to='/'>to app</Link></li>
				</p>
			</div>
		);
	}
}
export default App;
