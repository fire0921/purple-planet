import Immutable from "immutable";

export const TokenState = Immutable.fromJS({
	"__token": {
		id: "",
		FBtoken: "",
		JWTtoken:"",
		updatedAt: "",
		completed: false,
	},
});

export const UserState = Immutable.fromJS({

	id:"",
	PhoneNumber:"",
	Password:"",
	Password2:"",
	JWTtoken:"",
	isAuthorized: false,

});

export const __APIKEYS = "ClentSecrectKeys";
