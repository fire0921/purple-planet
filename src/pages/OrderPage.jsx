import React from "react";
import TopBar from "../components/topBar.jsx";
import Footer from "../components/footer.jsx";
import Order from "../components/order.jsx";
import "../css/index.css";


function OrderPage() {
	return (
		<div id="container">
			<div className= "Order">
				<TopBar />
			</div>
			<div>
				<Order />
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default OrderPage;

