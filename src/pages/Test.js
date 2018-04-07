import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../assets/css/App.css';
import {addData} from "../actions/index";
import { connect } from 'react-redux'

const Test  = ({ dispatch }) => {
		return (
			<div className="App">
				<p className="App-intro">
					<li><Link to='/test2'>to test2</Link></li>
					this is test
					<input type="button" value="add" onClick={()=>{
						dispatch(addData(100))
					}}/>
					<li><Link to='/'>to app</Link></li>
				</p>
			</div>
		);
}
export default connect()(Test)
