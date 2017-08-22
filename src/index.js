import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './index.scss';

const renderApp = Component =>
	render(
		<BrowserRouter>
			<Component />
		</BrowserRouter>,
		document.getElementById('root')
	);

renderApp(App);

if (module.hot) module.hot.accept('./components/App', () => renderApp(App));