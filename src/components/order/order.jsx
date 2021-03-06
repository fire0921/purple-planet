import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as Css from "../../css/Order.js";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PayWay from "./payWayRadioButtons.jsx";
import Tables from "./table.jsx";
import Addressee from "./addressee.jsx";
//import FBLoginContainers from "../../containers/FBLoginContainers";
//import Fab from "@material-ui/core/Fab";
//import Icon from "@material-ui/core/Icon";
//import IconButton from "@material-ui/core/IconButton";
//import AddIcon from "@material-ui/icons/Add";

const fakeData = [
	{ name: "黑糖老薑", price: 190 },
	{ name: "黑糖紅棗", price: 190 },
	{ name: "黑糖四合一", price: 190 },
	{ name: "黑糖蔓越莓", price: 190 },
	{ name: "黑糖玫瑰", price: 190 },
	{ name: "黑糖金桔", price: 180 },
	{ name: "黑糖四物", price: 190 },
	{ name: "黑糖綜合", price: 190 }
];

const rows = [
	createData("1", "林XX", "0989355234", "台北市信義區永吉路172巷100號10樓"),
	createData("2", "呂XX", "0989352341", "台北市信義區永吉路172巷100號11樓")
];

function createData(id, name, phone, address) {
	return { id, name, phone, address };
}

function countItemSum(obj) {
	return Object.keys(obj).reduce((sum, key) => sum + obj[key].count || 0, 0);
}

function totalMoneySum(obj) {
	return Object.keys(obj).reduce(
		(sum, key) => sum + obj[key].count * obj[key].price || 0,
		0
	);
}

function Form(props) {
	return (
		<div>
			<Grid container spacing={0}>
				<Grid item xs={12} style={Css.gridCarTitle}>
					<Typography variant="h5" component="p">
						購物車
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={0} style={Css.gridFormContainer}>
						<Grid item xs={12}>
							<Typography variant="h6" component="p">
								黑糖風味飲品{" "}
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Grid container spacing={0} style={Css.gridFormHeaderName}>
								<Grid item xs={6}>
									<Typography variant="h6" component="p">
										D0001{" "}
									</Typography>
								</Grid>
								<Grid item xs={4} style={Css.paddingL("5%")}>
									<Typography variant="h6" component="p">
										數量
									</Typography>
								</Grid>
								<Grid item xs={2} style={Css.paddingR("5%")}>
									<Typography variant="h6" component="p">
										金額
									</Typography>
								</Grid>
								<Grid item xs={12} style={Css.tableBorder}>
									<Tables {...props} />
								</Grid>
								<Grid
									item
									xs={6}
									style={Object.assign(
										{},
										Css.tableTextCount,
										Css.paddingT("2%")
									)}
								>
									小計
								</Grid>
								<Grid
									item
									xs={4}
									style={Object.assign(
										{},
										Css.tableTextCount,
										Css.paddingL("8%"),
										Css.paddingT("2%")
									)}
								>
									{props.count}
								</Grid>
								<Grid
									item
									xs={1}
									style={Object.assign(
										{},
										Css.tableTextCountLong(props.total.toString()),
										Css.paddingT("2%"),
										Css.paddingL("3%")
									)}
								>
									{"$" + props.total.toString()}
								</Grid>
								<Grid item xs={12} style={Css.paddingT("1%")}>
									<Typography variant="h6" component="p" style={Css.notice}>
										達團購量以團購價計算 並且免運
									</Typography>
								</Grid>
								<Grid item xs={12} style={Css.paddingT("3%")}>
									<Typography variant="h5" component="p" style={Css.payWay}>
										付款方式<label style={Css.payWayLabel}>·</label>二選一
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<PayWay {...props} />
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					{!props.FBisAuthorized && !props.isAuthorized ? (
						// use line login
						<Addressee {...props} />
					) : (
						<Addressee {...props} />
					)}
				</Grid>
			</Grid>
		</div>
	);
}

class Order extends React.Component {
	constructor(props) {
		super(props);
		this.onHandleRemove = this.onHandleRemove.bind(this);
		this.updatePayWay = this.updatePayWay.bind(this);
		this.onHandleChange = this.onHandleChange.bind(this);
		this.onHandleAdd = this.onHandleAdd.bind(this);
		this.createNewItem = this.createNewItem.bind(this);
		this.handleRequestSort = this.handleRequestSort.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleSelectAllClick = this.handleSelectAllClick.bind(this);
		this.handleChangePage = this.handleChangePage.bind(this);
		this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
		this.isSelected = this.isSelected.bind(this);
		this.handleClickOpen = this.handleClickOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleDialogChange = this.handleDialogChange.bind(this);
		this.handleDialogSubmit = this.handleDialogSubmit.bind(this);
		this.handleEditOpen = this.handleEditOpen.bind(this);
		this.handleEditSubmit = this.handleEditSubmit.bind(this);

		this.state = {
			items: {},
			count: 0,
			total: 0,
			payWay: "0",
			order: "asc",
			orderBy: "name",
			selected: [],
			editItem: {},
			page: 0,
			rowsPerPage: 5,
			checkOpen: false,
			rows: rows,
			newAddress: {},
			dialogType: ""
		};
	}

	handleEditSubmit() {
		const updateItem = this.state.newAddress;

		this.setState(prevState => ({
			rows: prevState.rows.map(el => {
				if (el.id === this.state.selected[0]) {
					return {
						...el,
						name: updateItem.name,
						phone: updateItem.phone,
						address: updateItem.address
					};
				} else {
					return el;
				}
			}),
			newAddress: {},
			checkOpen: false
		}));
	}

	handleClickOpen() {
		this.setState({ checkOpen: true, dialogType: "add" });
	}

