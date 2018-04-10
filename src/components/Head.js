import React,{Component} from 'react'
import './Head.css'
import home from "../assets/images/home.png"
import bars from "../assets/images/bars.png"

class Head extends Component {
	render() {
		return (
			<div className="head-div">
				<div className="head">
						<img className="icon" src={home}/>
						<span>推 荐</span>
						<img className="icon" src={bars}/>
				</div>
			</div>
		)
	}
}

export default Head