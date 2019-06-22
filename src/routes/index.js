import React from "react";
import { Route, Redirect } from "react-router-dom";
import LoginPage from "../pages/loginPage.jsx";
import GroupPage from "../pages/GroupPage.jsx";
import CheckAuth from "../components/checkAuth";

//const loggedIn = false; 

export default (
	<div>
		<Route exact path="/" render={() => (
			(<Redirect to="/login" />)
		)} />
		<Route path="\/login" component={ CheckAuth(LoginPage, "login")} />
		<Route path="\/group" component={ CheckAuth(GroupPage, "auth")}/>
	</div>
);
