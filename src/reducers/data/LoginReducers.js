import { handleActions } from "redux-actions";
import { UserState } from "../../constants/models"; // eslint-disable-next-line
import { __LOGININFO } from "../../constants/actionTypes"; // eslint-disable-next-line
import { __LOGINBTN } from "../../constants/actionTypes"; // eslint-disable-next-line
import { __authComplete } from "../../constants/actionTypes"; // eslint-disable-next-line
import { __authError } from "../../constants/actionTypes";

const LoginReducers = handleActions({
	__LOGININFO: (state, { payload }) => {
		if(payload.target.className === "phoneNumber") {
			return state.updateIn([ "PhoneNumber" ], () => payload.target.value );
		}else if(payload.target.className === "screat1"){
			return state.updateIn([ "Password" ], () => payload.target.value );
		}else if(payload.target.className === "screat2"){
			return state.updateIn([ "Password2" ], () => payload.target.value );
		}
	},

	__LOGINBTN: (state) => (
		state.merge({
			"isAuthorized":false,
		})
	),

	__authComplete: (state, { payload }) => (
		state.merge({
			"isAuthorized":true,
			"JWTtoken":payload,
		})
	),

	__authError:(state) => (
		state.merge({
			"PhoneNumber":"",
			"Password":"",
			"Password2":"",
			"isAuthorized":false,
		})
	),

	__checkAuth:(state) => (
		state.merge({
			"isAuthorized":true,
		})
	)

}, UserState);

export default LoginReducers;
