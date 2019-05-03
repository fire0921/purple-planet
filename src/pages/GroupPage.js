import React from "react";
import TopBar from "../components/topBar.js";
import Footer from "../components/footer.js";
import Group from "../components/group.js";
import "../css/index.css";

function GroupPage() {
	return (
		<div id="container">
			<div className= "Group">
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

export default GroupPage;

/*
Reactdom.render(
	<Page ID="Login" />,
	document.getElementById("root")
);

serviceWorker.unregister();
*/
