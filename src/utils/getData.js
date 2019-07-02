//import agent from "./agent";
import { 
	get_group_data,
	get_data_complete,
} from "../actions/GroupDetail";

const requireContext = require.context("../components/product",true, /^\.\/.*\.png$/);
const projectImgs = requireContext.keys().map(requireContext);

export default {

	getGroupData: (dispatch, payload) => {
		const number = projectImgs.length;
		const data = projectImgs.slice(payload.page-10, payload.page);
		if(payload.page <= number){
			setTimeout(() => {
				dispatch(get_group_data({ data:data, page: payload.page+10 }));
			}, 500);
		}else if(payload.page >= number && !payload.complete){
			setTimeout(() => {
				dispatch(get_group_data({ data:data, page: payload.page+10 }));
				dispatch(get_data_complete());
			},500);
		}else{
			dispatch(get_data_complete());
		}
	},
};


/*
 * getGroupData: (dispatch) => {
		agent.get("/check/user/status").then((res) => {
			if(res.data.status === "success"){
				dispatch(authComplete());
			}else{
				dispatch(authError());
			}
		}).catch((error) => {
			console.log(error.message);
			dispatch(authError());
		});
	},
*/
