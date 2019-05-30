import { createAction } from "redux-actions";
import WebAPI from "../../utils/WebAPI";
import {        // eslint-disable-next-line
	__LOGININFO,  // eslint-disable-next-line
	__LOGINBTN,  // eslint-disable-next-line
	__authComplete,  // eslint-disable-next-line
	__authError,   // eslint-disable-next-line
	__startLogout, // eslint-disable-next-line
	__checkAuth, // eslint-disable-next-line
	__setUser,
} from "../../constants/actionTypes";

export const LoginInfo = createAction("__LOGININFO");
export const LoginBtnAction = createAction("__LOGINBTN", WebAPI.Login);
export const authComplete = createAction("__authComplete");
export const authError = createAction("__authError");
export const checkAuth = createAction("__checkAuth");
export const setUser = createAction("__setUser");
