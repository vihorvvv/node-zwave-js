module.exports = {
	parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
	parserOptions: {
		ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
		sourceType: 'module',  // Allows for the use of imports
		project: "./tsconfig.json",
	},
	extends: [
		'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
	],
	plugins: [],
	rules: {
		// Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
		"@typescript-eslint/indent": ["warn", "tab"],
		"@typescript-eslint/no-parameter-properties": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-use-before-define": ["error", {
			"functions": false,
			"typedefs": false,
		}],
		"@typescript-eslint/no-unused-vars": ["error", {
			"ignoreRestSiblings": true,
			"argsIgnorePattern": "^_",
		}],
		"@typescript-eslint/explicit-function-return-type": ["warn", {
			allowExpressions: true,
			allowTypedFunctionExpressions: true,
		}],
		"@typescript-eslint/no-object-literal-type-assertion": "off",
		"@typescript-eslint/interface-name-prefix": "off",
	},
	overrides: [{
		files: ["*.test.ts"],
		rules: {
			"@typescript-eslint/explicit-function-return-type": "off",
		},
	}]
};
