import React from "react";
import "../css/index.css";
import Button from "@material-ui/core/Button";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import * as cssLogin from "../css/login_css.js";

const responseFacebook = (res) => {
		  console.log(res);
		}

function FBLogin(){
	return(
		<div align="center">
		  <FacebookLogin
		    appId="308963306466048"
		    autoLoad
		    callback={responseFacebook}
		    cookie={true}
		    xfbml={true}
		    render={renderProps => (
			    <Button variant="contained" style={ cssLogin.FbButtonCss } className="FBlogin" onClick={renderProps.onClick}>FB 登入</Button>
		    )}
		  />
		</div>
	)
}
export default FBLogin;
