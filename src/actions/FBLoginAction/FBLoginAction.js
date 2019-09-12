import { createAction } from "redux-actions"; // eslint-disable-next-line
import {
	__loginFb,
	__authCompleteFb,
	__checkAuthFb,
	__authErrorFb
} from "../../constants/actionTypes";
import authFb from "../../utils/authFb.js";

export const loginActionFb = createAction("__loginFb", authFb.login_fb_api);
export const authCompleteFb = createAction("__authCompleteFb");
export const authErrorFb = createAction("__authErrorFb");
export const checkAuthFb = createAction("__checkAuthFb");
