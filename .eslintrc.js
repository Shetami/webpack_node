module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'semistandard'
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	rules: {
		'no-multiple-empty-lines': [2, { max: 3, maxEOF: 1 }],
		'no-tabs': ['off', { allowIndentationTabs: true }],
		indent: ['error', 'tab', { ignoredNodes: ['TemplateLiteral'], ignoreComments: true }],
		'padded-blocks': ['error', 'always', { allowSingleLineBlocks: true }]
	}
};
