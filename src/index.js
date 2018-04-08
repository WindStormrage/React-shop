import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './constants/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import testAPP from './reducers'

let store = createStore(testAPP);

ReactDOM.render((
	<Provider store={store}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider>
	), document.getElementById('root'));
registerServiceWorker();
