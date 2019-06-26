import { handleActions } from "redux-actions";
import { TokenState } from "../../constants/models"; // eslint-disable-next-line
import { __FBLOGIN } from "../../constants/actionTypes";

const FBLoginReducers = handleActions({
	__FBLOGIN: (state) => (
		state.updateIn([ "__token", "FBtoken" ], () => "" )
	)
}, TokenState);

export default FBLoginReducers;
