import React from "react";
import { Route, Redirect } from "react-router-dom";
import LoginPage from "../pages/loginPage";
import GroupPage from "../pages/GroupPage";
//import CheckAuth from "../components/checkAuth";

//const loggedIn = false; 

export default (
	<div>
		<Route exact path="/" render={() => (
			(<Redirect to="/login" />)
		)} />
		<Route path="\/login" component={ LoginPage } />
		<Route path="\/group" component={ GroupPage }/>
	</div>
);