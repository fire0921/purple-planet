import React from "react";
import PropTypes from "prop-types";
import * as Css from "../css/Order.js";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
//import Button from "@material-ui/core/Button";
//import AddIcon from "@material-ui/icons/Add";
//import TextField from "@material-ui/core/TextField";


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
					<Grid item xs={4} style={ Css.tableTextCount }>
						{ e.name }
					</Grid>
					<Grid item xs={5} style={ Css.gridFormHeaderNameChild("-webkit-right") }>
						<button>-</button>
						<input type="number" value={props.test[e.name]} style={ Css.textCount } onChange={ (event) => props.onHandleChange(e, event)} />
						<button>+</button>
					</Grid>
					<Grid item xs={3} style={ Css.gridFormHeaderNameChild("-webkit-right") }>
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
								<Grid item xs={5} style={ Css.paddingL("10%")}>
									<Typography variant="h6" component="p" style={ Css.gridFormHeaderNameChild("-webkit-center") }>
										數量
									</Typography>
								</Grid>
								<Grid item xs={3}>
									<Typography variant="h6" component="p" style={ Css.gridFormHeaderNameChild("-webkit-right") }>
										金額
									</Typography>
								</Grid>
								<Grid item xs={12} style={ Css.tableBorder }>
									<Table { ...props }/>
								</Grid>
								<Grid item xs={4} style={ Object.assign({}, Css.tableTextCount, Css.paddingT("2%")) }>
									小計
								</Grid>
								<Grid item xs={5} style={ Object.assign({}, Css.tableTextCount, Css.gridFormHeaderNameChild("-webkit-center"), Css.paddingT("2%"), Css.paddingL("10%")) }>
									{ props.count }
								</Grid>
								<Grid item xs={3} style={  Object.assign({}, Css.tableTextCount, Css.gridFormHeaderNameChild("-webkit-right"), Css.paddingT("2%")) }>
									{	"$" + props.total.toString() }
								</Grid>
								<Grid item xs={12} style={ Css.paddingT("1%") }>
									<Typography variant="h6" component="p" style={ Css.notice }>
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
	constructor(props){
		super(props);
		this.onHandleChange = this.onHandleChange.bind(this);
		this.state={
			name: "Tim",
			age: 18,
			job: "",
			test:[],
			count:0,
			total:0,
		}
	}

	componentDidUpdate(){
		console.log(this.state);
	}

	onHandleChange({ name, price }, event){
		event.persist();
		if(event.target.value > 100){ 
			alert("to much!!");
			return;
		}else if(!event.target.value){
			return;
		}
		this.setState(() => ({
			[name]: event.target.value,
			count: this.state.count + parseInt(event.target.value),
			total: this.state.total + parseInt(event.target.value)*price,  
			test: this.state.test.concat({[name]: event.target.value}),
		}))
	}
	render(){
		return(
			<div><Form fakeData={ fakeData } onHandleChange={ this.onHandleChange }{...this.state}/></div>
		);
	}

};

Form.propTypes = {
	fakeData : PropTypes.array,
}

export default withRouter(Order);
