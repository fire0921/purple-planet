import { connect } from "react-redux";
import Login from "../../components/login.js";
import { LoginAction } from "../../actions/LoginAction";
import { LoginBtnAction } from "../../actions/LoginAction";

export default connect(
	(state) => ({
		__account: state.getIn(["LoginReducers", "__account"]),
	}),
	(dispatch) => ({
		onHandleChange: (index) => (
			dispatch(LoginAction(index))
		),
		onHandleSubmit: (browserHistory, phone) => (
			dispatch(LoginBtnAction({ browserHistory:browserHistory, phone:phone }))
		)
	})
)(Login);

