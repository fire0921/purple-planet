import React from "react";
import PropTypes from "prop-types";
import * as Css from "../css/groupDetail.js";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
//import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

//fake data
const requireContext = require.context("../components/product",true, /^\.\/.*\.png$/);
const projectImgs = requireContext.keys().map(requireContext);
const contentText = "每包15顆\n單塊包裝，沖泡衛生方便\n黑糖含有益人體礦物質，\n與各式食材搭配，養身又健康";

function RenderText(props){
	console.log(props);
	console.log(props.contentText);
	const arrayText = [];
	props.contentText.split("\n").forEach((e, index) => {
		arrayText.push(
			<p key={index} >{ e }</p>
		);
	});
	return(
		<div style={ props.styles }>{ arrayText }</div>
	);
}

class GroupDetail extends React.Component {

	render(){
		return (
			<div style={ Css.root }>
				<Grid container spacing={2}>
					<Grid item xs={12} style={ Css.grid_img }>
						<img alt="test" src={ projectImgs[0] } style={ Css.img } />
					</Grid>
					<Grid item xs={12} style={ Css.grid }>
						<Typography variant="h5" component="h1" style={ Css.text("12px 0 0 0") }>
							黑糖風味飲品{" "}
						</Typography>
					</Grid>
					<Grid item xs={12} style={ Css.grid }>
						<Typography variant="h5" component="h1" style={ Css.text("auto") }>
							D0001
						</Typography>
					</Grid>
					<Grid item xs={12} style={ Css.grid }>
						<Typography variant="h5" component="p" style={ Css.text2 }>
							原價{" "}<span style={{ textDecoration: "line-through" }}>$200</span>{" "}售價{" "}$190
						</Typography>
					</Grid>
					<Grid item xs={12} style={ Css.grid }>
						<Typography variant="h5" component="p" style={ Css.text3 }>
							成團價10包{" "}團購價$180
						</Typography>
						<Typography variant="subtitle1" component="p" style={ Css.body1("-5px auto", "#9e9e9e", "17px") }>
							個人購買達團購量，以團購價計算
						</Typography>
					</Grid>
					<Grid item xs={12} style={ Css.grid }>
						<RenderText contentText={ contentText } styles={ Css.text4 }/>
					</Grid>
				</Grid>
			</div>
		);
	}
}

GroupDetail.propTypes = {
	match: PropTypes.object,
};

RenderText.propTypes = {
	contentText: PropTypes.string,
	styles: PropTypes.object,
};

export default withRouter(GroupDetail);
