import { createAction } from "redux-actions"; // eslint-disable-next-line
import { __LOGIN } from "../../constants/actionTypes"; // eslint-disable-next-line
import { __LOGINBTN } from "../../constants/actionTypes";

export const LoginAction = createAction("__LOGIN");
export const LoginBtnAction = createAction("__LOGINBTN");
