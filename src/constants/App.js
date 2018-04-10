import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Router from './../router.js'
import Index from './../components/Head.js'

class App extends Component {
  render() {
    return (
      <div>
	      <Index />
        <li><Link to='/test'>test</Link></li>
        <li><Link to='/test2'>test2</Link></li>
        <div style={{height: 1000,backgroundColor: 'yellow'}}>
          66666666666666
        </div>
        <Router></Router>
      </div>
    );
  }
}

export default App;
