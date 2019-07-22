import React from "react";
import PropTypes from "prop-types";
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
			if(!this.props.isFBAuthorized && !this.props.isAuthorized){
				return this.props.checkUserAuth({ browserHistory: this.props.history, authTypes: type });
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

	AuthenticatedComponent.propTypes = {
		history: PropTypes.object,
		isAuthorized: PropTypes.bool,
		checkUserAuth: PropTypes.func,
		isFBAuthorized: PropTypes.bool,
	};

	const mapStateToProps = (state) => ({
		isAuthorized: state.getIn(["LoginReducers", "isAuthorized"]),
		isFBAuthorized: state.getIn(["FBLoginReducers", "__token", "isAuthorized"]),
	});
	const checkUserAuthFun = (dispatch) => ({
		checkUserAuth:(payload) => (
			dispatch(checkAuth(dispatch, { browserHistory: payload.browserHistory, authTypes: payload.authTypes }))
		)
	});

	return connect(mapStateToProps, checkUserAuthFun)(withRouter(AuthenticatedComponent));
}



