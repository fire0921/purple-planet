import { handleActions } from "redux-actions";
import { TokenState } from "../../constants/models"; // eslint-disable-next-line
import { __loginFb, __authCompleteFb, __checkAuthFb, __authErrorFb } from "../../constants/actionTypes";

const FBLoginReducers = handleActions({
	__loginFb: (state) => (
		state.mergeDeep({
			"__token":{
				"isAuthorized":false,
			}
		})
	),
	__authCompleteFb: (state, { payload }) => (
		state.mergeDeep({
			"__token":{
				"userId": payload.userId,
				"FBtoken": payload.FBtoken,
				"userName": payload.userName,
				"isAuthorized": true,
			}
		})
	),
	__authErrorFb: (state) => (
		state.mergeDeep({
			"__token":{
				"FBtoken": "",
				"userId": "",
				"userName": "",
				"isAuthorized": false,
			}
		})
	),
	__checkAuthFb: (state) => (
		state.mergeDeep({
			"__token":{
				"isAuthorized":false,
			}
		})
	),
}, TokenState);

export default FBLoginReducers;
