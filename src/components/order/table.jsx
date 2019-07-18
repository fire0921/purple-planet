import React from "react";
import PropTypes from "prop-types";
import * as Css from "../../css/Order.js";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const TextFields = Css.CssTextField(TextField);

function CssTextFields(props) {
	const classes = Css.useStylesReddit();
	const { onadd, onremove, singleitem, ...attributes } = props;

	return (
		<div className={ classes.textFieldRoot }>
			<Button className={ classes.removeButton } variant="outlined" onClick={() => onremove(singleitem) }>-</Button>
			<TextFields { ...attributes } />
			<Button className={ classes.addButton } variant="outlined" onClick={() => onadd(singleitem) }>+</Button>
		</div>
	);
}

export default function Table(props){
	const TableArray = props.fakeData.map((e) => {
		const product = props.items[e.name];

		return(
			<Grid item xs={12} key={ e.name }>
				<Grid container spacing={1}>
					<Grid item xs={5} style={ Css.tableTextCount }>
						{ e.name }
					</Grid>
					<Grid item xs={5} style={ Css.paddingR("2%")}>
						<Grid container spacing={1} justify="flex-start">
							<Grid item xs={11} style={ Css.gridFormHeaderNameChild("-webkit-center")}>
								<CssTextFields
									id="standard-name"
									//classes={ Css.useStylesReddit() }
									//label={ "$" + e.price }
									value={ (e.name in props.items && product["count"] !== 0)?product["count"] : 0 }
									onChange={ (event) => props.onHandleChange(e, event) }
									variant="outlined"
									margin="dense"
									onadd={ props.onHandleAdd }
									onremove={ props.onHandleRemove }
									singleitem={ e } 
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={2}>
						{ "$" + e.price }
					</Grid>
				</Grid>
			</Grid>
		);
	});

	return(
		<Grid container spacing={0}>
			<Grid item xs={12}>
				{ TableArray }
			</Grid>
		</Grid>
	);
}

Table.propTypes = {
	fakeData : PropTypes.array,
	items : PropTypes.object,
	onHandleChange: PropTypes.func,
	onHandleAdd: PropTypes.func,
	onHandleRemove: PropTypes.func,
};
