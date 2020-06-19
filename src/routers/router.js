import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from '../App'
import LayOut from '../layout/index'
import Login from '../pages/Login/index';

const DRouter = () => {
	return (
		<HashRouter>
			<App>
				<Route path="/login" component={Login} />
				<Route path="/" render ={() =>
					<LayOut>

					</LayOut>
				 }/>
			</App>
		</HashRouter>
	)
}

export default DRouter;