import { makeStyles, withStyles } from "@material-ui/core/styles";

export const useStylesReddit = makeStyles(theme => ({
	textFieldRoot: {
		maxHeight: "20px",
		maxWidth: "85%",
		height: "fit-content",
		width: "fit-contnet",
		border: "solid",
		borderWidth: "1px",
		display: "flex",
		//marginBottom: "10%",
		borderRadius: 5,
	},
	addButton: {
		//padding: "5px 1px 1px 10px",
		//position: "absolute",
		backgroundColor: "#e2e2e1",
		minWidth:"20px",
		maxHeight: "20px",
		lineHeight: "13px",
		paddingLeft: "10px",
		justifyContent: "flex-start",
		//marginLeft: "-9%",
		zIndex:100,
		border: "none",
		"&:hover": {
			backgroundColor:"#e2e2e1",
		},
		"& span.MuiButton-label":{
			fontSize:"120%",
		},
	},
	removeButton: {
		//padding: "5px 1px 1px 5px",
		//marginLeft: "2%",
		paddingRight: "10px",
		justifyContent: "flex-end",
		lineHeight: "0px",
		maxHeight: "20px",
		minWidth:"20px",
		backgroundColor: "#e2e2e1",
		//position: "absolute",
		border: "none",
		zIndex: 100,
		"&:hover": {
			backgroundColor:"#e2e2e1",
		},
		"& span.MuiButton-label":{
			fontSize:"190%",
		},
	},
	root: {
		border: "1px solid #e2e2e1",
		overflow: "hidden",
		borderRadius: 5,
		backgroundColor: "#fcfcfb",
		transition: theme.transitions.create(["border-color", "box-shadow"]),
		"&:hover": {
			backgroundColor: "#fff",
		},
	},
}));

export function CssTextField(component){
	const textField = withStyles(theme => ({
		root: {
			//border: "1px solid #e2e2e1",
			//height: "70%",
			//overflow: "hidden",
			border:"none",
			//borderRadius: 5,
			marginTop: 0,
			marginBottom: 0,
			backgroundColor: "#fcfcfb",
			transition: theme.transitions.create(["border-color", "box-shadow"]),
			"&:hover": {
				backgroundColor: "#fff",
			},
			"& input": {
				padding: "2px 7px 10.5px 7px",
				//paddingBottom: "2px",
				//width:"80%",
				//height:"100%",
				maxHeight: "20px",
				textAlign: "-webkit-center",
			},
			"& label": {
				fontSize: "20px",
			},
			"& label.Mui-focused": {
				color: "green",
			},
			"& label.MuiInputLabel-outlined.MuiInputLabel-marginDense":{
				transform: "translate(15%, 60%) scale(1)",
			},
			"& label.MuiInputLabel-outlined.MuiInputLabel-shrink":{
				transform: "translate(14px, -6px) scale(0.75)"
			},
			"& .MuiOutlinedInput-root": {
				"& fieldset": {
					border: "none",
					//borderColor: "#e0e0e0",
					//borderRadius: 5,
					//height:"100%",
				},
				"&.Mui-focused fieldset": {
					//border: "none",
					//borderColor: "green",
				},
			},
		},
	}));
	return textField(component);
}

export const gridCarTitle = {
	border:0,
	background: "#d1c4e9",
	marginTop: "2%",
	textAlign: "center",
	padding: "1%",
};

export const gridFormContainer = {
	margin: "2% 2% 2% 4%",
	padding: "1%",
	width: "-webkit-fill-available",
};

export const gridFormHeaderName = {
	display: "flex",
};

export const gridFormHeaderNameChild = (text) => ({
	textAlign: text,
});

export const textCount = {
	width: "40%",
	textAlign: "center",
	height: "68%",
	//borderTop: "solid",
	//borderBottom: "solid",
	//borderWidth: "thin",
};

export const tableTextCount = {
	fontSize:"120%",
	letterSpacing: "2px"
};

export const tableTextCountLong = (el) =>({
	fontSize:"120%",
	marginLeft:(el.length>3)?"-8%":"",
	letterSpacing: "2px"
});

export const padding = (padd) => ({
	padding: padd,
});

export const paddingL = (padd) => ({
	paddingLeft: padd,
});

export const paddingR = (padd) => ({
	paddingRight: padd,
});

export const paddingT = (padd) => ({
	paddingTop: padd,
});

export const fontSize = (size) => ({
	fontSize: size,
});

export const fontStyle = (styles) => ({
	fontStyle: styles,
});

export const notice = {
	fontSize: "100%",
	textAlign: "-webkit-right",
	fontStyle: "oblique",
	color: "#f06292",

};

export const payWay = {
	textAlign: "-webkit-Left",
	fontStyle: "oblique",
	color: "#f06292",
	fontSize: "120%",

};

export const payWayLabel = {
	fontSize: "160%",
	verticalAlign: "sub",
};

export const tableBorder = { 
	borderBottom:"solid", 
	borderWidth:"thin", 
	paddingBottom:"1%",
	borderColor:"#424242",
};
