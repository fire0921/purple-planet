export const style = (i, j) => {
    j = j || "2%";
    return ({
        backgroundColor: "white",
        font: "inherit",
        border: "1px solid #aba4a4d1",
        padding: "10px",
        height: "10%",
        width: i,
        fontSize: "25px",
        marginLeft: "8%",
        marginTop: j,
        cursor: "pointer",
    });
};
export const styleForH1 = {
        textAlign: "center",
        frontSize: "40px",
};
export const stylePass = {
    display: "flex-raw",
};
export const ButtonCss = {
    marginBottom: "10px",
    marginLeft: "15px",
    height: "45px",
    width: "100px",
    fontSize: "25px",
    backgroundColor: "#f6dae6",
};
export const aligntCenter = {
    marginLeft: "35px",
    marginTop: "-10px",
    fontSize: "18px",
    color: "#AAAAAA",
    letterSpacing: "3px",
};
export const forgetPsw = (font,colors, left)=> {
    font = font || "";
    colors = colors || "";
    left= left || "";
    return({
        display: "flex",
        justifyContent: "space-around",
        marginLeft: left,
        marginTop: "10px",
        fontSize: font,
        color: colors,
        letterSpacing: "3px",
    });
};

export const label = {
    marginLeft: "-50px",
};
export const FbButtonCss = {
    position:"relative",
    marginTop:"10%",
    marginBottom:"10%",
    height: "45px",
    width: "200px",
    fontSize: "25px",
    backgroundColor: "#b7ddf2",
};
export const splitLine = {
    position:"relative",
    marginTop:"5%",
    textAlign:"center",
}
