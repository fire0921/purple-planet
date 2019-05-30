import React from "react";
import ReactDOM from "react-dom";
//import App from "./components/login.jsx";
import TopBar from "./components/topBar.jsx";
import Page from "./components/order/order.jsx";
import Order from "./components/checkAuth/checkAuth.jsx";
//import Page from "./pages/GroupPage.jsx";
import { BrowserRouter as Router } from "react-router-dom";


it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<Router>
			<TopBar />
		</Router>
		, div);
	ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<Router>
			<Page />
		</Router>
		, div);
	ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<Router>
			<Order />
		</Router>
		, div);
	ReactDOM.unmountComponentAtNode(div);
});
