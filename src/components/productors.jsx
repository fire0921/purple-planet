import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import { withRouter } from "react-router-dom";
import img1 from "./product/氣功墊商品介紹1.jpg";
import img2 from "./product/氣功墊商品介紹2.jpg";
//import mp4 from "./product/影片1+2+3+4.mp4";
import Grid from "@material-ui/core/Grid";
import * as Css from "../css/groupDetail.js";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

class Player extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ReactPlayer
				url="https://anime1.me/8263"
				loop={true}
				controls={true}
				width={"100%"}
				height={"100%"}
				playing
			/>
		);
	}
}

class Productors extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Grid container spacing={0}>
				<Grid item xs={12} style={{ marginTop: "2%" }}>
					<Player />
				</Grid>
				<Grid item xs={12}>
					<img src={img1} style={{ width: "100%" }} />
				</Grid>
				<Grid item xs={12}>
					<img src={img2} style={{ width: "100%" }} />
				</Grid>
				<Grid item xs={12} style={Css.grid}>
					<Grid item container spacing={1}>
						<Grid item xs={12}>
							<ButtonGroup
								variant="contained"
								color="primary"
								size="large"
								style={Css.BuyButtonGroup}
							>
								<Button
									variant="contained"
									color="secondary"
									style={Css.BuyButton()}
									onClick={() =>
										this.props.history.push(
											"/group/groupDetail/" +
												this.props.match.params.id +
												"/order"
										)
									}
								>
									立即購買
								</Button>
								<Button
									variant="contained"
									color="primary"
									style={Css.BuyButton(
										"7%",
										"6%",
										"rgb(230, 153, 185)",
										"5px"
									)}
								>
									立即分享
								</Button>
							</ButtonGroup>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

Productors.propTypes = {
	match: PropTypes.object,
	history: PropTypes.object
};

export default withRouter(Productors);
