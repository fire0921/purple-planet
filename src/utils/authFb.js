import { authCompleteFb, authErrorFb } from "../actions/FBLoginAction";
import agent from "./agent";

export default {

	login_fb_api: (dispatch, { FBtoken, userName, userId }) => {
		if(!FBtoken){
			dispatch(authErrorFb());
			return;
		}
		agent.post("/login/fb", {
			accessToken: FBtoken,
			userName: userName,
		}).then((res) => {
			if(res.data.status === "success"){
				dispatch(authCompleteFb({ FBtoken:FBtoken, userName:userName, userId:userId }));
			}else{
				dispatch(authErrorFb());
				//browserHistory.push("/login");
			}
		});
	},
	/*
	checkUserAuth: (dispatch, { browserHistory, authTypes }) => {
		agent.get("/check/user/status").then((res) => {
			if(res.data.status === "success"){
				dispatch(authComplete());
			}else if(authTypes === "authOrder"){
				dispatch(authError());
			}else{
				dispatch(authError());
				browserHistory.push("/login");
			}
		}).catch((error) => {
			console.log(error.message);
			dispatch(authError());
			browserHistory.push("/login");
		});
	}
	*/
};

