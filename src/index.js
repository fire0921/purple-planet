import React from "react";
import Reactdom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import route from "./routes";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import configureStore from "./stores";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./css/theme";

const store = configureStore();

serviceWorker.unregister();

const render = component => {
	Reactdom.render(
		<Provider store={store}>
			<Router>
				<ThemeProvider theme={theme}>
					{ component }
				</ThemeProvider>	
			</Router>
		</Provider>,
		document.getElementById("root")
	);
};

render(route);
