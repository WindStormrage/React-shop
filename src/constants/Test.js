import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../assets/css/App.css';
import {addData} from "../actions/index";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Test  = ({ onTodoClick }) => {
		return (
			<div className="App">
				<p className="App-intro">
					<li><Link to='/test2'>to test2</Link></li>
					this is test
					<input type="button" value="add" onClick={()=>{
						onTodoClick(50)
					}}/>
					<li><Link to='/'>to app</Link></li>
				</p>
			</div>
		);
}

const mapStateToProps = () =>{

};

const mapDispatchToProps = dispatch => {
	return {
		onTodoClick: id => {
			dispatch(addData(id))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Test)
