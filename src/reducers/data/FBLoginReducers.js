import { handleActions } from "redux-actions";
import { TokenState } from "../../constants/models"; // eslint-disable-next-line
import { __FBLOGIN } from "../../constants/actionTypes";

const FBLoginReducers = handleActions({
	__FBLOGIN: (state, {payload}) => (
		state.updateIn([ "__token", "FBtoken" ], () => payload )
	)
}, TokenState);

export default FBLoginReducers;
