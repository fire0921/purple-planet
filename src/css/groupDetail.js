export const img = {
	textAlign: "center",
	color: "rgba(0, 0, 0, 0.54)",
	border: "0",
	height: "100%",
	width: "100%",
};

export const root = {
	flexGrow: 1,
	display: "flex",
};

export const grid = {
	textAlign: "-webkit-center",
	margin: "2% 0 2% 0",
};

export const grid_img = {
	margin: "5px",
};

export const gridOriginPrice = {
	textAlign: "-webkit-center",
	height: "fit-content",
};

export const gridGroupPrice = {
	textAlign: "-webkit-center",
	margin: "0 0 2% 0",
};

export const text = (margin) => ({
	margin: margin,
	color: "#212121",
	border: 0,
	height: "100%",
	width: "100%",
	fontSize: "28px",
	letterSpacing: "5px",
	fontWeight: 600,
});

export const body1 = (margin, color, fontSize) => ({
	margin: margin || null,
	color: color || null,
	border: 0,
	fontSize: fontSize || null,
});

export const text2 = {
	//margin: "auto 50px",
	color: "#212121",
	border: 0,
	width: "fit-content",
	height: "100%",
	fontSize: "23px",
	borderBottom: "ridge",
	fontStyle: "oblique",
	fontWeight: 600,
	letterSpacing: "2px",
};

export const text3 = {
	//margin: "-5px auto",
	color: "#212121",
	border: 0,
	width: "fit-content",
	height: "100%",
	fontSize: "23px",
	fontStyle: "oblique",
	fontWeight: 600,
	letterSpacing: "1px",
};

export const text4 = {
	marginTop: "30px",
	color: "#212121",
	border: 0,
	width: "fit-content",
	height: "100%",
	fontSize: "20px",
	fontStyle: "oblique",
	letterSpacing: "1px",
};

export const buttonTest = (check) => ({
	background: check ? "rgb(50, 82, 234)" : "white",
	border: "solid",
	borderWidth: "thin",
	fontSize: "inherit",
});

export const spanTest = (check) => ({
	color: check ? "white" : "#556cd6",
});

export const BuyButtonGroup = {
	display: "flex",
	justifyContent: "center",
	boxShadow: "none",
	marginTop: "5%",
	background: "white",
};

export const BuyButton = (paddingL, Left, background, space) => ({
	width: "35%",
	marginLeft: Left ? Left : "none",
	background: background ? background : "#ffcdd2",
	border: "none",
	color: "#212121",
	fontSize: "130%",
	letterSpacing: space ? space : "6px",
	fontWeight: 600,
	paddingLeft: paddingL ? paddingL : "auto",
	//fontStyle: "oblique",
});

export const span = {
	display: "flex",
	flexDirection: "row-reverse",
	marginRight: "10%",
	color: "rgb(158, 158, 158)",
};

export const introductionSpan = {
	marginLeft: "5%",
	width: "fit-content",
	background: "#d1c4e9",
	color: "#673ab7",
	padding: "1% 2% 1% 2%",
	fontSize: "110%",
	fontWeight: 600,
};
export const introductionDiv = {
	padding: "0 2% auto",
	borderBottom: "solid",
	borderBottomWidth: "2px",
	borderColor: "#b39ddb",
	marginTop: "5%",
};
