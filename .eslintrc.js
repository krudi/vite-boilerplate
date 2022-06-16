module.exports = {
	env: {
		browser: true,
		node: true
	},
	extends: [
		'plugin:nuxt/recommended',
		'plugin:vue/vue3-recommended'
	],
	plugins: [
		'jest'
	],
	parserOptions: {
		parser: '@babel/eslint-parser',
		allowImportExportEverywhere: true,
		sourceType: 'module',
		ecmaVersion: 2020
	},
	globals: {
		TimelineLite: false,
		TimelineMax: false,
		TweenLite: false,
		TweenMax: false,
		Back: false,
		Bounce: false,
		Circ: false,
		Cubic: false,
		Ease: false,
		EaseLookup: false,
		Elastic: false,
		Expo: false,
		Linear: false,
		Power0: false,
		Power1: false,
		Power2: false,
		Power3: false,
		Power4: false,
		Quad: false,
		Quart: false,
		Quint: false,
		RoughEase: false,
		Sine: false,
		SlowMo: false,
		SteppedEase: false,
		Strong: false,
		Draggable: false,
		SplitText: false,
		VelocityTracker: false,
		CSSPlugin: false,
		ThrowPropsPlugin: false,
		BezierPlugin: false
	},
	overrides: [
		{
			files: ['*.js'],
			rules: {
				'vue/script-indent': 'off'
			}
		},
		{
			files: ['*.vue'],
			rules: {
				indent: 'off'
			}
		}
	],
	settings: {
		jest: {
			version: require('jest/package.json').version
		}
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'quotes': [
			2,
			'single'
		],
		'camelcase': [
			2,
			{
				ignoreDestructuring: true,
				properties: 'never'
			}
		],
		'consistent-return': 'off',
		'comma-dangle': [
			'error',
			'never'
		],
		'eqeqeq': 'off',
		'import/no-cycle': 'off',
		'import/no-dynamic-require': 'off',
		'indent': [
			'error',
			'tab'
		],
		'no-tabs': 'off',
		'no-else-return': 'off',
		'no-nested-ternary': 'off',
		'no-param-reassign': [
			2,
			{
				props: false
			}
		],
		'no-return-assign': 'off',
		'no-underscore-dangle': 'off',
		'no-unused-expressions': [
			2,
			{
				allowTernary: true
			}
		],
		'no-unused-vars': [
			2,
			{
				args: 'after-used',
				argsIgnorePattern: 'commit',
				ignoreRestSiblings: true
			}
		],
		'no-use-before-define': 'off',
		'no-trailing-spaces': 'off',
		'object-curly-newline': 'off',
		'semi': [
			2,
			'never'
		],
		'semi-style': 'off',
		'space-before-function-paren': [
			2,
			'never'
		],
		'vue/attribute-hyphenation': 'off',
		'vue/attributes-order': 'off',
		'vue/html-closing-bracket-newline': 'off',
		'vue/html-closing-bracket-spacing': 'off',
		'vue/html-indent': [
			'error',
			'tab'
		],
		'vue/multiline-html-element-content-newline': 'off',
		'vue/no-v-html': 'off',
		'vue/order-in-components': [
			2,
			{
				order: [
					'el',
					'name',
					'parent',
					'inheritAttrs',
					'functional',
					[
						'delimiters',
						'comments'
					],
					[
						'components',
						'directives',
						'filters'
					],
					'extends',
					'mixins',
					'model',
					'layout',
					[
						'props',
						'propsData'
					],
					'LIFECYCLE_HOOKS',
					'watch',
					'data',
					[
						'template',
						'render'
					],
					'methods',
					'computed',
					'renderError'
				]
			}
		],
		'vue/require-component-is': 'off',
		'vue/require-prop-types': 'off',
		'vue/component-definition-name-casing': 'off',
		'vue/multi-word-component-names': 'off',
		'vue/script-indent': [
			'error',
			'tab',
			{
				baseIndent: 1,
				switchCase: 1,
				ignores: []
			}
		]
	}
}
