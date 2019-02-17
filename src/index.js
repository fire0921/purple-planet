import React from "react";
import Reactdom from "react-dom";
import TopBar from "./components/topBar.js";
import Footer from "./components/footer.js";
//import Login from "./components/login.js";
import Group from "./components/group.js";
import "../src/css/index.css";
import * as serviceWorker from "./serviceWorker";

function Page(props){
    return(
        <div id="container">
                <div className= {props.ID}>
                    <TopBar />
                </div>
                <div>
                    <Group />
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
    );
}


Reactdom.render(
    <Page ID="group" />,
    document.getElementById("root")
);

serviceWorker.unregister();
