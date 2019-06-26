import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { checkAuth } from "../../actions/LoginAction";

// High Order Component
export default function requireAuthentication(Component, type) {
	class AuthenticatedComponent extends React.Component {
		componentWillMount() {
			if(!this.props.isAuthorized && type === "auth"){
				return this.props.checkUserAuth();
			}else if(this.props.isAuthorized && type === "login"){
				return this.props.checkUserAuth();
			}
		}
		componentWillReceiveProps(nextProps) {
			if(!nextProps.isAuthorized && type === "auth"){
				this.props.history.push("/login");
			}else if(nextProps.isAuthorized && type === "login"){
				this.props.history.push("/group");
			}
		}
		render() {
			return ( 
				<div> 
					{
						(type === "auth") ?
							this.props.isAuthorized === true ? <Component {...this.props } /> : null
							: <Component {...this.props } />
					} 
				</div>
			);
		}
	}

	const mapStateToProps = (state) => ({
		isAuthorized: state.getIn(["LoginReducers", "isAuthorized"]),
	});
	const checkUserAuthFun = (dispatch) => ({
		checkUserAuth:() => (
			dispatch(checkAuth(dispatch))
		)
	});

	return connect(mapStateToProps, checkUserAuthFun)(withRouter(AuthenticatedComponent));
}

