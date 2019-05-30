const apiRouter = require("./router/index.js");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../build")));
app.use(bodyParser.json({
	limit: "55mb"
}));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use((req, res, next) => {
	res.append("Access-Control-Allow-Origin", ["*"]);
	res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
	res.append("Access-Control-Allow-Headers", "Content-Type");
	next();
});

app.get("/", (req,res) =>{
	res.sendFile("../build/index.html");
});
app.use("/api", apiRouter);

const server = app.listen(8080, () => {
	const host = server.address().address;
	const port = server.address().port;

	console.log("http://%s:%s", host, port);
});
