import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../assets/css/App.css';
import {connect} from 'react-redux'


import PropTypes from 'prop-types'

const Test2 = ({data}) => {

	return (
		<div className="App">
			<p className="App-intro">
				<li><Link to='/test'>to test</Link></li>
				this is test2------<span>{JSON.stringify(data)}</span>
				<li><Link to='/'>to app</Link></li>
			</p>
		</div>
	);
}

// Test2.propTypes = {
// 	data: PropTypes.object.isRequired
// }

const mapStateToProps = state => ({
	data: state
})

export default connect(mapStateToProps)(Test2)


// import React, {Component} from 'react';
// import {Link} from 'react-router-dom'
// import '../assets/css/App.css';
// import {connect} from 'react-redux'
//
//
// import PropTypes from 'prop-types'
//
// class Test2 extends Component {
// 	render() {
// 		const {data} = this.props;
// 		return (
// 			<div className="App">
// 				<p className="App-intro">
// 					<li><Link to='/test'>to test</Link></li>
// 					this is test2------<span>{JSON.stringify(data)}</span>
// 					<li><Link to='/'>to app</Link></li>
// 				</p>
// 			</div>
// 		)
//
// 	}
// }
//
// const mapStateToProps = state => ({
// 	data: state
// })
//
//
// export default connect(mapStateToProps)(Test2)
