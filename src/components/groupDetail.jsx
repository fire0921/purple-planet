import React from "react";
import PropTypes from "prop-types";
import * as Css from "../css/groupDetail.js";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
//import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

//fake data
const requireContext = require.context("../icon/drink01",true, /^\.\/.*\.jpg$/);
const projectImgs = requireContext.keys().map(requireContext);
const contentText = "每包15顆\n單塊包裝\t沖泡衛生方便\n黑糖含有益人體礦物質，\n與各式食材搭配，養身又健康";

function RenderText(props){
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

function RenderProductImg(props){
	const arrayImg = props.projectImgs.map((e, index) => {
		return(
			<Grid item xs={12} key={ e }>
				<div>
					<img alt={ index } src={ e } style={ Css.img } />
				</div>
			</Grid>
		)
	})

	return (
		<div>
			{ arrayImg }
		</div>
	)
}

function GroupedButtons(props) {
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} md={6}>
				<Grid container spacing={1} direction="column" alignItems="center">
					<Grid item>
						<ButtonGroup color="primary" aria-label="Outlined primary button group">
							<Button key="1" style={ Css.buttonTest(false) }>老薑</Button>
							<Button key="2" style={ Css.buttonTest(false) }>紅棗</Button>
							<Button key="3" style={ Css.buttonTest(false) }>四合一</Button>
							<Button key="4" style={ Css.buttonTest(false) }>玫瑰</Button>
						</ButtonGroup>
					</Grid>
					<Grid item>
						<ButtonGroup color="primary">
							<Button value="5" style={ Css.buttonTest(false) }>蔓越梅</Button>
							<Button value="6" style={ Css.buttonTest(false) }>金桔</Button>
							<Button value="7" style={ Css.buttonTest(false) }>四物</Button>
							<Button value="8" style={ Css.buttonTest(false) }>綜合</Button>
						</ButtonGroup>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

class GroupDetail extends React.Component {
	render(){
		console.log(this.props);
		return (
			<div style={ Css.root }>
				<Grid container spacing={0}>
					<Grid item xs={12} style={ Css.grid_img }>
						<img alt="test" src={ projectImgs[0] } style={ Css.img } />
					</Grid>
					<Grid item xs={12} style={ Css.grid }>
						<Typography variant="h5" component="h1" style={ Css.text("1px 0 0 0") }>
							黑糖風味飲品{" "}
						</Typography>
					</Grid>
					<Grid item xs={12} style={ Css.grid }>
						<Typography variant="h5" component="h1" style={ Css.text("auto") }>
							D0001
						</Typography>
					</Grid>
					<Grid item xs={12} style={ Css.gridOriginPrice }>
						<Typography variant="h5" component="p" style={ Css.text2 }>
							原價{" "}<span style={{ textDecoration: "line-through" }}>$200</span>{" "}售價{" "}$190
						</Typography>
					</Grid>
					<Grid item xs={12} style={ Css.gridGroupPrice }>
						<Typography variant="h5" component="p" style={ Css.text3 }>
							成團價10包{" "}團購價$180
						</Typography>
						<Typography variant="subtitle1" component="p" style={ Css.body1("-5px auto", "#9e9e9e", "17px") }>
							個人購買達團購量，以團購價計算
						</Typography>
					</Grid>
					<Grid item xs={12} style={ Css.grid }>
						<RenderText contentText={ contentText } styles={ Css.text4 } />
					</Grid>
					<Grid item xs={12} style={ Css.grid }>
						<GroupedButtons { ...this.props }/>
					</Grid>
					<Grid item xs={12} style={ Css.grid }>
						<Grid item container spacing={1}>
							<Grid item xs={12}>
								<ButtonGroup variant="contained" color="primary" size="large" style={ Css.BuyButtonGroup }>
									<Button variant="contained" color="secondary" style={ Css.BuyButton() } onClick={ () => this.props.history.push("/group/groupDetail/" + this.props.match.params.id + "/order") }>立即購買</Button>
									<Button variant="contained" color="primary" style={ Css.BuyButton("10%", "6%", "rgb(230, 153, 185)", "15px") } >揪團去</Button>
								</ButtonGroup>
							</Grid>
							<Grid item xs={12} style={ Css.span }>
								<span>購買與否 皆可揪團</span>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<div className="Introduction" style={ Css.introductionDiv }>
							<Typography variant="subtitle1" component="p" style={ Css.introductionSpan }>商品介紹</Typography> 
						</div>
					</Grid>
					<Grid item xs={12}>
						<RenderProductImg projectImgs={ projectImgs.slice(1) }/>
					</Grid>
				</Grid>
			</div>
		);
	}
}

GroupDetail.propTypes = {
	match: PropTypes.object,
};

GroupedButtons.propTypes = {
	clickStatus: PropTypes.string,
	handleClick: PropTypes.func,
	handleChangeChk: PropTypes.func,
};

RenderText.propTypes = {
	contentText: PropTypes.string,
	styles: PropTypes.object,
};

export default withRouter(GroupDetail);
