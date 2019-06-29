import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { checkAuth } from "../../actions/LoginAction";

// High Order Component
export default function requireAuthentication(Component, type) {
	class AuthenticatedComponent extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				prevPropsObj: this.props,
			};
		}

		componentDidMount() {
			if(!this.props.isAuthorized && type === "auth"){
				return this.props.checkUserAuth({ browserHistory: this.props.history });
			}else if(!this.props.isAuthorized && type === "login"){
				return this.props.checkUserAuth({ browserHistory: this.props.history });
			}
		}
		static getDerivedStateFromProps(nextProps) {
			return { prevPropsObj: nextProps};
		}

		getSnapshotBeforeUpdate() {
			if(!this.props.isAuthorized && type === "auth"){
				return "login";
			}else if(this.props.isAuthorized && type === "login"){
				return "group";
			}else{
				return null;
			}
		}
		componentDidUpdate(prevProps, prevState, snapshot) {
			if(snapshot === "login"){
				this.props.history.push("/login");
			}else if (snapshot === "group"){
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
		checkUserAuth:(payload) => (
			dispatch(checkAuth(dispatch, { browserHistory: payload.browserHistory }))
		)
	});

	return connect(mapStateToProps, checkUserAuthFun)(withRouter(AuthenticatedComponent));
}

