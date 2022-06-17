import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
	ssr: false,
	components: true,
	target: 'static',
	nitro: {
		preset: 'node'
	},
	features: {
		store: false,
		transition: true,
		validate: false
	},
	generate: {
		fallback: true
	},
	plugins: [
		// Code
	],
	buildModules: ['nuxt-purgecss'],
	modules: [
		// Code
	],
	build: {
		extractCSS: true,
		parallel: true,
		postcss: {
			postcssOptions: require('./postcss.config.js')
		},
		optimization: {
			splitChunks: {
				layouts: true,
				pages: true,
				commons: true,
				cacheGroups: {
					styles: {
						name: 'styles',
						test: /\.(css|vue)$/,
						chunks: 'all',
						enforce: true
					}
				},
				html: {
					minify: {
						collapseBooleanAttributes: true,
						decodeEntities: true,
						minifyCSS: true,
						minifyJS: true,
						processConditionalComments: true,
						collapseInlineTagWhitespace: true,
						removeOptionalTags: true,
						removeAttributeQuotes: true,
						removeEmptyAttributes: true,
						removeRedundantAttributes: true,
						trimCustomFragments: true,
						useShortDoctype: true,
						collapseWhitespace: true,
						removeScriptTypeAttributes: true,
						removeStyleLinkTypeAttributes: true,
						removeComments: true,
						continueOnParseError: true
					}
				}
			}
		}
	},
	purgeCSS: {
		enabled: true,
		paths: [
			'~/pages/**/*.vue',
			'~/layouts/**/*.vue',
			'~/components/**/*.vue',
			'~/assets/js/**/*.js'
		],
		styleExtensions: ['.css'],
		whitelistPatterns: [/svg.*/, /fa.*/],
		whitelist: ['body', 'html'],
		extractors: [
			{
				extractor: (content) => content.match(/[A-z0-9-:\\/]+/g) || [],
				extensions: ['html', 'vue', 'js']
			}
		]
	}
})
