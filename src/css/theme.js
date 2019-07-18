import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
	
	typography:{
		fontFamily: " serif, \"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
		body1: {
			fontWeight: 500,
			fontStyle: "italic",
		},
	},
	palette: {
		primary: {
			main: "#556cd6",
		},
		error: {
			main: red.A400,
		},
		background: {
			default: "#fff",
		},
	},
});

export default theme;
