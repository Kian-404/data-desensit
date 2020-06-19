import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from '../App'
import Layout from '../layout/index'
import Login from '../pages/Login/index';

const DRouter = () => {
	return (
		<HashRouter>
			<App>
				<Route path="/login" component={Login} />
			</App>
		</HashRouter>
	)
}

export default DRouter;