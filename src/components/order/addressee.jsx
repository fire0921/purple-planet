import React from "react";
import PropTypes from "prop-types";
import * as Css from "../../css/Order.js";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AddresseeTable from "./adresseeTable.jsx";

export default function addressee(props) {
	return (
		<Grid item xs={12}>
			<Grid item xs={12} style={Css.gridCarTitle}>
				<Typography variant="h5" component="p">
					收件資料
				</Typography>
			</Grid>
			<Grid
				container
				spacing={1}
				style={{
					margin: "1% 2% 2% 4%",
					display: "flex",
					width: "-webkit-fill-available"
				}}
			>
				<Grid item xs={12}>
					<AddresseeTable {...props} />
				</Grid>
			</Grid>
		</Grid>
	);
}

addressee.propTypes = {
	FBisAuthorized: PropTypes.bool
};

/*
AddresseeOption.propTypes = {
	payWay: PropTypes.string,
	updatePayWay: PropTypes.func,
};
*/
