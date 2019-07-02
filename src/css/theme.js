import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
	fontFamily: [
		"-apple-system",
		"BlinkMacSystemFont",
		"\"Segoe UI\"",
		"Roboto",
		"\"Helvetica Neue\"",
		"Arial",
		"sans-serif",
		"\"Apple Color Emoji\"",
		"\"Segoe UI Emoji\"",
		"\"Segoe UI Symbol\"",
	].join(","),
	fontWeightMedium: 500,
	body1: {
		fontWeight: 500,
		fontStyle: "italic",
	},
	subtitle1: {
		fontSize: 12,
		fontStyle: "italic",
	},
	button: {
		fontStyle: "italic",
	},
	palette: {
		primary: {
			main: "#556cd6",
		},
		secondary: {
			main: "#19857b",
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
