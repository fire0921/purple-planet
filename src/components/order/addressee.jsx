import React from "react";
import PropTypes from "prop-types";
import * as Css from "../../css/Order.js";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import AddresseeTable from "./adresseeTable.jsx";

const CustomerRadio = withStyles({
	root: {
		"&$checked": {
			color: "#a800f5",
		},
	},
	checked: {},
})(props => <Radio color="default" {...props} />);

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(1),
		border: "1.5px solid #d1c4e9",
		borderRadius: 15,
	},
	formControl: {
		marginLeft: theme.spacing(1),
	},
	group: {
		display: "flex",
		flexWrap: "wrap",
		flexDirection: "column",
		margin: theme.spacing(0, 0),
	},
}));

function AddresseeOption(props) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<FormControl component="fieldset" className={classes.formControl}>
				<RadioGroup
					aria-label="Gender"
					name="gender1"
					className={classes.group}
					value={props.payWay}
					onChange={props.updatePayWay}
				>
					<FormControlLabel value="3" control={<CustomerRadio />} label="test1" />
					<FormControlLabel value="4" control={<CustomerRadio />} label="test2" />

				</RadioGroup>
			</FormControl>
		</div>
	);
}

export default function addressee(props){
	return(
		<Grid item xs={12}>
			<Grid item xs={12} style={ Css.gridCarTitle }>
				<Typography variant="h5" component="p">
				收件資料
				</Typography>
			</Grid>
			<Grid container spacing={1} style={{ margin: "2% 2% 2% 4%", display: "flex", width: "-webkit-fill-available" }}>
				<Grid item xs={12}>
					<Typography variant="h5" component="p" style={ Css.payWay }>選擇收件人</Typography>
				</Grid>
				<Grid item xs={12}>
					<AddresseeOption {...props} />
					<AddresseeTable />
				</Grid>
			</Grid>
		</Grid>
	);
}

addressee.propTypes = {
	FBisAuthorized:PropTypes.bool,
};

AddresseeOption.propTypes = {
	payWay: PropTypes.string,
	updatePayWay: PropTypes.func,
};
