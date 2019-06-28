import { handleActions } from "redux-actions";
import { groupState } from "../../constants/models"; // eslint-disable-next-line
import { __lowEnoughHeight, __getGroupData, __getDataComplete } from "../../constants/actionTypes";

const groupReducers = handleActions({
	__lowEnoughHeight: (state) => (
		state.mergeDeep({ 
			"scroll": {
				"loading": false,
			} 
		})
	),
	__getGroupData: (state, { payload }) => (
		state.mergeDeep({
			"scroll": {
				"page": payload.page,
				"loading": true,
				"complete": false,
			},
			"groupData": payload.data,
		})
	),
	__getDataComplete: (state) => (
		state.mergeDeep({
			"scroll": {
				"loading": false,
				"complete": true,
			}
		})
	)
}, groupState);

export default groupReducers;
