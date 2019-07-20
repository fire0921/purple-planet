import { connect } from "react-redux";
import FBLogin from "../../components/FBLogincomponent";
import { loginActionFb } from "../../actions/FBLoginAction";

export default connect(
	(state) => ({
		FBLogin: state.getIn(["FBLoginReducers", "__token"]),
	}),
	(dispatch) => ({
		responseFacebook: (payloads) => {
			if(payloads.result.status === "connected"){
				window.FB.api("/me", { fields: "name,email" }, function(res){ 

					dispatch(loginActionFb(dispatch, {
						userId: res.id,
						FBtoken: payloads.result.authResponse.accessToken,
						userName: res.name,
						browserHistory: payloads.browserHistory,
					}));
				});
			}else{
				alert("please Login again");
			}	
		}
	})
)(FBLogin);

