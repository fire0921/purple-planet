import { createAction } from "redux-actions";
// eslint-disable-next-line
import { __getGroupData, __lowEnoughHeight, __getDataComplete } from "../../constants/actionTypes";
import getData from "../../utils/getData.js";

export const low_enough_height = createAction("__lowEnoughHeight", getData.getGroupData);
export const get_group_data = createAction("__getGroupData");
export const get_data_complete = createAction("__getDataComplete");

