import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Router from './../router.js'

class App extends Component {
  render() {
    return (
      <div>
        <li><Link to='/test'>test</Link></li>
        <li><Link to='/test2'>test2</Link></li>
        <Router></Router>
      </div>
    );
  }
}

export default App;
