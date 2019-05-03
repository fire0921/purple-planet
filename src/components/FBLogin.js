import React from "react";
import "../css/index.css";
import Button from "@material-ui/core/Button";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import * as cssLogin from "../css/login_css.js";

const FBLogin = ({ responseFacebook }) => (
	<div align="center">
		<FacebookLogin
			appId="308963306466048"
			//autoLoad
			callback={ responseFacebook }
			cookie={false}
			xfbml={false}
			render={renderProps => (
				<Button variant="contained" style={ cssLogin.FbButtonCss } className="FBlogin" onClick={renderProps.onClick}>FB 登入</Button>
			)}
		/>
	</div>
);

/*
class FBLogin extends React.Component {
  render() {
	  return(
		  <div align="center">
			  <FacebookLogin
				  appId="308963306466048"
					callback={ this.props.responseFacebook }
					cookie={ false }
					xfbml={ false }
					render={renderProps => (
					  <Button variant="contained" style={ cssLogin.FbButtonCss } className="FBlogin" onClick={ renderProps.onClick }>FB 登入</Button>
					)}
		    />
		  </div>
		);
	}
}
*/

export default FBLogin;
