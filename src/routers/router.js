import React from 'react';
import { BrowserRouter as Router, HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from '../App'
import LayOut from '../layout/index'
import Login from '../pages/Login/index';
import Home from '../pages/Home'
import ApproveList from '../pages/ApproveList'
import ApproveStatus from '../pages/ApproveStatus'
const DRouter = () => {
	return (
		<Router>
			<App>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/" render={() =>
						<LayOut>
							<Switch>
								<Route path="/" exact component={Home} />
								<Route path='/home' component={Home} />
								<Route path='/3' component={Home} />
								<Route path='/approvelist' component={ApproveList} />
								<Route path='/approvestatus' component={ApproveStatus} />
								<Redirect to="/home" />
							</Switch>
						</LayOut>
					} />
				</Switch>
			</App>
		</Router>
	)
}

export default DRouter;