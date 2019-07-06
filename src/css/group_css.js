export const img1 = {
	margin: "5px",
};

export const price = {
	display: "flex",
	justifyContent: "space-between",
	fontStyle: "oblique",
	letterSpacing: "1px",
};

export const price2 = {
	display: "flex",
	flexWrap: "wrap",
	flexFlow: "column",
	fontStyle: "oblique",
	letterSpacing: "1px",
};

export const fontSizeFun = (e) => {
	return ({
		fontSize: e,
		fontStyle: "oblique",
		letterSpacing: "1px",
	});
};

export const salePrice = {
	whiteSpace:"nowrap",
	marginLeft: "12%",
	fontSize: "80%",
	color: "#666666",
};

export const groupPrice = {
	whiteSpace:"nowrap",
	marginLeft: "10px",
	fontSize: "80%",
	color: "#666666",
	fontStyle: "oblique",
	letterSpacing: "1px",
};

export const originPrice = {
	whiteSpace:"nowrap",
	textDecoration: "line-through",
	marginLeft: "10px",
	color: "#666666",
	fontSize: "80%",
	fontStyle: "oblique",
	letterSpacing: "1px",
};

export const Buy = (L, R) => ({
	whiteSpace:"nowrap",
	backgroundColor: "#f6dae6",
	fontStyle: "oblique",
	letterSpacing: "1px",
	//borderRadius: "50%",
	//width:"50px",
	//height: "50px",
	fontWeight: "bold",
	marginLeft: L,
	marginRight: R,
	marginTop: "5%",
	fontSize: "110%",
});

export const buyButton = {
	display:"flex",
	alignSelf:"center",
	paddingBottom: "1%",
	flexDirection: "row-reverse",
	width:"100%",
	fontStyle: "oblique",
	letterSpacing: "1px",
};

export const ulStyle = (e) => ({
	display: "flex",
	listStyle: "none",
	flexWrap: "nowrap",
	color: "#666666",
	paddingLeft: "0",
	margin: e,
	fontSize: "100%",
});

export const deleteLine = {
	whiteSpace:"nowrap",
	textDecoration: "line-through",
	marginLeft: "1%",
};

export const liStyle = (e) => ({
	whiteSpace:"nowrap",
	marginLeft: e,
});
