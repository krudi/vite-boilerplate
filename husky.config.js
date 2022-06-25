module.exports = {
	hooks: {
		'pre-commit': 'yarn lint:js && lint:css && lint:files',
		'pre-push': 'yarn lint-fix && yarn test'
	}
}
