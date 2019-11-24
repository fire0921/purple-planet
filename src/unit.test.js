import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./stores";
import TopBar from "./components/topBar.jsx";
import Page from "./components/order/order.jsx";
import Group from "./containers/groupContainers";
//import groupDetail from "./components/groupDetail.jsx";
import { BrowserRouter as Router } from "react-router-dom";

const store = configureStore();


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
		<Provider store={store}>
			<Router>
				<Page />
			</Router>
		</Provider>
		, div);
	ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<Provider store={store}>
			<Router>
				<Group />
			</Router>
		</Provider>
		, div);
	ReactDOM.unmountComponentAtNode(div);
});
/*
it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<Provider store={store}>
			<Router>
				<groupDetail />
			</Router>
		</Provider>
		, div);
	ReactDOM.unmountComponentAtNode(div);
});
*/
