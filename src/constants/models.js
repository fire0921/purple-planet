import Immutable from "immutable";

export const TokenState = Immutable.fromJS({
	__token: {
		userId: "",
		FBtoken: "",
		userName: "",
		isAuthorized: false,
		type: "FB"
	}
});

export const LineTokenState = Immutable.fromJS({
	LINEtoken: "",
	isAuthorized: false,
	type: "LINE"
});

export const UserState = Immutable.fromJS({
	PhoneNumber: "",
	Password: "",
	Password2: "",
	JWTtoken: "",
	isAuthorized: false,
	Type: "origin"
});

export const groupState = Immutable.fromJS({
	scroll: {
		page: 10,
		loading: false,
		complete: false
	},
	groupData: []
});

export const __APIKEYS = "ClentSecrectKeys";
