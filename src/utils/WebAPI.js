import agent from "./agent";
import jwt from "jsonwebtoken";
import { __APIKEYS} from "../constants/models.js";
import { authComplete, authError } from "../actions/LoginAction";
import { authCompleteFb, authErrorFb } from "../actions/FBLoginAction";


export default {

	Login: (dispatch, browserHistory, PhoneNumber, Password) => {
		if(PhoneNumber === ""){
			alert("請輸入手機號碼!!!");
			dispatch(authError());
			return;
		}else if(PhoneNumber.length !== 10){
			alert("請輸入正確的手機號碼");
			dispatch(authError());
			return;
		}else if(PhoneNumber[0] !== "0" && PhoneNumber[1] !== "9"){
			alert("請輸入正確的手機號碼");
			dispatch(authError());
			return;
		}else if(Password === ""){
			alert("請輸入密碼!!!!");
			dispatch(authError());
			return;
		}

		let payloads = {
			phone:PhoneNumber,
			Password:Password,
		};

		let JWTtoken = jwt.sign(payloads, __APIKEYS, { expiresIn: "1 day" });
		
		agent.post("/login", {
			ctoken:JWTtoken,
		}).then((res) => {
			if(res.data.status === "No result!!"){
				alert("使用者名稱 or 密碼錯誤");
				dispatch(authError());
			}else{
				let d = new Date();
				d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
				const expires = "expires=" + d.toUTCString();
				document.cookie = "token=" + res.data.__token + "; " + expires;
				dispatch(authComplete(res.data.__token + "; " + expires));
				browserHistory.push("/group");
			}
		}).catch((error) => {
			console.log(error.message);
			dispatch(authError());
		});
	},
	checkUserAuth: (dispatch, { browserHistory, authTypes }) => {
		agent.get("/check/user/status").then((res) => {
			const status = res.data.status;
			const loginType = res.data.loginType;

			if(status === "success" && loginType === "FB"){
				window.FB.getLoginStatus(function(response){
					if(response.status === "connected"){
						const FBtoken = response.authResponse.accessToken;
						window.FB.api("/me", function(profile){
							dispatch(authCompleteFb({
								userId: profile.id,
								FBtoken: FBtoken,
								userName: profile.name,
							}));
						});
					}else{
						dispatch(authErrorFb());
					}
				});
			}else if(status === "success" && loginType === "origin"){
				dispatch(authComplete());
				//browserHistory.push("/group");
			}else if(authTypes === "authOrder"){
				dispatch(authError());
				dispatch(authErrorFb());
			}else{
				dispatch(authError());
				browserHistory.push("/login");
			}
		}).catch((error) => {
			console.log(error.message);
			dispatch(authError());
			//browserHistory.push("/login");
		});
	}
};
