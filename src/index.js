import React from "react";
import Reactdom from "react-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import GroupPage from "./pages/GroupPage";
import * as serviceWorker from "./serviceWorker";

const loggedIn = true; 

Reactdom.render(
	<Router>
		<div>
			<Route exact path="/" render={() => (
				loggedIn ? (<Redirect to="/group"/>):(<LoginPage/>)
			)}/>
			<Route path="\/group" component={GroupPage}/>
		</div>
	</Router>,
	document.getElementById("root")
);

serviceWorker.unregister();
