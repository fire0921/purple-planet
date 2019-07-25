import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from "@material-ui/icons/Create";
import Addbox from "@material-ui/icons/AddBox";
import * as Css from "../../css/Order.js";
import MuiDialog from "@material-ui/core/Dialog";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

function desc(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function stableSort(array, cmp) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = cmp(a[0], b[0]);
		if (order !== 0) return order;
		return a[1] - b[1];
	});
	return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
	return order === "desc" ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headRows = [
	{ id: "name", numeric: false, disablePadding: false, label: "收件人" },
];

function EnhancedTableHead(props) {
	const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
	const createSortHandler = property => event => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox">
					<Checkbox
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={numSelected === 1}
						onChange={onSelectAllClick}
						disabled={true}
						inputProps={{ "aria-label": "Select all desserts" }}
					/>
				</TableCell>
				{headRows.map(row => (
					<TableCell
						key={row.id}
						align={row.numeric ? "right" : "left"}
						padding={row.disablePadding ? "none" : "default"}
						sortDirection={orderBy === row.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === row.id}
							direction={order}
							onClick={createSortHandler(row.id)}
						>
							<Typography 
								variant="h5"
								id="tableTitle"
								component="p" style={{ 
									textAlign: "-webkit-Left", 
									fontStyle: "oblique",
									fontSize: "140%",
								}}>
								{row.label}
							</Typography>
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

const Dialog = withStyles(() => ({
	root:{
		"& .MuiDialog-container.MuiDialog-scrollPaper":{
			"& .MuiPaper-root.MuiPaper-elevation24.MuiDialog-paper.MuiDialog-paperScrollPaper.MuiDialog-paperWidthSm.MuiPaper-rounded":{
				borderRadius: "30px",
				"& .MuiDialogTitle-root":{
					padding: "16px 24px 1px",
					"& h6 > p":{
						fontSize: "130%",
						color: "rgb(59, 75, 149)",
						fontStyle: "oblique",
						fontWeight: 600,
						textAlign: "-webkit-center",
						marginBottom: "0px",
					}
				}
			},
		},
	},
}))(MuiDialog);

const DialogContent = withStyles(() => ({
	root:{
		padding: "1px 24px 8px 24px",
		display: "grid",
	}
}))(MuiDialogContent);

const DialogActions = withStyles(() => ({
	root:{
		padding: "8px 8px 15px 8px",
		justifyContent: "space-around",
	}
}))(MuiDialogActions);

function FormDialog(props) {
	console.log(props);
	return (
		<div>
			<Dialog open={props.checkOpen} onClose={props.handleClose} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">
					<DialogContentText>{ (props.dialogType==="edit")?"修改收件人":"新增收件人" }</DialogContentText>
				</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Name"
						type="name"
						inputProps={{ 
							onChange: (event) => props.handleDialogChange("name", event),
							defaultValue: props.newAddress["name"],
						}}
						fullWidth
					/>
					<TextField
						margin="dense"
						id="Email"
						label="Phone"
						type="phone"
						inputProps={{ 
							onChange: (event) => props.handleDialogChange("phone", event),
							defaultValue: props.newAddress["phone"],
						}}
						fullWidth
					/>
					<TextField
						margin="dense"
						id="Address"
						label="Address"
						type="address"
						inputProps={{ 
							onChange: (event) => props.handleDialogChange("address", event),
							defaultValue: props.newAddress["address"],
						}}
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={ props.handleClose } color="primary">
            Cancel
					</Button>
					<Button onClick={ (props.dialogType === "edit")?props.handleEditSubmit:props.handleDialogSubmit } color="primary">
            Subscribe
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

const useToolbarStyles = makeStyles(theme => ({
	root: {
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(1),
	},
	highlight:
		theme.palette.type === "light" ? {
			color: theme.palette.secondary.main,
			backgroundColor: lighten(theme.palette.secondary.light, 0.85),
		}:{
			color: theme.palette.text.primary,
			backgroundColor: theme.palette.secondary.dark,
		},
	spacer: {
		flex: "1 1 100%",
	},
	actions: {
		color: theme.palette.text.secondary,
	},
	title: {
		flex: "0 0 auto",
	},
}));

const EnhancedTableToolbar = props => {
	const classes = useToolbarStyles();
	const { numSelected, handleClickOpen, handleEditOpen } = props;
	//console.log(clsx("foo", ["bar" && 1, {["baz"]:true}, ["hello", ["world"]]], "cya"));
	return (
		<Toolbar
			className={clsx(classes.root, {
				[classes.highlight]: numSelected > 0,
			})}
		>
			<div className={classes.title}>
				{numSelected > 0 ? (
					<Typography color="inherit" variant="subtitle1">
						{numSelected} selected
					</Typography>
				) : (
					<Typography variant="h5" id="tableTitle" component="p" style={ Css.payWay }>
							選擇收件人
					</Typography>
				)}
			</div>
			<div className={classes.spacer} />
			<div className={classes.actions}>
				{numSelected > 0 ? (
					<Tooltip title="Edit">
						<IconButton aria-label="Edit" onClick={ handleEditOpen }>
							<EditIcon />
						</IconButton>
					</Tooltip>
				) : (
					<Tooltip title="Add">
						<IconButton aria-label="Add" onClick={ handleClickOpen }>
							<Addbox />
						</IconButton>
					</Tooltip>
				)}
			</div>
			<FormDialog {...props}/>
		</Toolbar>
	);
};



const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		marginTop: theme.spacing(1),
	},
	paper: {
		width: "100%",
		marginBottom: theme.spacing(2),
		border: "solid 1px #d1c4e9",
	},
	table: {
		//minWidth: 750,
	},
	tableWrapper: {
		overflowX: "auto",
	},
}));



export default function EnhancedTable(props) {
	const classes = useStyles();
	const emptyRows = props.rowsPerPage - Math.min(props.rowsPerPage, props.rows.length - props.page * props.rowsPerPage);

	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<EnhancedTableToolbar numSelected={props.selected.length}{...props}/>
				<div className={classes.tableWrapper}>
					<Table
						className={classes.table}
						aria-labelledby="tableTitle"
						size="small"
					>
						<EnhancedTableHead
							numSelected={props.selected.length}
							order={props.order}
							orderBy={props.orderBy}
							onSelectAllClick={props.handleSelectAllClick}
							onRequestSort={props.handleRequestSort}
							rowCount={props.rows.length}
						/>
						<TableBody>
							{stableSort(props.rows, getSorting(props.order, props.orderBy))
								.slice(props.page * props.rowsPerPage, props.page * props.rowsPerPage + props.rowsPerPage)
								.map((row, index) => {
									const isItemSelected = props.isSelected(row.id);
									const labelId = `enhanced-table-checkbox-${index}`;

									return (
										<TableRow
											hover
											onClick={event => props.handleClick(event, row.id)}
											role="checkbox"
											aria-checked={isItemSelected}
											tabIndex={-1}
											key={row.name + row.id}
											selected={isItemSelected}
											style={{ maxWidth:"20px"}}
										>
											<TableCell padding="checkbox">
												<Checkbox
													checked={isItemSelected}
													inputProps={{ "aria-labelledby": labelId }}
												/>
											</TableCell>
											<TableCell component="th" id={labelId} scope="row" padding="default">
												{row.name}<br />
												{row.phone}<br />
												{row.address}
											</TableCell>
										</TableRow>
									);
								})}
							{emptyRows > 0 && (
								<TableRow style={{ height: 49 * emptyRows }}>
									<TableCell colSpan={6} />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</div>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					labelRowsPerPage="Rows"
					count={props.rows.length}
					rowsPerPage={props.rowsPerPage}
					page={props.page}
					backIconButtonProps={{
						"aria-label": "Previous Page",
					}}
					nextIconButtonProps={{
						"aria-label": "Next Page",
					}}
					onChangePage={props.handleChangePage}
					onChangeRowsPerPage={props.handleChangeRowsPerPage}
				/>
			</Paper>
		</div>
	);
}

EnhancedTable.propTypes = {
	page: PropTypes.number,
	rowsPerPage: PropTypes.number,
	rows: PropTypes.array,
	selected: PropTypes.array,
	orderBy: PropTypes.string,
	order: PropTypes.string,
	handleSelectAllClick: PropTypes.func,
	handleChangePage: PropTypes.func,
	handleChangeRowsPerPage: PropTypes.func,
	handleRequestSort: PropTypes.func,
	handleClick: PropTypes.func,
	isSelected: PropTypes.func,
};

EnhancedTableHead.propTypes = {
	numSelected: PropTypes.number.isRequired,
	onRequestSort: PropTypes.func.isRequired,
	onSelectAllClick: PropTypes.func.isRequired,
	order: PropTypes.string.isRequired,
	orderBy: PropTypes.string.isRequired,
	rowCount: PropTypes.number.isRequired,
};

EnhancedTableToolbar.propTypes = {
	numSelected: PropTypes.number.isRequired,
	handleClickOpen: PropTypes.func,
	handleEditOpen: PropTypes.func,
};

FormDialog.propTypes = {
	handleClickOpen: PropTypes.func,
	handleClose: PropTypes.func,
	checkOpen: PropTypes.bool,
	handleDialogChange: PropTypes.func,
	newAddress: PropTypes.object,
	handleDialogSubmit: PropTypes.func,
	dialogType: PropTypes.string,
	handleEditSubmit: PropTypes.func,
};