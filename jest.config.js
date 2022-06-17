module.exports = {
	globals: {
		'@vue/vue3-jest': {
			babelConfig: true
		}
	},
	transform: {
		'^.+\\.vue$': '@vue/vue3-jest',
		'^.+\\js$': 'babel-jest'
	},
	moduleFileExtensions: ['vue', 'js', 'json']
}
