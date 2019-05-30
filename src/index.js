import React from "react";
import Reactdom from "react-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import GroupPage from "./pages/GroupPage";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./stores";

const loggedIn = false; 

Reactdom.render(
	<Provider store={store}>
		<Router>
			<div>
				<Route exact path="/" render={() => (
					loggedIn ? (<Redirect to="/group"/>):(<LoginPage/>)
				)}/>
				<Route path="\/group" component={GroupPage}/>
			</div>
		</Router>
	</Provider>,
	document.getElementById("root")
);

serviceWorker.unregister();

if (module.hot) {
	module.hot.accept();
}
