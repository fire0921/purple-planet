import React from "react";
import TopBar from "../components/topBar.jsx";
import Footer from "../components/footer.jsx";
import Productors from "../components/productors.jsx";
import "../css/index.css";

function ProductorsPage() {
	return (
		<div id="container">
			<div className= "Group">
				<TopBar />
			</div>
			<div>
				<Productors />
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default ProductorsPage;

