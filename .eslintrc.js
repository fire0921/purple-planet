module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"node": true
	},
	"settings": {
		"react": {
			"createClass": "createReactClass", // Regex for Component Factory to use,
			// default to "createReactClass"
			"pragma": "React",  // Pragma to use, default to "React"
			"version": "detect", // React version. "detect" automatically picks the version you have installed.
			// You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
			"flowVersion": "0.53" // Flow version
		},
		"propWrapperFunctions": [
			// The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
			"forbidExtraProps",
			{"property": "freeze", "object": "Object"},
			{"property": "myFavoriteWrapper"}
		]
	}
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
	],
	"parserOptions": {
		"ecmaVersion": true,
		"ecmaFeatures": {
			"jsx": true
		},
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"no-console":"off",
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
		"semi": [
			"error",
			"always"
		]
	}
};
