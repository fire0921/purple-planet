import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import Immutable from "immutable";
import rootReducer from "../reducers";

const initialState = Immutable.Map();

const configureStore = () => {
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(logger),
	);

	return store;
};

export default configureStore;
