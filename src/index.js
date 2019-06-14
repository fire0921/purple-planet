import React from "react";
import Reactdom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import route from "./routes";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./stores";

Reactdom.render(
	<Provider store={store}>
		<Router>{ route }</Router>
	</Provider>,
	document.getElementById("root")
);

serviceWorker.unregister();

if (module.hot) {
	module.hot.accept();
}
