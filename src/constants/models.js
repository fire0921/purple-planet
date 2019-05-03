import Immutable from "immutable";

export const TokenState = Immutable.fromJS({
	"__token": {
		id: "",
		FBtoken: "",
		JWTtoken:"",
		updatedAt: "",
		completed: false,
	},
	"__account": {
		id:"",
		PhoneNumber:"",
		Password:"",
		Password2:"",
		completed: false,
	},
});

export const __APIKEYS = "ClentSecrectKeys";
