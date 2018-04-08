import React from 'react';
import test2 from './constants/Test2.js'
import test from './constants/Test.js'
import {Switch,Route} from 'react-router-dom'


const router = () => (
	<Switch>
		<Route exact path='/test' component={test}/>
		<Route path='/test2' component={test2}/>
	</Switch>
)

export default router;