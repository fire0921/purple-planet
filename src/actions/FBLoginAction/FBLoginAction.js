import { createAction } from "redux-actions";
// eslint-disable-next-line
import { __FBLOGIN } from "../../constants/actionTypes";
import WebAPI from "../../utils/WebAPI";

export const FBLoginAction = createAction("__FBLOGIN", WebAPI.FBLogin);
