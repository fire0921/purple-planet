import React from "react";
import Reactdom from "react-dom";
import TopBar from "../components/topBar.js";
import Footer from "../components/footer.js";
import Login from "../components/login.js";
import FBLoginContainers from "../containers/FBLoginContainers";
import "../css/index.css";

function LoginPage() {
  return (
    <div id="container">
			<div className= "Login">
				<TopBar />
			</div>
			<div>
				<Login />
			</div>
			<div>
			  <FBLoginContainers />
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
  );
}

export default LoginPage;

/*
Reactdom.render(
	<Page ID="Login" />,
	document.getElementById("root")
);

serviceWorker.unregister();
*/
