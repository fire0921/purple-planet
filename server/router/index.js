const login_api_controller = require("../controller/login.js");
const express = require("express");
const apiRouter = express.Router();


apiRouter.get("/", (req, res) => {
	res.send("good");
});

apiRouter.post("/login", login_api_controller.login_api_controller);

module.exports = apiRouter;
