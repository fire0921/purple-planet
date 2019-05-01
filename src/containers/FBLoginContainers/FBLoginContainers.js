import { connect } from "react-redux";
import FBLogin from "../../components/FBLogin.js";
import { FBLoginAction } from "../../actions";

export default connect(
  (state) => ({
    FBLogin: state.getIn(["FBLogin", "__token"])
  }),
  (dispatch) => ({
    responseFacebook: (event) => {
			(() => {
				const token = event.accessToken;
			  console.log(token);
			})();
			return(
        dispatch(FBLoginAction({ FBtoken : event.accessToken }))
			)
		}
  })
)(FBLogin);

