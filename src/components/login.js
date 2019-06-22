import React from "react";
import PropTypes from "prop-types";
import "../css/index.css";
import Button from "@material-ui/core/Button";
import * as cssLogin from "../css/login_css.js";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
	
	componentDidMount() {
		console.log("DidMount");
	}
	componentWillReceiveProps() {
		console.log("componentWillReceiveProps");
	}
	componentWillUpdate() {
		console.log("componentWillUpdate");
	}
	componentDidUpdate() {
		console.log("componentDidUpdate");	
	}
	render() {
		return (
			<div>
				<div>
					<h1 style={cssLogin.styleForH1}>會員登入 / 註冊</h1>
					<div className="Phone">
						<input className="phoneNumber" style={ cssLogin.style("80%") } type="text"  placeholder="請輸入手機號碼" value={ this.props.PhoneNumber } onChange={ (i) => this.props.onHandleChange(i) } />
					</div>
					<div className="Password" style={ cssLogin.stylePass }>
						<input className="screat1" style={ cssLogin.style("50%","10%") } type="password" value={ this.props.Password } placeholder="請輸入密碼" onChange={ (i) => this.props.onHandleChange(i) } />
						<Button variant="contained" style={ cssLogin.ButtonCss } className="login"  onClick={() => this.props.onHandleSubmit(this.props.history, this.props.PhoneNumber, this.props.Password)}>登入</Button>
					</div>
					<div style={ cssLogin.aligntCenter }>
						<p>(會員輸入密碼登入)</p>
					</div>
					<div className="Password" style={ cssLogin.stylePass }>
						<input className="screat2" style={ cssLogin.style("50%","5%") } type="password" placeholder="再次確認密碼" onChange={ (i) => this.props.onHandleChange(i) } />
						<Button variant="contained" style={ cssLogin.ButtonCss } className="login"  onClick={(i) => this.props.onHandleSubmit(i) }>註冊</Button>
					</div>
					<div style={ cssLogin.aligntCenter }>
						<p>(新會員再次確認密碼註冊)</p>
					</div>
					<div className="forgetPws" style={ cssLogin.forgetPsw() }>
						<label style={ cssLogin.forgetPsw("25px","#750075","10px") }>忘記密碼</label>
						<label style={ cssLogin.label } className="container">記住我
							<input type="checkbox" />
							<span className="checkmark"></span>
						</label>
					</div>
					<div style={ cssLogin.splitLine }></div>
				</div>
			</div>
		);
	}
}

Login.propTypes = {
	__account: PropTypes.object,
	isAuthorized:PropTypes.bool,
	PhoneNumber: PropTypes.string,
	Password: PropTypes.string,
	onHandleChange: PropTypes.func,
	onHandleSubmit: PropTypes.func,
	checkUserAuth: PropTypes.func,
	history: PropTypes.object
};


export default withRouter(Login);
