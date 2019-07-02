import React from "react";
import { Route, Redirect } from "react-router-dom";
import LoginPage from "../pages/loginPage.jsx";
import GroupPage from "../pages/GroupPage.jsx";
import GroupDetailPage from "../pages/groupDetailPage.jsx";
import CheckAuth from "../components/checkAuth";
import Privacy from "../components/privacyPolicy.jsx";

//const loggedIn = false; 

export default (
	<div>
		<Route exact path="/" render={() => (
			(<Redirect to="/group" />)
		)} />
		<Route exact path="/login" component={ CheckAuth(LoginPage, "login")} />
		<Route exact path="/group" component={ CheckAuth(GroupPage, "noauth")}/>
		<Route exact path="/group/groupDetail/:id" component={ GroupDetailPage }/>
		<Route exact path="/privacy" component={ Privacy }/>
	</div>
);
