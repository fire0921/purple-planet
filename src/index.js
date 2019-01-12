import React from "react";
import Reactdom from "react-dom";
import Top_Bar from "./views/topBar.js";
import Footer from "./views/footer.js";
import Login from "./views/login.js";
import "../src/css/index.css";
import * as serviceWorker from "./serviceWorker";


class LandingPage extends React.Component {
    render() {
        return (
            <div id="container">
                <div className="check">
                    <Top_Bar />
                </div>
                <div id="login">
                    <Login />
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }
}

Reactdom.render(
    <LandingPage />,
    document.getElementById("root")
);

serviceWorker.unregister();
