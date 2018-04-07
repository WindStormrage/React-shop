import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import testAPP from './reducers'

// import { connect } from 'react-redux';
// import {addData} from "./actions/index";

//store:链接redux组件
let store = createStore(testAPP);

//
// //映射Redux state到组件的属性
// function mapStateToProps(state) {
// 	return { count: state }
// }
//
// //映射Redux actions到组件的属性
// function mapDispatchToProps(dispatch){
// 	return{
// 		add:()=>dispatch(addData)
// 	}
// }
//
// //连接组件
// App = connect(mapStateToProps, mapDispatchToProps)(App);


ReactDOM.render((
	<Provider store={store}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider>
	), document.getElementById('root'));
registerServiceWorker();
