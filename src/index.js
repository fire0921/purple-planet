import React from "react";
import Reactdom from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import GroupPage from "./pages/GroupPage";
import * as serviceWorker from "./serviceWorker";

Reactdom.render(
	<Router forceRefresh={false}>
		<div>
			<Route path="/login" component={LoginPage}/>
			<Route path="/group" component={GroupPage}/>
		</div>
	</Router>,
	document.getElementById("root")
);

serviceWorker.unregister();
