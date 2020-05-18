import React from "react";
// import Button from "@material-ui/core/Button";
import "../css/index.css";
import Logo from "../icon/mobile/logo01_m.png";
import Search from "../icon/mobile/search01_m.png";
import heart02 from "../icon/mobile/heart02_m.png";
import feedback from "../icon/mobile/feedback_p.png";
import cart02 from "../icon/mobile/cart02_m.png";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

const divStyle = {
	fontFamily: "serif",
	letterSpacing: "1px",
	fontWeight: "400"
	//fontStyle: "oblique",
};

const feedbackStyle = {
	textAlign: "-webkit-right",
	display: "inline-block",
	position: "absolute",
	margin: "-7% 0 0 auto"
};

class top_Bar extends React.Component {
	render() {
		return (
			<div>
				<Grid container spacing={0}>
					<Grid item xs={12} sm={12}>
						<div className="TopIcon">
							<Grid item xs={11} sm={11}>
								<div id="logo">
									<img
										alt="logo"
										src={Logo}
										border="0"
										height="45%"
										width="45%"
									/>
								</div>
							</Grid>
							<Grid item xs={1} sm={1}>
								<div id="cart02" >
									<img
										alt="cart02"
										src={cart02}
										border="0"
										height="100%"
										width="100%"
									/>
								</div>
							</Grid>
						</div>
					</Grid>
					<Grid item xs={12} sm={12}>
						<Grid
							container
							spacing={0}
							direction="row"
							alignItems="center"
							justify="center"
						></Grid>
					</Grid>
					<Grid item xs={12} sm={12}>
						<div className="TopBar" style={divStyle}>
							<div
								onClick={() => {
									this.props.history.push("/productors");
								}}
							>
								分類
							</div>
							<div className="withGroup">
								<span>揪團跟團</span>
							</div>
							<div>會員中心</div>
						</div>
					</Grid>
				</Grid>
			</div>
		);
	}
}

top_Bar.propTypes = {
	history: PropTypes.object
};

export default withRouter(top_Bar);

/*
							<div id="search">
								<img
									alt="searcher"
									src={Search}
									border="0"
									height="67%"
									width="67%"
								/>
							</div>
							<div id="heart02">
								<img
									alt="heart02"
									src={heart02}
									border="0"
									height="67%"
									width="67%"
								/>
							</div>
*/
