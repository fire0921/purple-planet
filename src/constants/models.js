import Immutable from "immutable";

export const TokenState = Immutable.fromJS({
	"__token": {
		id: "",
		FBtoken: "",
		isAuthorized: false,
	},
});

export const LineTokenState = Immutable.fromJS({

	id: "",
	LINEtoken: "",
	isAuthorized: false,

});

export const UserState = Immutable.fromJS({

	id:"",
	PhoneNumber:"",
	Password:"",
	Password2:"",
	JWTtoken:"",
	isAuthorized: false,
	Type:"",

});

export const __APIKEYS = "ClentSecrectKeys";
