import { handleActions } from "redux-actions";
import { TokenState } from "../../constants/models";
import { __FBLOGIN } from "../../constants/actionTypes";

const FBLoginReducers = handleActions({
	__FBLOGIN: (state, {payload}) => (
		state.merge({ "__token": payload })
	)
}, TokenState);

export default FBLoginReducers;
