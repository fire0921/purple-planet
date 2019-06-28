import { connect } from "react-redux";
import FBLogin from "../../components/FBLogin.jsx";
import { FBLoginAction } from "../../actions/FBLoginAction";

export default connect(
	(state) => ({
		FBLogin: state.getIn(["FBLoginReducers", "__token"])
	}),
	(dispatch) => ({
		responseFacebook: (payloads) => {
			console.log({ payloads });
			if(payloads.result.status === "connected"){
				window.FB.api("/me",function(res){ 
					console.log(res); 
					const userName = res.name;
					//payloads.browserHistory.push("/group");
					return(
						dispatch(FBLoginAction(dispatch, {
							FBtoken: payloads.result.authResponse.accessToken,
							userName: userName,
						}))
					);
				});
			}else{
				alert("please Login again");
			}	
		}
	})
)(FBLogin);

