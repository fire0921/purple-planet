import { connect } from "react-redux";
import Login from "../../components/login.js";
import { LoginInfo } from "../../actions/LoginAction";
import { LoginBtnAction } from "../../actions/LoginAction";

export default connect(
	(state) => ({
		PhoneNumber: state.getIn(["LoginReducers", "PhoneNumber"]),
		Password: state.getIn(["LoginReducers", "Password"])
	}),
	(dispatch) => ({
		onHandleChange: (index) => (
			dispatch(LoginInfo(index))
		),
		onHandleSubmit: (browserHistory, phone, password) => {
			dispatch(LoginBtnAction(dispatch, browserHistory, phone, password));
		}
	})
)(Login);
