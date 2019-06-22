import React from "react";
import TopBar from "../components/topBar.jsx";
import Footer from "../components/footer.jsx";
import LoginContainers from "../containers/LoginContainers";
import FBLoginContainers from "../containers/FBLoginContainers";
import "../css/index.css";

function LoginPage() {
	return (
		<div id="container">
			<div className= "Login">
				<TopBar />
			</div>
			<div>
				<LoginContainers />
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
