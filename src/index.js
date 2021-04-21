import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import allReducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

const store = createStore(allReducers, composeWithDevTools());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
