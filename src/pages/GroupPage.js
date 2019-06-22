import React from "react";
import TopBar from "../components/topBar.js";
import Footer from "../components/footer.js";
import GroupContainers from "../containers/groupContainers";
import "../css/index.css";

function GroupPage() {
	return (
		<div id="container">
			<div className= "Group">
				<TopBar />
			</div>
			<div>
				<GroupContainers />
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
