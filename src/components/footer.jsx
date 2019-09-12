import React from "react";
import "../css/index.css";
import Phone from "../icon/mobile/phone_m.png";
import Line01 from "../icon/mobile/line01_m.png";
import returnTop from "../icon/mobile/top_m.png";
import returnBack from "../icon/mobile/back_m.png";

class Footer extends React.Component {
	render() {
		return (
			<div>
				<div className="footer">
					<div
						id="Phone"
						onClick={() => {
							console.log("test");
						}}
					>
						<img alt="Phone" src={Phone} border="0" height="67%" width="67%" />
					</div>
					<div id="Line01">
						<img
							alt="Line01"
							src={Line01}
							border="0"
							height="67%"
							width="67%"
						/>
					</div>
					<div id="back">
						<img
							alt="back"
							src={returnBack}
							border="0"
							height="67%"
							width="67%"
						/>
					</div>
					<div id="returnTop">
						<img
							alt="returnBack"
							src={returnTop}
							border="0"
							height="67%"
							width="67%"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
