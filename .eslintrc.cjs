module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'simple-import-sort'],
	rules: {
		'simple-import-sort/imports': [
			'error',
			{
				groups: [
					['^react'],
					['^@mui'],
					['^@redux'],
					['^@react-redux'],
					['^@?\\w'],
					['@/(.*)'],
					['^[./]'],
				],
			},
		],
		'simple-import-sort/exports': 'error',
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],

		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
	},
};
