import React from "react";
import { Route, Redirect } from "react-router-dom";
import LoginPage from "../pages/loginPage";
import GroupPage from "../pages/GroupPage";

const loggedIn = false; 

export default (
  <div>
	  <Route exact path="/" render={() => (
		  loggedIn ? (<Redirect to="/group" />):(<LoginPage />)
	  )} />
	  <Route path="\/group" component={ GroupPage } />
	</div>
)