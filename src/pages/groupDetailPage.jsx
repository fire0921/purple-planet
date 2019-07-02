import React from "react";
import TopBar from "../components/topBar.jsx";
import Footer from "../components/footer.jsx";
import GroupDetail from "../components/groupDetail.jsx";
import "../css/index.css";

function GroupDetailPage() {
	return (
		<div id="container">
			<div className= "Group">
				<TopBar />
			</div>
			<div>
				<GroupDetail />
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default GroupDetailPage;
