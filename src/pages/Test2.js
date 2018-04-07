import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/css/App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					this is test22222222
				</p>
			</div>
		);
	}
}

export default App;
