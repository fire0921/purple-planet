import { connect } from "react-redux";
import Group from "../../components/group.jsx";
import { low_enough_height, get_group_data } from "../../actions/GroupDetail";

export default connect(
	(state) => ({
		page: state.getIn(["groupReducers", "scroll", "page"]),
		loading: state.getIn(["groupReducers", "scroll", "loading"]),
		complete: state.getIn(["groupReducers", "scroll", "complete"]),
		group_data: state.getIn(["groupReducers", "groupData"]),
	}),
	(dispatch) => ({
		getGroupMoreData: (payload) => (
			dispatch(low_enough_height(dispatch, payload))
		),
		getGroupData: (payload) => (
			dispatch(get_group_data(payload))
		)
	})
)(Group);

