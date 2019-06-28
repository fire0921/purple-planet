import { combineReducers } from "redux-immutable";
import FBLoginReducers from "./data/FBLoginReducers.js";// import routes from "./routes";
import LoginReducers from "./data/LoginReducers.js";// import routes from "./routes";
import groupReducers from "./data/groupReducers.js";// import routes from "./routes";

const rootReducer = combineReducers({
	FBLoginReducers,
	LoginReducers,
	groupReducers,

});

export default rootReducer;
