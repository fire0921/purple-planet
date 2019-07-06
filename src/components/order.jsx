import React from "react";
//import PropTypes from "prop-types";
import * as Css from "../css/Order.js";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
//import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
//import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const fakeData = [
	{"name":"黑糖老薑", "price":190},
	{"name":"黑糖紅棗", "price":190},
	{"name":"黑糖四合一", "price":190},
	{"name":"黑糖蔓越莓", "price":190},
	{"name":"黑糖玫瑰", "price":190},
	{"name":"黑糖金桔", "price":190},
	{"name":"黑糖四物", "price":190},
	{"name":"黑糖綜合", "price":190}
]


function Table(props){
	console.log(props);
	const TableArray = props.fakeData.map((e, index) => {
		return(
			<Grid item xs={12} key={ e.name }>
				<Grid container spacing={0}>
					<Grid item xs={4} style={{ fontSize:"120%", letterSpacing: "2px"}}>
						{ e.name }
					</Grid>
					<Grid item xs={4} style={ Css.gridFormHeaderNameChild("-webkit-right") }>
						<button>-</button>
						<input type="text" value={0} style={ Css.textCount } />
						<button>+</button>
					</Grid>
					<Grid item xs={4} style={ Css.gridFormHeaderNameChild("-webkit-center") }>
						{ "$" + e.price }
					</Grid>
				</Grid>
			</Grid>
		);
	})

	return(
		<Grid container spacing={0}>
			<Grid item xs={12}>
				{ TableArray }
			</Grid>
		</Grid>
	);
}

function Form(props){
	console.log(props);
	return(
		<div>
			<Grid container spacing={0}>
				<Grid item xs={12} style={ Css.gridCarTitle }>
					<Typography variant="h5" component="p">
						購物車
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={0} style={ Css.gridFormContainer}>
						<Grid item xs={12}>
							<Typography variant="h6" component="p">
								黑糖風味飲品{" "}
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Grid container spacing={0} style={ Css.gridFormHeaderName }>
								<Grid item xs={4}>
									<Typography variant="h6" component="p">
										D0001{" "}
									</Typography>
								</Grid>
								<Grid item xs={4} style={{ paddingLeft:"5%" }}>
									<Typography variant="h6" component="p" style={ Css.gridFormHeaderNameChild("-webkit-center") }>
										數量
									</Typography>
								</Grid>
								<Grid item xs={4}>
									<Typography variant="h6" component="p" style={ Css.gridFormHeaderNameChild("-webkit-center") }>
										金額
									</Typography>
								</Grid>
								<Grid item xs={12} style={{ borderBottom:"solid", borderWidth:"thin", paddingBottom:"1%" }}>
									<Table fakeData={ props.fakeData } />
								</Grid>
								<Grid item xs={12}>
									<Typography variant="h6" component="p" style={{textAlign:"-webkit-center"}}>
										達團購量以團購價計算 並且免運
									</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

class Order extends React.Component {
	
	render(){
		return(
			<div><Form fakeData={ fakeData } /></div>
		);
	}

};


export default withRouter(Order);