	handleEditOpen() {
		const editItems = [];
		if (this.state.selected.length > 0) {
			this.state.rows.forEach(el => {
				if (el.id === this.state.selected[0]) {
					editItems.push(el);
				}
			});
			this.setState({
				newAddress: editItems[0],
				checkOpen: true,
				dialogType: "edit",
				editItem: editItems[0]
			});
		}
	}

	handleClose() {
		this.setState({ checkOpen: false });
	}

	handleDialogChange(name, event) {
		event.persist();
		this.setState(() => ({
			newAddress: {
				...this.state.newAddress,
				[name]: event.target.value
			}
		}));
	}

	handleDialogSubmit() {
		this.setState({
			rows: this.state.rows.concat([
				{
					id: this.state.newAddress["name"] + new Date().getTime().toString(),
					name: this.state.newAddress["name"],
					phone: this.state.newAddress["phone"],
					address: this.state.newAddress["address"]
				}
			])
		});
		this.setState({
			newAddress: {},
			checkOpen: false
		});
	}

	isSelected(name) {
		return this.state.selected.indexOf(name) !== -1;
	}

	handleRequestSort(event, property) {
		const isDesc =
			this.state.orderBy === property && this.state.order === "desc";
		this.setState({ order: isDesc ? "asc" : "desc" });
		this.setState({ orderBy: property });
	}

	handleSelectAllClick(event) {
		event.persist();
		if (event.target.checked) {
			const newSelecteds = rows.map(n => n.name);
			this.setState({ selected: newSelecteds });
			return;
		}
		this.setState({ selected: [] });
	}

	handleClick(event, name) {
		const selectedIndex = this.state.selected.indexOf(name);
		let newSelected = [];

		if (selectedIndex === -1) {
			//newSelected = newSelected.concat(selected, name);
			newSelected = newSelected.concat(name);
		} else if (selectedIndex === 0) {
			//newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === this.state.selected.length - 1) {
			newSelected = newSelected.concat(this.state.selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				this.state.selected.slice(0, selectedIndex),
				this.state.selected.slice(selectedIndex + 1)
			);
		}

		this.setState({ selected: newSelected });
	}

	handleChangePage(event, newPage) {
		event.persist();
		this.setState(() => ({
			...this.state,
			page: newPage
		}));
	}

	handleChangeRowsPerPage(event) {
		event.persist();
		this.setState({ rowsPerPage: event.target.value });
		this.setState({ page: 0 });
	}

	createNewItem({ name, price }) {
		this.setState(() => ({
			items: {
				...this.state.items,
				[name]: {
					...this.state.items[name],
					count: 0,
					price: price
				}
			}
		}));
	}

	onHandleAdd({ name, price }) {
		if (this.state.items[name] && this.state.items[name]["count"] >= 99) {
			alert("to much!!");
			return;
		}

		this.setState(() => ({
			items: {
				...this.state.items,
				[name]: {
					...this.state.items[name],
					count: !this.state.items[name]
						? 1
						: this.state.items[name]["count"] + 1,
					price: price
				}
			}
		}));
	}

	onHandleRemove({ name, price }) {
		if (this.state.items[name] && this.state.items[name]["count"] === 0) {
			return;
		}
		this.setState(() => ({
			items: {
				...this.state.items,
				[name]: {
					...this.state.items[name],
					count: !this.state.items[name]
						? 0
						: this.state.items[name]["count"] - 1,
					price: price
				}
			}
		}));
	}

	updatePayWay(event) {
		event.persist();
		this.setState({ payWay: event.target.value });
	}

	onHandleChange({ name, price }, event) {
		event.persist();
		const re = /\D/;
		const resultMatch = event.target.value.match(re);

		if (event.target.value >= 100) {
			alert("to much!!");
			return;
		} else if (event.target.value === "") {
			event.target.value = 0;
		} else if (resultMatch) {
			event.target.value = 0;
			alert("請輸入整數");
		}

		this.setState(() => ({
			items: {
				...this.state.items,
				[name]: {
					...this.state.items[name],
					count: parseInt(event.target.value),
					price: price
				}
			}
		}));
	}

	static getDerivedStateFromProps(props, state) {
		return {
			count: countItemSum(state.items),
			total: totalMoneySum(state.items)
		};
	}

	render() {
		return (
			<div>
				<Form
					fakeData={fakeData}
					isSelected={this.isSelected}
					handleClickOpen={this.handleClickOpen}
					handleClose={this.handleClose}
					handleClick={this.handleClick}
					handleRequestSort={this.handleRequestSort}
					handleSelectAllClick={this.handleSelectAllClick}
					handleChangePage={this.handleChangePage}
					handleChangeRowsPerPage={this.handleChangeRowsPerPage}
					onHandleChange={this.onHandleChange}
					onHandleAdd={this.onHandleAdd}
					updatePayWay={this.updatePayWay}
					onHandleRemove={this.onHandleRemove}
					handleDialogChange={this.handleDialogChange}
					handleDialogSubmit={this.handleDialogSubmit}
					handleEditOpen={this.handleEditOpen}
					handleEditSubmit={this.handleEditSubmit}
					{...this.state}
					{...this.props}
				/>
			</div>
		);
	}
}

Form.propTypes = {
	fakeData: PropTypes.array,
	count: PropTypes.number,
	total: PropTypes.number,
	FBisAuthorized: PropTypes.bool,
	isAuthorized: PropTypes.bool
};

const mapStateToProps = state => ({
	FBisAuthorized: state.getIn(["FBLoginReducers", "__token", "isAuthorized"]),
	isAuthorized: state.getIn(["LoginReducers", "isAuthorized"])
});

export default connect(mapStateToProps)(withRouter(Order));
