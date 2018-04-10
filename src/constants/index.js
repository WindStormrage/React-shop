import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../assets/css/App.css';

const Test  = () => {
	return (
		<div className="App">

			<header data-am-widget="header"
			        className="am-header am-header-default">
				<div className="am-header-left am-header-nav">
					<a href="#left-link">
						<i className="am-header-icon am-icon-home"></i>
					</a>
				</div>

				<h1 className="am-header-title">
					<a href="#title-link">
						推荐
					</a>
				</h1>

				<div className="am-header-right am-header-nav">
					<a href="#right-link">
						<i className="am-header-icon am-icon-bars"></i>
					</a>
				</div>
			</header>
		</div>
	);
}


export default Test
