import { combineReducers } from "redux-immutable";
import FBLogin from "./data/FBLoginReducers";// import routes from "./routes";

const rootReducer = combineReducers({
  FBLogin,
});

export default rootReducer;
