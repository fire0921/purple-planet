import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
//import FormLabel from "@material-ui/core/FormLabel";
//import FormHelperText from "@material-ui/core/FormHelperText";

const CustomerRadio = withStyles({
	root: {
		"&$checked": {
			color: "#a800f5"
		}
	},
	checked: {}
})(props => <Radio color="default" {...props} />);

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(1),
		border: "1.5px solid #d1c4e9",
		borderRadius: 15
	},
	formControl: {
		marginLeft: theme.spacing(1)
	},
	group: {
		display: "flex",
		flexWrap: "wrap",
		flexDirection: "row",
		margin: theme.spacing(0, 0)
	}
}));

export default function PayWay(props) {
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
					<FormControlLabel
						value="0"
						control={<CustomerRadio />}
						label="轉帳"
					/>
					<FormControlLabel
						value="1"
						control={<CustomerRadio />}
						label="貨到付款"
					/>
				</RadioGroup>
			</FormControl>
		</div>
	);
}

PayWay.propTypes = {
	payWay: PropTypes.string,
	updatePayWay: PropTypes.func
};
