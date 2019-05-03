import { handleActions } from "redux-actions";
import { TokenState } from "../../constants/models"; // eslint-disable-next-line
import { __LOGIN } from "../../constants/actionTypes"; // eslint-disable-next-line
import { __LOGINBTN } from "../../constants/actionTypes";
import { __APIKEYS} from "../../constants/models.js";
import axios from "axios";
import jwt from "jsonwebtoken";

const LoginReducers = handleActions({
	__LOGIN: (state, { payload }) => {
		if(payload.target.className === "phoneNumber") {
			return state.updateIn([ "__account", "PhoneNumber" ], () => payload.target.value );
		}else if(payload.target.className === "screat1"){
			return state.updateIn([ "__account", "Password" ], () => payload.target.value );
		}else if(payload.target.className === "screat2"){
			return state.updateIn([ "__account", "Password2" ], () => payload.target.value );
		}
	},
	__LOGINBTN: ( state, { payload }) => {
		let PhoneNumber = state.getIn(["__account","PhoneNumber"]);
		let Password = state.getIn(["__account","Password"]);
		let payloads = {
			phone:PhoneNumber,
			Password:Password,
		};
		let JWTtoken = jwt.sign(payloads, __APIKEYS, { expiresIn: "1 day" });

		if(PhoneNumber === ""){
			alert("請輸入手機號碼!!!");
			return state;
		}else if(PhoneNumber.length !== 10){
			alert("請輸入正確的手機號碼");
			return state;
		}else if(PhoneNumber[0] !== "0" && PhoneNumber[1] !== "9"){
			alert("請輸入正確的手機號碼");
			return state;
		}else if(Password === ""){
			alert("請輸入密碼!!!!");
			return state;
		}
		axios.post("http://localhost:8080/login",{
			ctoken:JWTtoken,
		}).then((res) => {
			if(res.data.status === "No result!!"){
				alert("使用者名稱 or 密碼錯誤");
			}else{
				sessionStorage.setItem("__token", res.data.__token);
				payload.browserHistory.push("/group");
			}
		}).catch((error) => {
			console.log(error.message);
			return state;
		});
		return state;
	}
}, TokenState);

export default LoginReducers;
