const metaTags = (data) => {
	const { title } = data
	return {
		title,
		htmlAttrs: {
			lang: 'en',
			dir: 'ltr'
		},
		meta: [
			{
				charset: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				name: 'HandheldFriendly',
				content: 'true'
			},
			{
				name: 'format-detection',
				content: 'telephone=yes'
			},
			{
				name: 'description',
				content:
                    'A boilerplate with Vue3, Nuxt3, SASS and technology such as Vite'
			},
			{
				name: 'keywords',
				content: 'boilerplate'
			},
			{
				name: 'language',
				content: 'english'
			},
			{
				name: 'author',
				content: 'authors'
			},
			{
				name: 'publisher',
				content: 'authors'
			},
			{
				name: 'designer',
				content: 'authors'
			},
			{
				name: 'mobile-web-app-capable',
				content: 'yes'
			},
			{
				name: 'apple-mobile-web-app-capable',
				content: 'yes'
			},
			{
				name: 'apple-mobile-web-app-status-bar-style',
				content: 'default'
			},
			{
				property: 'og:type',
				content: 'website'
			},
			{
				property: 'og:title',
				content: 'vite-boilerplate'
			},
			{
				property: 'og:url',
				content: 'https://web-site.com/'
			},
			{
				property: 'og:image',
				content: 'https://web-site.com/images/page-view.webp/'
			},
			{
				property: 'og:site_name',
				content: 'vite-boilerplate'
			},
			{
				property: 'og:description',
				content:
                    'A boilerplate with Vue3, Nuxt3, SASS and technology such as Vite'
			},
			{
				name: 'twitter:card',
				content: 'summary'
			},
			{
				name: 'twitter:title',
				content:
                    'A boilerplate with Vue3, Nuxt3, SASS and technology such as Vite'
			},
			{
				name: 'twitter:url',
				content: 'https://web-site.com/'
			},
			{
				name: 'twitter:image',
				content: 'https://web-site.com/images/page-view.webp/'
			},
			{
				name: 'twitter:description',
				content:
                    'A boilerplate with Vue3, Nuxt3, SASS and technology such as Vite'
			},
			{
				name: 'twitter:site',
				content: 'vite-boilerplate'
			},
			{
				name: 'twitter:creator',
				content: 'vite-boilerplate'
			},
			{
				name: 'robots',
				content: 'noodp'
			},
			{
				name: 'robots',
				content: 'index,follow'
			},
			{
				name: 'distribution',
				content: 'web'
			},
			{
				name: 'revisit-after',
				content: '7 days'
			}
		]
	}
}

export default metaTags
