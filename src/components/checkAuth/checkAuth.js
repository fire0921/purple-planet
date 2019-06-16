import React from "react";
import Cookies from "js-cookie";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// High Order Component
export default function requireAuthentication(Component, type) {
	class AuthenticatedComponent extends React.Component {
		componentWillMount() {
			this.checkAuth();
		}
		componentWillReceiveProps() {
			this.checkAuth();
		}
		checkAuth() {
			console.log(Cookies.get("token"));
			console.log(this.props.isAuthorized);
			if(type === "auth") {
				if(!this.props.isAuthorized){
					console.log("test");
					this.props.history.push("/login");
				}
			} else {
				if (this.props.isAuthorized) {
					this.props.history.push("/login");
				}                
			}
		}
		render() {
			return ( 
				<div> 
					{
						(type === "auth") ?
							this.props.isAuthorized === true ? <Component {...this.props } /> : null
							: this.props.isAuthorized === false ? <Component {...this.props } /> : null
					} 
				</div>
			);
		}
	}

	const mapStateToProps = (state) => ({
		isAuthorized: state.getIn(["LoginReducers", "isAuthorized"]),
	});

	return connect(mapStateToProps)(withRouter(AuthenticatedComponent));
}

