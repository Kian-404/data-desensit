import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from '../App'
import LayOut from '../layout/index'
import Login from '../pages/Login/index';
import Home from '../pages/Home'

const DRouter = () => {
	return (
		<HashRouter>
			<App>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/" render={() =>
						<LayOut>
							<Switch>
								<Route path='/home' component={Home} />
							</Switch>
						</LayOut>
					} />
				</Switch>
			</App>
		</HashRouter>
	)
}

export default DRouter;