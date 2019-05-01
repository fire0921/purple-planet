import Immutable from "immutable";

export const TokenState = Immutable.fromJS({
  "__token": {
    id: "",
    FBtoken: "",
		JWTtoken:"",
    updatedAt: "",
    completed: false,
  }
});

