<template>
	<main
		id="page-index"
		class="page-index"
	>
		<span class="page-index-title">Page: index.vue</span>
	</main>
</template>

<script>
	import MetaTags from '~/plugins/meta-tags'

	export default {
		name: 'index',
		setup() {
			definePageMeta({
				layout: 'default'
			})
			useMeta(MetaTags(
				{
					title: 'vite-boilerplate :: Home'
				}
			))
		}
	}
</script>

<style
	lang="scss"
	scoped
>
	.page-index {
		text-align: center;
		&-title {
			max-width: 55ch;
			margin: 1rem 0 1rem 0;
			display: inline-block;
			color: $grey;
		}
	}
</style>
