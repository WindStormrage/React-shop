import React from 'react';
import test2 from './pages/Test2.js'
import test from './pages/Test.js'
import {Switch,Route} from 'react-router-dom'


const router = () => (
	<Switch>
		<Route exact path='/test' component={test}/>
		<Route path='/test2' component={test2}/>
	</Switch>
)

export default router;