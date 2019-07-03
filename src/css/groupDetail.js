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
};

export const grid_img = {
	margin: "10px",
};

export const text = (margin) => ({
	margin: margin,
	color: "#212121",
	border: 0,
	height: "100%",
	width: "100%",
	fontSize: "28px",
	fontFamily: "serif",
	letterSpacing: "5px"
});

export const body1 = (margin, color, fontSize, ) => ({
	margin: margin || null,
	color: color || null,
	fontFamily: "serif",
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
	fontFamily: "serif",
	fontWeight: "300",
	fontStyle: "oblique",
	letterSpacing: "6px",

};

export const text3 = {
	//margin: "-5px auto",
	color: "#212121",
	border: 0,
	width: "fit-content",
	height: "100%",
	fontSize: "23px",
	fontFamily: "serif",
	fontWeight: "300",
	fontStyle: "oblique",
	letterSpacing: "4px",

};

export const text4 = {
	marginTop: "50px",
	color: "#212121",
	border: 0,
	width: "fit-content",
	height: "100%",
	fontSize: "20px",
	fontFamily: "serif",
	fontWeight: "300",
	fontStyle: "oblique",
	letterSpacing: "4px",

};

export const buttonTest = (check) => ({
	background: check?"rgb(50, 82, 234)":"white",
	border: "solid",
	borderWidth: "thin",
});

export const spanTest = (check) => ({
	color: check?"white":"#556cd6",
});
