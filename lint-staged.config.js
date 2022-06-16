module.exports = {
	'lint-staged': {
		'*.{ts,js}': [
			'npx eslint --ext .js,.vue .',
			'git add'
		],
		'*.{css,scss}': [
			'npx stylelint .css,.scss .',
			'git add'
		],
		'*.{json,txt}': [
			'npx prettier --write .',
			'git add'
		]
	}
}
