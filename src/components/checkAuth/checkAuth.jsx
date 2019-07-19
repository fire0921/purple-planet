import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { checkAuth } from "../../actions/LoginAction";
import Immutable from "immutable";

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
			if(!this.props.isAuthorized){
				return this.props.checkUserAuth({ browserHistory: this.props.history, Types: type });
			}
		}
		static getDerivedStateFromProps(nextProps, prevState) {
			if(!Immutable.is(nextProps, prevState.prevPropsObj)){
				return { prevPropsObj: nextProps};
			}else{
				return null;
			}
		}

		getSnapshotBeforeUpdate(prevProps) {
			if(Immutable.is(this.props, prevProps)){
				return null;
			}else if(this.props.isAuthorized && type === "login"){
				return "group";
			}else{
				return "login";
			}
		}
		componentDidUpdate(prevProps, prevState, snapshot) {
			if(snapshot === "login"){
				//this.props.history.push("/login");
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
			dispatch(checkAuth(dispatch, { browserHistory: payload.browserHistory, Types: type }))
		)
	});

	return connect(mapStateToProps, checkUserAuthFun)(withRouter(AuthenticatedComponent));
}

