import { connect } from "react-redux";
import Group from "../../components/group.jsx";
import { checkAuth } from "../../actions/LoginAction";

export default connect(
	(state) => ({
		isAuthorized: state.getIn(["LoginReducers", "isAuthorized"]),
	}),
	(dispatch) => ({
		checkUserAuth: () => (
			dispatch(checkAuth(dispatch))
		),
	})
)(Group);

